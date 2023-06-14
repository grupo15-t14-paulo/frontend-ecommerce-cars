import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Navbar } from "../../components/Navbar";

export const Login = () => {
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
              "mt-[52px] lg:mt-32 max-w-[343px] sm:max-w-[412px] w-full min-h-fit rounded px-7 lg:px-12 py-7 bg-colorGreyScaleGrey10"
            }
          >
            <h2 className={"text-2xl font-medium mb-8"}>Login</h2>

            <form className={"flex flex-col gap-6"}>
              <Input type="email" label="Email" placeholder="Digitar email" />

              <Input
                type="password"
                label="Senha"
                placeholder="Digitar senha"
              />

              <span
                className={
                  "text-sm font-medium text-right hover:cursor-pointer hover:underline"
                }
              >
                Esqueci minha senha
              </span>

              <button
                type="submit"
                className={
                  "h-12 rounded py-3 px-7 bg-colorBrandBrand1 hover:bg-colorBrandBrand2 text-base text-colorColorsFixedWhiteFixed font-semibold"
                }
              >
                Entrar
              </button>

              <span
                className={
                  "text-center text-sm text-colorGreyScaleGrey2 font-normal"
                }
              >
                Ainda não possui conta?
              </span>

              <Link
                to={"/register"}
                className={
                  "h-12 rounded py-3 px-7 bg-transparent hover:bg-colorGreyScaleGrey1 border-2 border-colorGreyScaleGrey4 hover:border-colorGreyScaleGrey1 text-center  text-base text-colorGreyScaleGrey0 hover:text-colorGreyScaleGrey10 font-semibold"
                }
              >
                Cadastrar
              </Link>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
