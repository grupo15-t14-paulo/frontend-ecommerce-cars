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

export type tRegisterUserForm = z.infer<typeof registerUserFormSchema>;
export type tUser = z.infer<typeof userSchema>;
export type tAddress = z.infer<typeof addressSchema>;
export type tReturnUser = z.infer<typeof returnUserSchema>;
export type tUpdateUserWithoutAddress = DeepPartial<
  z.infer<typeof userWithoutAddress>
>;
export type tLogin = z.infer<typeof loginSchema>;
