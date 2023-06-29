import { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { api } from "../../services/index";
import { ICarUserReturn } from "../../components/Card/interface";
import ImgDefault from "../../assets/Cars/default.png";
import { Link, useParams } from "react-router-dom";
import { profileName } from "../../hooks/index";
import { Footer } from "../../components/footer";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


export const DetailCar = () => {
  const [car, setCar] = useState<ICarUserReturn>();
  const { carId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    const getCar = async () => {
      try {
        const response = await api.get<ICarUserReturn>(`/cars/search/${carId}`);
        setCar(response.data);
      } catch (error) {
        console.log(error);
      }
      
    };
    getCar();
  }, []);

  
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
              {car?.imageCover ? (
                <img src={car?.imageCover} alt={car?.brand} className={"w-72 lg:w-96 lg:max-w-96 h-max"} />
              ) : (
                <img src={ImgDefault} alt={car?.brand} className={"w-72 h-max"} />
              )}
            </div>
            <div>
              <div
                className={
                  "max-h-[326px] lg:h-[240px] min-w-full flex flex-col bg-colorColorsFixedWhiteFixed rounded p-8 gap-5 shadow-md"
                }
              >
                <h2 className={"text-ellipsis text-xl font-bold h-10"}>{car?.model}</h2>
                <div
                  className={
                    "flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center lg:mb-3 lg:mt-3"
                  }
                >
                  <div className={"flex gap-2"}>
                    <span className={"km-year w-max"}>{car?.year}</span>
                    <span className={"km-year w-max"}>{car?.mileage} Km</span>
                  </div>

                  <span>
                    {car?.price?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
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
                  <Link to={"/login"}
                    className={
                      "border w-max bg-colorBrandBrand1 text-colorColorsFixedWhiteFixed hover:bg-colorColorsFixedWhiteFixed hover:text-colorBrandBrand1 px-4 py-2 text-sm rounded"
                    }
                  >
                    Fazer Login
                  </Link>
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
                {car?.images ? (
                  car?.images.map((img, id) => (
                    <div
                      className={
                        "bg-colorGreyScaleGrey7 h-[90px] w-[90px] flex items-center justify-center"
                      }
                      key={id}
                    >
                      <img src={img.urlImage} alt="" className={"w-[70px]"} />
                    </div>
                  ))
                ) : (
                  <div>Sem imagens</div>
                )}
              </div>
            </div>
            <div
              className={
                "max-h-[350px] max-w-[382px] flex flex-col gap-5 items-center bg-colorColorsFixedWhiteFixed rounded mt-10 p-5 shadow-md"
              }
            >
              <div className={"name-profile w-[77px] h-[77px] rounded-full text-3xl"}>
                {profileName(`${car?.user.name}`)}
              </div>
              <h2 className={"font-bold"}>{car?.user.name}</h2>
              <p>{car?.user.description}</p>
              <button
                className={
                  "border w-max bg-colorGreyScaleGrey0 text-colorColorsFixedWhiteFixed hover:bg-colorColorsFixedWhiteFixed hover:text-colorGreyScaleGrey0 px-4 py-2 text-sm rounded "
                }
                onClick={() => navigate(`/users/${car?.user.id}`)}
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
