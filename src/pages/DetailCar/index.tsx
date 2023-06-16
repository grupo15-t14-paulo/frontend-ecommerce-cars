import { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { api } from "../../services/index";
import { ICardProps } from "../../components/Card/interface";
import { carros } from "../../utility";
import ImgDefault from "../../assets/Cars/default.png";
import { useParams } from "react-router-dom";
import { profileName } from "../../hooks/index";
import { Footer } from "../../components/footer";
import { AuthContext } from "../../providers/AuthProvider";

export const DetailCar = () => {
  const [car, setCar] = useState<ICardProps>();
  const { id } = useParams();
  const {user} = useContext(AuthContext)

  useEffect(() => {
    // const getCar = () => {
    //   const response = api.get<ICardProps>(`/dashboard/${id}`);

    //   setCar(response.data);
    // };
    const car: ICardProps[] = carros.filter((car) => car.id == id);
    if (car) {
      setCar(car[0]);
    }
  }, []);

  //condicional aplicada na renderização do botão comprar

  return (
    <div className={"h-full min-w-screen box-border"}>
      <Navbar />
      <div className={"absolute h-[515px] w-full bg-colorBrandBrand1"}>
        <main
          className={
            "flex flex-col lg:flex-row gap-10 container max-w-[1200px] min-h-full box-border"
          }
        >
          <section className={"w-full lg:w-3/4 mt-10 flex gap-10 flex-col"}>
            <div
              className={
                "h-[350px] min-w-full flex justify-center items-center bg-colorColorsFixedWhiteFixed rounded"
              }
            >
              {car?.img ? (
                <img src={car?.img} alt={car?.title} className={"w-72 lg:w-96"} />
              ) : (
                <img src={ImgDefault} alt={car?.title} className={"w-72"} />
              )}
            </div>
            <div>
              <div
                className={
                  "max-h-[326px] lg:h-[240px] min-w-full flex flex-col bg-colorColorsFixedWhiteFixed rounded p-8 gap-5 shadow-md"
                }
              >
                <h2 className={"text-ellipsis text-xl font-bold h-10"}>{car?.title}</h2>
                <div
                  className={
                    "flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center lg:mb-3 lg:mt-3"
                  }
                >
                  <div className={"flex gap-2"}>
                    <span className={"km-year w-max"}>{car?.year}</span>
                    <span className={"km-year w-max"}>{car?.km}</span>
                  </div>

                  <span>
                    {car?.value?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </span>
                </div>
                {user ? (
                  <button
                    className={
                      "border w-max bg-colorBrandBrand1 text-colorColorsFixedWhiteFixed hover:bg-colorColorsFixedWhiteFixed hover:text-colorBrandBrand1 px-4 py-2 text-sm rounded"
                    }
                  >
                    Comprar
                  </button>
                ) : (
                  <button
                    className={
                      "border w-max bg-colorBrandBrand1 text-colorColorsFixedWhiteFixed hover:bg-colorColorsFixedWhiteFixed hover:text-colorBrandBrand1 px-4 py-2 text-sm rounded"
                    }
                  >
                    Fazer Login
                  </button>
                )}
              </div>
              <div
                className={
                  "max-h-[326px] min-w-full flex flex-col bg-colorColorsFixedWhiteFixed rounded p-8 gap-5 mt-4 mb-4 shadow-md"
                }
              >
                <h2 className={"text-ellipsis text-xl font-bold "}>Descrição</h2>
                <span>{car?.description}</span>
              </div>
            </div>
          </section>
          <section>
            <div
              className={
                "h-[350px] max-w-[382px] flex-col bg-colorColorsFixedWhiteFixed rounded mt-10 p-5 shadow-md"
              }
            >
              <h2 className={"mt-4 mb-10 text-xl"}>
                <b>Fotos</b>
              </h2>
              <div className={"grid grid-cols-3 gap-4 mt-5"}>
                <div
                  className={
                    "bg-colorGreyScaleGrey7 h-[90px] w-[90px] flex items-center justify-center"
                  }
                >
                  <img src={car?.img} alt="" className={"w-[70px]"} />
                </div>
                <div
                  className={
                    "bg-colorGreyScaleGrey7 h-[90px] w-[90px] flex items-center justify-center"
                  }
                >
                  <img src={car?.img} alt="" className={"w-[70px]"} />
                </div>
                <div
                  className={
                    "bg-colorGreyScaleGrey7 h-[90px] w-[90px] flex items-center justify-center"
                  }
                >
                  <img src={car?.img} alt="" className={"w-[70px]"} />
                </div>
                <div
                  className={
                    "bg-colorGreyScaleGrey7 h-[90px] w-[90px] flex items-center justify-center"
                  }
                >
                  <img src={car?.img} alt="" className={"w-[70px]"} />
                </div>
                <div
                  className={
                    "bg-colorGreyScaleGrey7 h-[90px] w-[90px] flex items-center justify-center"
                  }
                >
                  <img src={car?.img} alt="" className={"w-[70px]"} />
                </div>
                <div
                  className={
                    "bg-colorGreyScaleGrey7 h-[90px] w-[90px] flex items-center justify-center"
                  }
                >
                  <img src={car?.img} alt="" className={"w-[70px]"} />
                </div>
              </div>
            </div>
            <div
              className={
                "max-h-[350px] max-w-[382px] flex flex-col gap-5 items-center bg-colorColorsFixedWhiteFixed rounded mt-10 p-5 shadow-md"
              }
            >
              <div className={"name-profile w-[77px] h-[77px] rounded-full text-3xl"}>
                {profileName("User Name")}
              </div>
              <h2 className={"font-bold"}>{car?.userName}</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's
              </p>
              <button
                className={
                  "border w-max bg-colorGreyScaleGrey0 text-colorColorsFixedWhiteFixed hover:bg-colorColorsFixedWhiteFixed hover:text-colorGreyScaleGrey0 px-4 py-2 text-sm rounded "
                }
              >
                Ver todos anuncios
              </button>
            </div>
          </section>
        </main>
        <div className={"mb-32"}></div>
        <Footer />
      </div>
    </div>
  );
};
