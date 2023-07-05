import { profileName, profileTitleName } from "../../hooks";
import ImgDefault from "../../assets/Cars/default.png";
import { useNavigate } from "react-router-dom";
import { ICardProps } from "../Card/interface";
import { useAds } from "../../hooks/useAds";

export const ProfileCard = ({
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
  brand,
  typeCar,
  color,
}: ICardProps) => {
  const navigate = useNavigate();

  const { handleOpenModal, setCar, setBrandSelected, setModalAdsType } = useAds();

  const setCarInfo = () => {
    const car = {
      id: id,
      brand: brand,
      model: title,
      year: year,
      typeCar: typeCar,
      mileage: km,
      color: color,
      fipePrice: fipePrice,
      price: value,
      description: description,
      imageCover: imgCover,
      images: img,
      createdAt: createdAt,
    };

    setBrandSelected(brand);

    setCar(car);
  };

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
        "flex mb-10 mt-10 flex-col gap-2 w-312 h-[400px] min-h-card min-w-card rounded-sm drop-shadow-sm box-border cursor-pointer"
      }
    >
      <section
        className={
          "h-[152px] w-full flex justify-center items-center bg-colorGreyScaleGrey7 rounded-t-sm"
        }
        onClick={() => navigate(`/dashboard/${id}`)}
      >
        {imgCover ? (
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
          {parseInt(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
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
      <div className="flex gap-5 mt-4">
        <button
          className=" border-colorGreyScaleGrey1 rounded px-4 py-2"
          style={{ border: "1px solid" }}
          onClick={() => {
            setModalAdsType("edit-ads");
            handleOpenModal();
            setCarInfo();
          }}
        >
          Editar
        </button>
        <button
          className="border-solid border-colorGreyScaleGrey1 border rounded px-4 py-2"
          style={{ border: "1px solid" }}
          onClick={() => navigate(`/dashboard/${id}`)}
        >
          Ver detalhes
        </button>
      </div>
    </li>
  );
};
