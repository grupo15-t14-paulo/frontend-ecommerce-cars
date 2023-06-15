import { z } from "zod";
import { addressSchema, createUserFormSchema, userSchema } from "./schemas";

export type tCreateUserForm = z.infer<typeof createUserFormSchema>;
export type tUser = z.infer<typeof userSchema>;
export type tAddress = z.infer<typeof addressSchema>;
