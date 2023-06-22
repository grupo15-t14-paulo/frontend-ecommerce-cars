import { createContext, ReactNode, useEffect, useState } from "react";
import { tLogin, tReturnUser, tUpdateUserWithoutAddress, tUser } from "./interfaces";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";
import { ResetPasswordData, SendEmailResetPasswordData } from "../../schemas/userResetPassword";
import { toast } from "react-toastify";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  registerUser: (data: tUser) => void;
  updateUser: (data: tUpdateUserWithoutAddress) => void;
  login: (data: tLogin) => void;
  sendEmail: (sendEmailResetPasswordData: SendEmailResetPasswordData) => void;
  resetPassword: (resetPasswordData: ResetPasswordData, token: string) => void;
  user: tReturnUser | null;
  requesting: boolean;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
  handleCloseModal: () => void;
  deleteUser: () => void;
}

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

      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setRequesting(false);
    }
  };

  const updateUser = async (data: tUpdateUserWithoutAddress) => {
    try {
      const response = await api.patch("users", data);

      setUser(response.data);
    } catch (error) {
      console.log(error);
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

      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setRequesting(false);
    }
  };

  const sendEmail = (sendEmailResetPasswordData: SendEmailResetPasswordData) => {
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
  const resetPassword = (resetPasswordData: ResetPasswordData, token: string) => {
    api
      .patch(`/users/resetPassword/${token}`, { password: resetPasswordData.password })
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
        deleteUser,
        login,
        sendEmail,
        resetPassword,
        user,
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
