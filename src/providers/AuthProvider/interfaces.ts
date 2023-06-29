import { z } from "zod";
import {
  addressSchema,
  loginSchema,
  registerUserFormSchema,
  returnUserSchema,
  userSchema,
  userWithoutAddress,
} from "./schemas";
import { DeepPartial } from "react-hook-form";
import { ReactNode } from "react";
import { SendEmailResetPasswordData, ResetPasswordData } from "../../schemas/userResetPassword";

export type tRegisterUserForm = z.infer<typeof registerUserFormSchema>;
export type tUser = z.infer<typeof userSchema>;
export type tAddress = z.infer<typeof addressSchema>;
export type tUpdateAddress = DeepPartial<z.infer<typeof addressSchema>>;
export type tReturnUser = z.infer<typeof returnUserSchema>;
export type tUpdateUserWithoutAddress = DeepPartial<
  z.infer<typeof userWithoutAddress>
>;
export type tLogin = z.infer<typeof loginSchema>;


export interface IAuthProviderProps {
  children: ReactNode;
}

export interface IAuthContextValues {
  registerUser: (data: tUser) => void;
  updateUser: (data: tUpdateUserWithoutAddress) => void;
  updateUserAddress: (data: tUpdateAddress) => void;
  login: (data: tLogin) => void;
  sendEmail: (sendEmailResetPasswordData: SendEmailResetPasswordData) => void;
  resetPassword: (resetPasswordData: ResetPasswordData, token: string) => void;
  user: tReturnUser | null;
  setUser: React.Dispatch<React.SetStateAction<tReturnUser | null>>;
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