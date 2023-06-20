import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ResetPasswordData, resetPasswordSchema } from "../../schemas/userResetPassword";
import { useAuth } from "../../hooks/useAuth";


interface ResetPasswordFormProps {
    token: string;
}
  
export const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
    const { register, handleSubmit } = useForm<ResetPasswordData>({
      resolver: zodResolver(resetPasswordSchema)
    });

    const {resetPassword} = useAuth()

    const onFormSubmit = (formData: ResetPasswordData) => {
        console.log(formData);
        console.log(token);
        resetPassword(formData,token)
      };
    return (
        
        <form
        onSubmit={handleSubmit(onFormSubmit)}
        className={"flex flex-col gap-6"}
      >
        <label htmlFor="password">
            Nova senha
        </label>
        <input
          className="h-12 rounded border-2 border-colorGreyScaleGrey7 focus:outline-none focus:border-colorBrandBrand2 px-4"
          type="password"
          placeholder="Sua nova senha"
          {...register("password")}
        />


        <label htmlFor="confirmPassword">
            Confirmação da senha
        </label>
        <input
          className="h-12 rounded border-2 border-colorGreyScaleGrey7 focus:outline-none focus:border-colorBrandBrand2 px-4"
          type="password"
          placeholder="Confirmação da senha"
          {...register("passwordConfirm")}
        />

        <button
          type="submit"
          className={
            "h-12 rounded py-3 px-7 bg-colorBrandBrand1 hover:bg-colorBrandBrand2 text-base text-colorColorsFixedWhiteFixed font-semibold"
          }
        >
          Enviar!
        </button>

      </form>
    )
}