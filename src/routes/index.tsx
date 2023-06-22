import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { DetailCar } from "../pages/DetailCar";
import { Profile } from "../pages/Profile";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { SendEmailResetPassword } from "../pages/ResetPassword";
import { ResetPassword } from "../pages/ConfirmResetPassword";
import { UserAnnouncements } from "../pages/UserAnnouncements";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetPassword" element={<SendEmailResetPassword />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/:carId" element={<DetailCar />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users/:id" element={<UserAnnouncements />} />
    </Routes>
  );
};
