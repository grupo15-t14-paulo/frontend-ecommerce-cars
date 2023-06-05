import { profileName, profileTitleName } from "../Hooks";
import { ICardProps } from "./interface";

export const Card = ({ img, title, description, km, userName, value, year }: ICardProps) => {
  return (
    <div>
      <section>
        <img src={img} alt="imagem do carro" />
      </section>
      <section>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <div>{profileName(userName)}</div>
          <span>{profileTitleName(userName)}</span>
        </div>
      </section>
      <div>
        <span>{km}KM</span>
        <span>{year}</span>
        <span>R$ {value}</span>
      </div>
    </div>
  );
};
