import { useForm, SubmitHandler } from "react-hook-form";
import { Footer } from "../../components/footer";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";
import {
  tAddress,
  tRegisterUserForm,
  tUser,
} from "../../providers/AuthProvider/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserFormSchema } from "../../providers/AuthProvider/schemas";
import { useAuth } from "../../hooks/useAuth";
import { MaskedInput } from "../../components/MaskedInput";
import InputMask from "react-input-mask";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm<tRegisterUserForm>({
    resolver: zodResolver(registerUserFormSchema),
  });

  const { registerUser, requesting } = useAuth();

  const checkCEP = (e: { target: HTMLInputElement }) => {
    const cep = e.target.value.replace(/\D/g, "");

    if (cep != "") {
      try {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((res) => res.json())
          .then((data) => {
            setValue("state", data.uf);
            setValue("city", data.localidade);
            setValue("street", data.logradouro);
            setFocus("number");
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const submit: SubmitHandler<tRegisterUserForm> = async (
    data: tRegisterUserForm
  ) => {
    console.log(data.isSeller);
    data.isSeller = data.isSeller === "true" ? true : false;

    const address: tAddress = {
      street: data.street,
      city: data.city,
      cep: data.cep,
      number: data.number,
      state: data.state,
      complement: data.complement,
    };

    const user: tUser = {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      password: data.password,
      tel: data.tel,
      dateBirth: data.dateBirth,
      description: data.description,
      isSeller: data.isSeller,
      address: address,
    };

    registerUser(user);
  };

  return (
    <>
      <div className={"h-full min-w-screen box-border"}>
        <Navbar />

        <div className={"flex justify-center w-full bg-colorGreyScaleGrey8"}>
          <div
            className={
              "my-12 max-w-[343px] sm:max-w-[412px] w-full min-h-fit rounded px-7 lg:px-12 py-7 bg-colorGreyScaleGrey10"
            }
          >
            <h2 className={"text-2xl font-medium mb-8"}>Cadastro</h2>

            <form
              onSubmit={handleSubmit(submit)}
              className={"flex flex-col gap-6"}
            >
              <h3 className={"text-sm font-medium"}>Informações pessoais</h3>

              <Input
                type="text"
                label="Nome"
                placeholder="Ex: Samuel Leão"
                register={register("name")}
              />
              {errors.name && (
                <span className={"text-colorFeedbackAlert1 text-sm"}>
                  {errors.name.message}
                </span>
              )}

              <Input
                type="email"
                label="Email"
                placeholder="Ex: samuel@kenzie.com.br"
                register={register("email")}
              />
              {errors.email && (
                <span className={"text-colorFeedbackAlert1 text-sm"}>
                  {errors.email.message}
                </span>
              )}

              <MaskedInput
                label="CPF"
                placeholder="000.000.000-00"
                register={register("cpf")}
                mask="999.999.999-99"
              />
              {errors.cpf && (
                <span className={"text-colorFeedbackAlert1 text-sm"}>
                  {errors.cpf.message}
                </span>
              )}

              <MaskedInput
                label="Celular"
                placeholder="(DDD) 90000-0000"
                register={register("tel")}
                mask="(99) 99999-9999"
              />
              {errors.tel && (
                <span className={"text-colorFeedbackAlert1 text-sm"}>
                  {errors.tel.message}
                </span>
              )}

              <MaskedInput
                label="Data de nascimento"
                placeholder="00/00/00"
                register={register("dateBirth")}
                mask="99/99/9999"
              />
              {errors.dateBirth && (
                <span className={"text-colorFeedbackAlert1 text-sm"}>
                  {errors.dateBirth.message}
                </span>
              )}

              <Input
                type="text"
                label="Descrição"
                placeholder="Digitar descrição"
                register={register("description")}
                isRequired={false}
              />
              {errors.description && (
                <span className={"text-colorFeedbackAlert1 text-sm"}>
                  {errors.description.message}
                </span>
              )}

              <h3 className={"text-sm font-medium"}>Informações de endereço</h3>

              <div className={"flex flex-col gap-2"}>
                <label htmlFor={"CEP"} className={"text-sm"}>
                  CEP
                </label>

                <InputMask
                  id="CEP"
                  mask="99999-999"
                  {...register("cep")}
                  onBlur={checkCEP}
                  placeholder="00000-000"
                  className={
                    "h-12 rounded border-2 border-colorGreyScaleGrey7 focus:outline-none focus:border-colorBrandBrand2 invalid:border-colorFeedbackAlert1 px-4"
                  }
                />
              </div>
              {errors.cep && (
                <span className={"text-colorFeedbackAlert1 text-sm"}>
                  {errors.cep.message}
                </span>
              )}

              <div className={"flex gap-[9px]"}>
                <div className={"w-2/4"}>
                  <Input
                    type="text"
                    label="Estado"
                    placeholder="Digitar Estado"
                    register={register("state")}
                  />
                  {errors.state && (
                    <span className={"text-colorFeedbackAlert1 text-sm"}>
                      {errors.state.message}
                    </span>
                  )}
                </div>

                <div className={"w-2/4"}>
                  <Input
                    type="text"
                    label="Cidade"
                    placeholder="Digitar cidade"
                    register={register("city")}
                  />
                  {errors.city && (
                    <span className={"text-colorFeedbackAlert1 text-sm"}>
                      {errors.city.message}
                    </span>
                  )}
                </div>
              </div>

              <Input
                type="text"
                label="Rua"
                placeholder="Digitar rua"
                register={register("street")}
              />
              {errors.street && (
                <span className={"text-colorFeedbackAlert1 text-sm"}>
                  {errors.street.message}
                </span>
              )}

              <div className={"flex gap-[9px]"}>
                <div className={"w-2/4"}>
                  <Input
                    type="text"
                    label="Número"
                    placeholder="Digitar número"
                    register={register("number")}
                  />
                  {errors.number && (
                    <span className={"text-colorFeedbackAlert1 text-sm"}>
                      {errors.number.message}
                    </span>
                  )}
                </div>

                <div className={"w-2/4"}>
                  <Input
                    type="text"
                    label="Complemento"
                    placeholder="Ex: apart 307"
                    register={register("complement")}
                    isRequired={false}
                  />
                </div>
              </div>

              <h3 className={"text-sm font-medium"}>Tipo de conta</h3>

              <div className={"flex gap-[9px]"}>
                <div className={"flex-1"}>
                  <input
                    type="radio"
                    id="buyer"
                    value={"false"}
                    className={"hidden peer/buyer"}
                    {...register("isSeller")}
                  />
                  <label
                    htmlFor="buyer"
                    className={
                      "flex flex-col justify-center items-center h-12 w-full border-2 border-colorGreyScaleGrey4 peer-checked/buyer:border-colorBrandBrand1 cursor-pointer rounded text-base font-semibold text-colorGreyScaleGrey0 peer-checked/buyer:text-colorColorsFixedWhiteFixed peer-checked/buyer:bg-colorBrandBrand1"
                    }
                  >
                    Comprador
                  </label>
                </div>

                <div className={"flex-1"}>
                  <input
                    type="radio"
                    id="advertiser"
                    value={"true"}
                    className={"hidden peer/advertiser"}
                    {...register("isSeller")}
                  />
                  <label
                    htmlFor="advertiser"
                    className={
                      "flex flex-col justify-center items-center h-12 w-full border-2 border-colorGreyScaleGrey4 peer-checked/advertiser:border-colorBrandBrand1 cursor-pointer rounded text-base font-semibold text-colorGreyScaleGrey0 peer-checked/advertiser:text-colorColorsFixedWhiteFixed peer-checked/advertiser:bg-colorBrandBrand1"
                    }
                  >
                    Anunciante
                  </label>
                </div>
              </div>

              <Input
                type="password"
                label="Senha"
                placeholder="Digitar senha"
                register={register("password")}
              />
              {errors.password && (
                <span className={"text-colorFeedbackAlert1 text-sm"}>
                  {errors.password.message}
                </span>
              )}

              <Input
                type="password"
                label="Confirmar senha"
                placeholder="Digitar senha"
                register={register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <span className={"text-colorFeedbackAlert1 text-sm"}>
                  {errors.confirmPassword.message}
                </span>
              )}

              <button
                type="submit"
                className={
                  "h-12 rounded py-3 px-7 bg-colorBrandBrand1 hover:bg-colorBrandBrand2 text-base text-colorColorsFixedWhiteFixed font-semibold"
                }
              >
                {requesting ? "Cadastrando..." : "Finalizar cadastro"}
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
