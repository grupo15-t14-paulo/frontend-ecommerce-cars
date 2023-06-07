import { profileName, profileTitleName } from "../../hooks";
import { ICardProps } from "./interface";

export const Card = ({ img, title, description, km, userName, value, year, id }: ICardProps) => {
  return (
    <li
      key={id}
      className={
        "flex flex-col gap-2 w-312 h-[350px] min-h-card min-w-card rounded-sm drop-shadow-sm box-border"
      }
    >
      <section className={"flex w-full h-152 bg-slate-200"}>
        <img src={img} alt="imagem do carro" />
      </section>
      <section className={"mt-1 mb-4 flex flex-col gap-4 p-1"}>
        <h2 className={"mb-1 text-base font-semibold"}>{title}</h2>
        <p className={"text-sm h-10"}>{description}</p>
        <div className={"flex items-center gap-1"}>
          <div className={"name-profile"}>{profileName(userName)}</div>
          <span>{profileTitleName(userName)}</span>
        </div>
      </section>
      <div className={"flex w-full relative gap-1"}>
        <span className={"flex bg-colorBrandBrand4 py-1 px-2 rounded-md text-colorBrandBrand1"}>
          {km}
        </span>
        <span className={"flex bg-colorBrandBrand4 py-1 px-2 rounded-md text-colorBrandBrand1"}>
          {year}
        </span>
        <span className={"absolute right-0 bottom-1"}>R$ {value}</span>
      </div>
    </li>
  );
};
