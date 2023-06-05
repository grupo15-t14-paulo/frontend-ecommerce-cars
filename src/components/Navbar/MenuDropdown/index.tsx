import { useState } from "react";
import LogoImg from "../Logo/Logo.png";
import { Link, useLocation } from "react-router-dom";

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const nameRoutes = location.pathname;
  let content;
  //Aqui fica a verificação com contexto quando usuario tiver logado
  const userSeller = true;

  switch (nameRoutes) {
    case "/":
      content = <MenuDefault />;
      break;
    case "/login":
      content = <MenuloginRegister />;
      break;
    case "/register":
      content = <MenuloginRegister />;
      break;
    case "/dashboard":
      content = userSeller ? <MenuUser /> : <MenuSeller />;
      break;
  }

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={"relative flex min-w-full justify-between shadow"}>
      <div className={"container flex justify-between min-w-full h-full items-center"}>
        <div className={"flex w-40 h-6"}>
          <img src={LogoImg} alt="logo" />
        </div>
        {userSeller ? (
          <button onClick={() => OpenMenu()}>Nome do usuario</button>
        ) : (
          <button
            onClick={() => OpenMenu()}
            className={
              "text-sm w-14 h-10 flex bg-colorColorsFixedWhiteFixed border text-colorRandomRandom10 hover:bg-colorRandomRandom10 px-4 py-2 rounded hover:text-colorColorsFixedWhiteFixed shadow md:hidden"
            }
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        )}
        {open && content}
        {!userSeller && (
          <div className={"hidden md:flex gap-4 border-l-2 h-full items-center pl-4"}>
            <Link
              to={"/login"}
              className={
                "p-2 font-semibold rounded hover:bg-colorRandomRandom10 hover:text-colorColorsFixedWhiteFixed text-center"
              }
            >
              Fazer Login
            </Link>
            <Link
              to={"/register"}
              className={
                "border  self-center px-4 py-2 font-semibold rounded hover:bg-colorRandomRandom10 hover:text-colorColorsFixedWhiteFixed text-center"
              }
            >
              Cadastrar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export const MenuDefault = () => {
  return (
    <main
      className={
        "flex absolute left-0 top-24 w-full flex-col py-1 bg-colorColorsFixedWhiteFixed gap-2 shadow animate-fadeIn"
      }
    >
      <div className={"flex container flex-col gap-6 my-2"}>
        <Link to={"/login"}>Fazer Login</Link>

        <Link
          to={"/register"}
          className={
            "border w-5/6 self-center p-2 font-semibold rounded hover:bg-colorRandomRandom10 hover:text-colorColorsFixedWhiteFixed text-center"
          }
        >
          Cadastrar
        </Link>
      </div>
    </main>
  );
};

export const MenuUser = () => {
  return (
    <main
      className={
        "flex absolute left-0 top-24 w-full flex-col py-1 bg-colorColorsFixedWhiteFixed gap-2 shadow"
      }
    >
      <ul className={"border-b shadow"}>
        <li className={"h-10 flex items-center p-2 my-2"}>Carros</li>
        <li className={"h-10 flex items-center p-2 my-2"}>Motos</li>
        <li className={"h-10 flex items-center p-2 my-2"}>Leilão</li>
      </ul>
      <div className={"flex flex-col gap-6 my-2"}>
        <Link to={"/login"} className={"m-2"}>
          Fazer Login
        </Link>

        <Link
          to={"/register"}
          className={
            "border w-5/6 self-center p-2 font-semibold rounded hover:bg-colorRandomRandom10 hover:text-colorColorsFixedWhiteFixed"
          }
        >
          Cadastrar
        </Link>
      </div>
    </main>
  );
};

export const MenuSeller = () => {
  return (
    <main
      className={
        "flex absolute left-0 top-24 w-full flex-col py-1 bg-colorColorsFixedWhiteFixed gap-2 shadow"
      }
    >
      <ul className={"border-b shadow"}>
        <li className={"h-10 flex items-center p-2 my-2"}>Carros</li>
        <li className={"h-10 flex items-center p-2 my-2"}>Motos</li>
        <li className={"h-10 flex items-center p-2 my-2"}>Leilão</li>
      </ul>
      <div className={"flex flex-col gap-6 my-2"}>
        <Link to={"/login"} className={"m-2"}>
          Fazer Login
        </Link>

        <Link
          to={"/register"}
          className={
            "border w-5/6 self-center p-2 font-semibold rounded hover:bg-colorRandomRandom10 hover:text-colorColorsFixedWhiteFixed"
          }
        >
          Cadastrar
        </Link>
      </div>
    </main>
  );
};

export const MenuloginRegister = () => {
  return (
    <main
      className={
        "flex md:hidden absolute left-0 top-24 w-full flex-col py-1 bg-colorColorsFixedWhiteFixed gap-2 shadow"
      }
    >
      <div className={"flex flex-col gap-6 my-2"}>
        <Link to={"/login"} className={"m-2"}>
          Fazer Login
        </Link>

        <Link
          to={"/register"}
          className={
            "border w-5/6 self-center p-2 font-semibold rounded hover:bg-colorRandomRandom10 hover:text-colorColorsFixedWhiteFixed"
          }
        >
          Cadastrar
        </Link>
      </div>
    </main>
  );
};
