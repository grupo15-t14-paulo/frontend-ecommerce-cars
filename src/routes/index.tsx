import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { DetailCar } from "../pages/DetailCar";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/:id" element={<DetailCar />} />
    </Routes>
  );
};
