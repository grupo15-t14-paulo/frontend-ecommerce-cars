import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { api } from "../../services/index";
import { ICardProps } from "../../components/Card/interface";
import { carros } from "../../utility";
import ImgDefault from "../../assets/Cars/default.png";
import { useParams } from "react-router-dom";

export const DetailCar = () => {
  const [car, setCar] = useState<ICardProps>();
  const { id } = useParams();

  useEffect(() => {
    // const getCar = () => {
    //   const response = api.get<ICardProps>(`/dashboard/${id}`);

    //   setCar(response.data);
    // };
    const car = carros.filter((car) => car.id == id);

    setCar(car[0]);
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
              {car?.img ? (
                <img src={car?.img} alt={car?.title} className={"w-72"} />
              ) : (
                <img src={ImgDefault} alt={car?.title} className={"w-72"} />
              )}
            </div>
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
          </section>
          <section className={"bg-slate-500 w-1/4"}>Sidebar</section>
        </main>
      </div>
      <div className={"mb-32"}></div>
      <Footer />
    </>
  );
};
