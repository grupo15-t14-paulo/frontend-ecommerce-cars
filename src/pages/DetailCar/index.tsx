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
  const [text , setText] = useState("")

  const addTextArea = (value:string) =>{
    setText((prevText) => prevText + value + " ")
  }


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
                <img src={car?.imageCover} alt={car?.brand} className={"w-72 lg:w-96"} />
              ) : (
                <img src={ImgDefault} alt={car?.brand} className={"w-72"} />
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
                  "h-[300px] min-w-full overflow-auto flex flex-col bg-colorColorsFixedWhiteFixed rounded p-8 gap-5 mt-4 mb-4 shadow-md"
                }
              >
                <h2 className={"text-xl font-bold "}>Descrição</h2>
                <span>{car?.description}</span>
              </div>
              <div className="hidden lg:block lg:h-[900px]"></div>
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
          <section className="shadow-md p-4 bg-colorColorsFixedWhiteFixed lg:h-full lg:absolute lg:w-5/12 lg:top-[900px] mt-36">
            <h2 className={"text-colorGreyScaleGrey1 mb-5 text-2xl"}>Comentários</h2>
            <div>
              <ul>
                <li className="flex flex-col gap-2 mb-10">
                  <div className="flex gap-2 items-center">
                    <span className="name-profile">{profileName(`${car?.user.name}`)}</span>
                    <p>Bernardo Guimaraes</p>
                    <p className="text-colorGreyScaleGrey4">há 15 dias</p>
                  </div>
                    <p className="text-colorGreyScaleGrey2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </li>
                <li className="flex flex-col gap-2 mb-10">
                  <div className="flex gap-2 items-center">
                    <span className="name-profile">{profileName(`${car?.user.name}`)}</span>
                    <p>Bernardo Guimaraes</p>
                    <p className="text-colorGreyScaleGrey4">há 15 dias</p>
                  </div>
                    <p className="text-colorGreyScaleGrey2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </li>
                <li className="flex flex-col gap-2 mb-10">
                  <div className="flex gap-2 items-center">
                    <span className="name-profile">{profileName(`${car?.user.name}`)}</span>
                    <p>Bernardo Guimaraes</p>
                    <p className="text-colorGreyScaleGrey4">há 15 dias</p>
                  </div>
                    <p className="text-colorGreyScaleGrey2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </li>
              </ul>
              <div className="flex flex-col gap-5 items-baseline mt-36 relative">
                <div className="flex gap-2 items-center">
                  <span className="name-profile">{profileName(`${car?.user.name}`)}</span>
                  <p>{car?.user.name}</p>
                </div>
                <textarea className="outline-none h-32 w-full p-2 resize-none border rounded-sm border-colorGreyScaleGrey4 text-colorGreyScaleGrey2" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Digitar comentário" />
                {user ? <button className="bg-colorBrandBrand1 text-colorColorsFixedWhiteFixed h-10 w-28 cursor-pointer border-none rounded-md lg:absolute lg:right-1 lg:bottom-12">Comentar</button> : 
                <button className="bg-colorGreyScaleGrey5 text-colorColorsFixedWhiteFixed h-10 w-28 border-none rounded-md lg:absolute lg:right-1 lg:bottom-12" disabled>Comentar</button>}
                <div className="flex flex-wrap gap-10 w-full">
                  <button onClick={()=> addTextArea("Gostei muito!")} className="text-colorGreyScaleGrey4 cursor-pointer">Gostei muito!</button>
                  <button onClick={()=> addTextArea("Incrível")} className="text-colorGreyScaleGrey4 cursor-pointer">Incrível</button>
                  <button onClick={()=> addTextArea("Recomendarei para meus amigos!")} className="text-colorGreyScaleGrey4 cursor-pointer">Recomendarei para meus amigos!</button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className={"mb-32"}></div>
        <Footer />
      </div>
    </div>
  );
};
