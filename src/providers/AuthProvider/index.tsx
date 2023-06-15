import { createContext, ReactNode } from "react";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  data: string;
}

const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const data = "";
  return (
    <AuthContext.Provider value={{ data }}>{children}</AuthContext.Provider>
  );
};
