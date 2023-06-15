import { useContext, useState } from "react";
import LogoImg from "../../../assets/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { profileName, profileTitleName } from "../../../hooks";
import { AuthContext } from "../../../providers/AuthProvider";

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const nameRoutes = location.pathname;
  const navigate = useNavigate();

  const {user} = useContext(AuthContext)

  let content;

  switch (nameRoutes) {
    case "/":
      if (user) {
        content = user.isSeller ? <MenuSeller /> : <MenuUser />;
      } else {
        content = <MenuDefault />;
      }
      break;
    case "/login":
      content = <MenuDefault />;
      break;
    case "/register":
      content = <MenuDefault />;
      break;
    default:
      if (user) {
        content = user.isSeller ? <MenuSeller /> : <MenuUser />;
      } else {
        content = <MenuDefault />;
      }
      break;
  }

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={"relative flex min-w-full shadow z-10 container"}>
      <div className={"container flex justify-between  items-center"}>
        <div className={"flex w-40 h-6 cursor-pointer"} onClick={() => navigate("/")}>
          <img src={LogoImg} alt="logo" />
        </div>
        {user ? (
          <div className={"flex gap-2 items-center"}>
            <div className={"name-profile"}>{profileName(user.name)}</div>
            <button onClick={() => OpenMenu()}>{profileTitleName(user.name)}</button>
          </div>
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
        {!user && (
          <div className={"hidden md:flex gap-4 border-l-2 h-full items-center pl-4"}>
            <Link
              to={"/login"}
              className={
                "link-noboard hover:bg-colorRandomRandom10 hover:text-colorColorsFixedWhiteFixed"
              }
            >
              Fazer Login
            </Link>
            <Link
              to={"/register"}
              className={
                "link-default hover:bg-colorRandomRandom10 hover:text-colorColorsFixedWhiteFixed"
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
        "flex absolute left-0 top-20 border-t-2 w-full flex-col py-1 bg-colorColorsFixedWhiteFixed gap-2 shadow animate-fadeIn md:hidden"
      }
    >
      <div className={"flex container flex-col gap-6 my-2 self-start"}>
        <Link
          to={"/login"}
          className={
            "link-noboard hover:bg-colorRandomRandom10 hover:text-colorColorsFixedWhiteFixed w-max"
          }
        >
          Fazer Login
        </Link>

        <Link
          to={"/register"}
          className={
            "link-default hover:bg-colorRandomRandom10 hover:text-colorColorsFixedWhiteFixed w-full"
          }
        >
          Cadastrar
        </Link>
      </div>
    </main>
  );
};

export const MenuUser = () => {

  const LogOut = () => {
    localStorage.clear()
  }

  return (
    <main className={"menu-user lg:right-10 animate-fadeIn shadow-lg border rounded"}>
      <ul className={"p-1"}>
        <li className={"h-10 flex items-center p-2 my-2"}>
        <Link to={"/profile"}>Editar Perfil</Link>
        </li>
        <li className={"h-10 flex items-center p-2 my-2"}>
        <button>Editar endereço</button>
        </li>
        <li className={"h-10 flex items-center p-2 my-2"}>
          <button onClick={() => LogOut()}>Sair</button>
        </li>
      </ul>
    </main>
  );
};

export const MenuSeller = () => {

  const LogOut = () => {
    localStorage.clear()
  }

  return (
    <main
      className={
        "menu-user rounded animate-fadeIn border shadow-lg lg:right-12"
      }
    >
      <ul className={"p-1"}>
        <li className={"h-10 flex items-center p-2 my-2"}>
        <Link to={"/profile"}>Editar Perfil</Link>
        </li>
        <li className={"h-10 flex items-center p-2 my-2"}>
          <button>Editar Endereço</button>
        </li>
        <li className={"h-10 flex items-center p-2 my-2"}>
          <button>Meus Anúncios</button>
        </li>
        <li className={"h-10 flex items-center p-2 my-2"}>
        <button onClick={() => LogOut()}>Sair</button>
        </li>
      </ul>
    </main>
  );
};
