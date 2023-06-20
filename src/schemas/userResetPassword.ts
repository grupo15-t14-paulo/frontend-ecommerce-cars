import { z } from "zod";

export const userSchema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z.string().email("Deve ser um e-mail válido"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export const loginSchema = userSchema.omit({
  name: true,
});

export const sendEmailResetPasswordSchema = loginSchema.omit({
  password: true,
});

export const resetPasswordSchema = userSchema
  .omit({
    name: true,
    email: true,
  })
  .extend({
    passwordConfirm: z.string().min(1, "A confirmação de senha é obrigatória"),
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    message: "As senhas precisam corresponderem",
    path: ["confirm"],
  });

export type UserData = z.infer<typeof userSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
export type SendEmailResetPasswordData = z.infer<
  typeof sendEmailResetPasswordSchema
>;
