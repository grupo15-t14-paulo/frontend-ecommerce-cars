import { useForm } from "react-hook-form"
import { SendEmailResetPasswordData, sendEmailResetPasswordSchema } from "../../schemas/userResetPassword"
import { zodResolver } from "@hookform/resolvers/zod"

export const SendEmailForm = () => {
    const {register,handleSubmit} = useForm<SendEmailResetPasswordData>({
        resolver:zodResolver(sendEmailResetPasswordSchema)
    })
    const onFormSubmit = (formData:SendEmailResetPasswordData)=>{
        console.log(formData)
    }
    return (
        
        <form onSubmit={handleSubmit(onFormSubmit)}
        className={"flex flex-col gap-6"}
      >
        <label htmlFor="email" >
            Informe um e-mail para a recuperação da senha
        </label>
        <input 
          className="h-12 rounded border-2 border-colorGreyScaleGrey7 focus:outline-none focus:border-colorBrandBrand2 px-4"
          type="email"
          placeholder="Digitar email"
          {...register("email")}
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