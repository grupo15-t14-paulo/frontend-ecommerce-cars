import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { api } from "../../services/index";
import { ICardProps } from "../../components/Card/interface";
import { carros } from "../../utility";
import { profileName, profileTitleName } from "../../hooks/index";

export const DetailCar = (id: string) => {
  const [car, setCar] = useState<ICardProps>();

  useEffect(() => {
    const getCar = () => {
      const response = api.get<ICardProps>(`/dashboard/${id}`);

      setCar(response.data);
    };

    setCar(carros[0]);
  }, []);

  return (
    <>
      <div className={"h-full min-w-screen box-border"}>
        <Navbar />
        <main
          className={
            "flex flex-col lg:flex-row gap-4 container w-full h-screen bg-colorBrandBrand1"
          }
        >
          <section className={"w-full lg:w-3/4 mt-10 flex gap-10 flex-col"}>
            <div
              className={
                "h-[350px] min-w-full flex justify-center items-center bg-colorColorsFixedWhiteFixed rounded"
              }
            >
              <img src={car?.img} alt={car?.title} className={"w-72"} />
            </div>
            <div>
            <div
              className={
                "h-[326px] min-w-full flex flex-col bg-colorColorsFixedWhiteFixed rounded p-8 gap-8"
              }
            >
              <h2 className={"text-ellipsis text-xl font-bold h-20"}>{car?.title}</h2>
              <div className={"flex gap-2"}>
                <span className={"km-year w-max"}>{car?.year}</span>
                <span className={"km-year w-max"}>{car?.km}</span>
              </div>

              <span>
                {car?.value?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </span>
              <button
                className={
                  "border w-max bg-colorBrandBrand1 text-colorColorsFixedWhiteFixed hover:bg-colorColorsFixedWhiteFixed hover:text-colorBrandBrand1 px-4 py-2 text-sm rounded"
                }
              >
                Comprar
              </button>
            </div>
            <div className={
                "h-[326px] min-w-full flex flex-col bg-colorColorsFixedWhiteFixed rounded p-8 gap-8 mt-4 mb-4"
              }>
              <h2 className={"text-ellipsis text-xl font-bold h-20"}>Descrição</h2>
              <span>{car?.description}</span>
            </div>
            </div>
          </section>
          <section className={"bg-colorBrandBrand1"}>
            <div className={"h-[350px] w-[382px] flex-col bg-colorColorsFixedWhiteFixed rounded mt-10 p-11"}>
            <div>
            <span>Fotos</span>
            </div>
            <div className={"grid grid-cols-3 gap-4 mt-5"}>
                <div className={"bg-colorGreyScaleGrey7 h-[108px] w-[108px] flex items-center justify-center"}>
                  <img src={car?.img} alt="" />
                </div>
                <div className={"bg-colorGreyScaleGrey7 h-[108px] w-[108px] flex items-center justify-center"}>
                  <img src={car?.img} alt="" />
                </div>
                <div className={"bg-colorGreyScaleGrey7 h-[108px] w-[108px] flex items-center justify-center"}>
                <img src={car?.img} alt="" />
                </div>
                <div className={"bg-colorGreyScaleGrey7 h-[108px] w-[108px] flex items-center justify-center"}>
                <img src={car?.img} alt="" />
                </div>
                <div className={"bg-colorGreyScaleGrey7 h-[108px] w-[108px] flex items-center justify-center"}>
                  <img src={car?.img} alt="" /></div>
                <div className={"bg-colorGreyScaleGrey7 h-[108px] w-[108px] flex items-center justify-center"}>
                <img src={car?.img} alt="" />
                </div>
            </div>
            </div>
            <div className={"h-[350px] w-[382px] flex flex-col gap-5 items-center bg-colorColorsFixedWhiteFixed rounded mt-10 p-10"}>
            <div className={"name-profile w-28 h-28 rounded-full text-3xl"}>{profileName("User Name")}</div>
                <h2>{car?.userName}</h2>
                <p>Descrição usuário</p>
                <button className={
                  "border w-max bg-colorGreyScaleGrey0 text-colorColorsFixedWhiteFixed hover:bg-colorColorsFixedWhiteFixed hover:text-colorGreyScaleGrey0 px-4 py-2 text-sm rounded "
                }>Ver todos anuncios</button>
            </div>
          </section>
        </main>
      </div>
      <div className={"mb-32"}></div>
      <Footer />
    </>
  );
};
