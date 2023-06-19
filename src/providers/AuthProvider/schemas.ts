import { z } from "zod";
import { returnCarSchema } from "../AdsProvider/ads.schemas";

export const registerUserFormSchema = z
  .object({
    name: z.string().min(3).max(255),
    email: z.string().email({ message: "Invalid email address" }),
    cpf: z.string().min(14),
    password: z.string().min(6).max(255),
    confirmPassword: z.string().min(6).max(255),
    tel: z.string().min(15),
    dateBirth: z.string(),
    description: z.string().nullable(),
    isSeller: z.string().or(z.boolean()).nullable(),
    street: z.string().min(1).max(255),
    city: z.string().min(1).max(255),
    cep: z.string().length(9),
    number: z.string().min(1).max(11),
    state: z.string().max(150),
    complement: z.string().nullable(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const addressSchema = z.object({
  street: z.string().min(1).max(255),
  city: z.string().min(1).max(255),
  cep: z.string().length(9),
  number: z.string().min(1).max(11),
  state: z.string().max(150),
  complement: z.string().nullable(),
});

export const returnAddressSchema = addressSchema.extend({
  id: z.string().uuid(),
});

export const userSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email({ message: "Invalid email address" }),
  cpf: z.string().min(11),
  password: z.string().min(6).max(255),
  tel: z.string().min(11),
  dateBirth: z.string(),
  description: z.string().nullable(),
  isSeller: z.boolean().default(false),
  address: addressSchema,
});

export const returnUserSchema = userSchema.extend({
  id: z.string().uuid(),
  address: returnAddressSchema,
  announcement: z.array(returnCarSchema).optional(),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});
