import { useState } from "react";
import LogoImg from "../Logo/Logo.png";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={"relative flex min-w-full justify-between shadow"}>
      <div className={"container flex justify-between min-w-full h-full items-center"}>
        <div className={"flex w-40 h-6"}>
          <img src={LogoImg} alt="logo" />
        </div>
        <button
          onClick={() => OpenMenu()}
          className={
            "text-sm w-14 h-10 flex  bg-colorColorsFixedWhiteFixed border text-colorRandomRandom10 hover:bg-colorRandomRandom10 px-4 py-2 rounded hover:text-colorColorsFixedWhiteFixed shadow"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div
        className={
          "flex absolute left-0 -bottom-80 w-full flex-col py-1 bg-colorColorsFixedWhiteFixed gap-2"
        }
      >
        <ul className={"border-b shadow"}>
          <li className={"h-10 flex items-center p-2 my-3"}>Carros</li>
          <li className={"h-10 flex items-center p-2 my-3"}>Motos</li>
          <li className={"h-10 flex items-center p-2 my-3"}>Home</li>
        </ul>
        <div className={"flex flex-col gap-6 my-2"}>
          <h2 className={"m-2"}>Fazer Login</h2>

          <button className={"border w-5/6 self-center p-2 font-semibold rounded"}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};
