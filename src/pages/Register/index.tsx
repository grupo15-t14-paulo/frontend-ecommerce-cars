import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";

export const Register = () => {
  return (
    <>
      <div className={"h-full min-w-screen box-border"}>
        <Navbar />

        <div
          className={
            "flex justify-center w-full min-h-[80vh] bg-colorGreyScaleGrey8"
          }
        >
          <div
            className={
              "mt-[52px] max-w-[343px] sm:max-w-[412px] w-full min-h-fit rounded px-7 lg:px-12 py-7 bg-colorGreyScaleGrey10"
            }
          >
            <h2 className={"text-2xl font-medium mb-8"}>Cadastro</h2>

            <form className={"flex flex-col gap-6"}>
              <h3 className={"text-sm font-medium"}>Informações pessoais</h3>

              <Input type="text" label="Nome" placeholder="Ex: Samuel Leão" />

              <Input
                type="email"
                label="Email"
                placeholder="Ex: samuel@kenzie.com.br"
              />

              <Input type="text" label="CPF" placeholder="000.000.000-00" />

              <Input
                type="text"
                label="Celular"
                placeholder="(DDD) 90000-0000"
              />

              <Input
                type="text"
                label="Data de nascimento"
                placeholder="00/00/00"
              />

              <Input
                type="text"
                label="Descrição"
                placeholder="Digitar descrição"
              />

              <h3 className={"text-sm font-medium"}>Informações de endereço</h3>

              <Input type="text" label="CEP" placeholder="00000.000" />

              <div className={"flex gap-[9px]"}>
                <div className={"w-2/4"}>
                  <Input
                    type="text"
                    label="Estado"
                    placeholder="Digitar Estado"
                  />
                </div>

                <div className={"w-2/4"}>
                  <Input
                    type="text"
                    label="Cidade"
                    placeholder="Digitar cidade"
                  />
                </div>
              </div>

              <Input type="text" label="Rua" placeholder="Digitar rua" />

              <div className={"flex gap-[9px]"}>
                <div className={"w-2/4"}>
                  <Input
                    type="text"
                    label="Número"
                    placeholder="Digitar número"
                  />
                </div>

                <div className={"w-2/4"}>
                  <Input
                    type="text"
                    label="Complemento"
                    placeholder="Ex: apart 307"
                  />
                </div>
              </div>

              <h3 className={"text-sm font-medium"}>Tipo de conta</h3>

              <div className={"flex gap-[9px]"}>
                <div className={"flex-1"}>
                  <label
                    htmlFor="comprador"
                    className={
                      "flex flex-col justify-center items-center h-12 border-2 border-colorGreyScaleGrey4 cursor-pointer rounded text-base font-semibold text-colorGreyScaleGrey0"
                    }
                  >
                    Comprador
                  </label>
                  <input type="radio" id="comprador" className={"hidden"} />
                </div>

                <div className={"flex-1"}>
                  <label
                    htmlFor="anunciante"
                    className={
                      "flex flex-col justify-center items-center h-12 border-2 border-colorGreyScaleGrey4 cursor-pointer rounded text-base font-semibold text-colorGreyScaleGrey0"
                    }
                  >
                    Anunciante
                  </label>
                  <input type="radio" id="anunciante" className={"hidden"} />
                </div>
              </div>

              <Input
                type="password"
                label="Senha"
                placeholder="Digitar senha"
              />

              <Input
                type="password"
                label="Confirmar senha"
                placeholder="Digitar senha"
              />

              <button
                type="submit"
                className={
                  "h-12 rounded py-3 px-7 bg-colorBrandBrand1 hover:bg-colorBrandBrand2 text-base text-colorColorsFixedWhiteFixed font-semibold"
                }
              >
                Finalizar Cadastro
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
