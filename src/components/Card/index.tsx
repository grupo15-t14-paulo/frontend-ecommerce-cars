import { profileName, profileTitleName } from "../../hooks";
import { ICardValueProps } from "./interface";
import ImgDefault from "../../assets/Cars/default.png";
import { useNavigate } from "react-router-dom";

export const Card = ({
  img,
  title,
  description,
  km,
  user,
  value,
  year,
  id,
  fipePrice,
  imgCover,
  createdAt,
}: ICardValueProps) => {
  const navigate = useNavigate();

  const verfyDataIsNew = (data: string): boolean => {
    const newData = new Date(data);

    const today = new Date();

    const timeDate = Math.abs(today.getTime() - newData.getTime());

    const differentDay = Math.ceil(timeDate / (1000 * 3600 * 24));

    return differentDay <= 3;
  };

  const isPriceLow = (): boolean => {
    if (fipePrice < value) {
      return true;
    }
    return false;
  };

  return (
    <li
      key={id}
      className={
        "flex flex-col gap-2 w-312 h-[350px] min-h-card min-w-card rounded-sm drop-shadow-sm box-border cursor-pointer"
      }
      onClick={() => navigate(`/dashboard/${id}`)}
    >
      <section
        className={
          "h-[152px] w-full flex justify-center items-center bg-colorGreyScaleGrey7 rounded-t-sm"
        }
      >
        {img ? (
          <img
            src={imgCover}
            alt="imagem do carro"
            className={"w-full h-full object-contain hover:border-2 hover:border-colorBrandBrand1"}
          />
        ) : (
          <img src={ImgDefault} alt="imagem do carro" className={"w-full h-full object-contain"} />
        )}
      </section>
      <section className={"mt-1 mb-2 flex flex-col gap-4 p-1"}>
        <div className={"pr-1"}>
          <h2 className={"mb-1 text-base font-semibold line-clamp-1 h-5"}>{title}</h2>
        </div>
        <div className={"h-10 w-[280px]"}>
          <p className={"text-sm h-full line-clamp-2"}>{description}</p>
        </div>
        <div className={"flex items-center gap-1"}>
          <div className={"name-profile"}>{profileName(user.name)}</div>
          <span>{profileTitleName(user.name)}</span>
        </div>
      </section>
      <div className={"flex w-full relative gap-1"}>
        <span className={"flex bg-colorBrandBrand4 py-1 px-2 rounded-md text-colorBrandBrand1"}>
          {km} Km
        </span>
        <span className={"flex bg-colorBrandBrand4 py-1 px-2 rounded-md text-colorBrandBrand1"}>
          {year}
        </span>
        <span className={"absolute right-0 bottom-1"}>
          {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </span>
      </div>
      {verfyDataIsNew(createdAt) && (
        <span
          className={
            "absolute left-0 bg-colorBrandBrand1 text-colorColorsFixedWhiteFixed text-xs p-1 rounded-sm"
          }
        >
          New
        </span>
      )}
      {isPriceLow() && <span className={"low-price"}>$</span>}
    </li>
  );
};
