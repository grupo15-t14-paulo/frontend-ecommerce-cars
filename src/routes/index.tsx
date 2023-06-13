import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { DetailCar } from "../pages/DetailCar";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login" element={<Register />} />
      <Route path="/dashboard/:id" element={<DetailCar />} />
    </Routes>
  );
};
