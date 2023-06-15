import { createContext, ReactNode, useEffect, useState } from "react";
import { tLogin, tReturnUser, tUser } from "./interfaces";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  registerUser: (data: tUser) => void;
  login: (data: tLogin) => void;
  user: tReturnUser | null;
  requesting: boolean;
}

export const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<tReturnUser | null>(null);
  const [requesting, setRequesting] = useState(false);
  

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("user-ecommerce-cars:token");

      if (!token) {
        return;
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
  }, []);

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

  

  return (
    <AuthContext.Provider value={{ registerUser, login, user, requesting }}>
      {children}
    </AuthContext.Provider>
  );
};
