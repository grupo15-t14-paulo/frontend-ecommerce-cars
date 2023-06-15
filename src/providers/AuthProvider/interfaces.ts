import { z } from "zod";
import {
  addressSchema,
  loginSchema,
  registerUserFormSchema,
  returnUserSchema,
  userSchema,
} from "./schemas";

export type tRegisterUserForm = z.infer<typeof registerUserFormSchema>;
export type tUser = z.infer<typeof userSchema>;
export type tAddress = z.infer<typeof addressSchema>;
export type tReturnUser = z.infer<typeof returnUserSchema>;
export type tLogin = z.infer<typeof loginSchema>;