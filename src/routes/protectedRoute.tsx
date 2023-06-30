import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export const ProtectedRoutes = () => {
    const { user, loading } = useContext(AuthContext);
  
    if (loading) {
      return null;
    }
  
    return !user ? <Outlet /> : <Navigate to={"/"} />;
  };
  
  

