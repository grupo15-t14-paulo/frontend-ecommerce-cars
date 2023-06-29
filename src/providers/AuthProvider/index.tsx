import { createContext, useEffect, useState } from "react";
import {
  IAuthContextValues,
  IAuthProviderProps,
  tLogin,
  tReturnUser,
  tUpdateAddress,
  tUpdateUserWithoutAddress,
  tUser,
} from "./interfaces";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";
import {
  ResetPasswordData,
  SendEmailResetPasswordData,
} from "../../schemas/userResetPassword";
import { toast } from "react-toastify";

export const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<tReturnUser | null>(null);
  const [requesting, setRequesting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setModalType("");
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("user-ecommerce-cars:token");

      if (!token) {
        setUser(null);
      }

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const response = await api.get("users");

        setUser(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };

    loadUser();
  }, [loading]);

  const registerUser = async (data: tUser) => {
    try {
      setRequesting(true);

      await api.post("users", data);

      toast.success("Usuário registrado com sucesso!");

    } catch (error) {
      toast.error("Ops, algo deu errado!");
    } finally {
      setRequesting(false);
    }
  };

  const updateUser = async (data: tUpdateUserWithoutAddress) => {
    try {
      setLoading(true)
      await api.patch("users", data);

      toast.success("Perfil editado com sucesso!");
    } catch (error) {
      toast.error("Ops, algo deu errado!");
    }finally{
      setLoading(false)
    }
    
  };

  const updateUserAddress = async (data: tUpdateAddress) => {
    setLoading(true);

    try {
      await api.patch("users/address", data);

      toast.success("Endereço editado com sucesso!");
    } catch (error) {
      toast.error("Ops, algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete("users");

      setUser(null);
      localStorage.removeItem("user-ecommerce-cars:token");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data: tLogin) => {
    try {
      setRequesting(true);

      const response = await api.post("login", data);

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("user-ecommerce-cars:token", token);

      const userResponse = await api.get("users");

      setUser(userResponse.data);

      toast.success("Usuário logado com sucesso!");

      navigate("/")
    } catch (error) {
      toast.error("Ops, algo deu errado!");
    } finally {
      setRequesting(false);
    }
  };

  const sendEmail = (
    sendEmailResetPasswordData: SendEmailResetPasswordData
  ) => {
    api
      .post("/users/resetPassword", sendEmailResetPasswordData)
      .then(() => {
        toast.success("Email enviado com sucesso!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "Erro ao enviar o e-mail tente novamente mais tarde ou verifique se o e-mail esta correto"
        );
      });
  };
  const resetPassword = (
    resetPasswordData: ResetPasswordData,
    token: string
  ) => {
    api
      .patch(`/users/resetPassword/${token}`, {
        password: resetPasswordData.password,
      })
      .then(() => {
        toast.success("Senha atualizada com sucesso!");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao atualizar a senha");
      });
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        updateUser,
        updateUserAddress,
        deleteUser,
        login,
        sendEmail,
        resetPassword,
        user,
        setUser,
        requesting,
        loading,
        setLoading,
        modalIsOpen,
        setModalIsOpen,
        modalType,
        setModalType,
        handleCloseModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
