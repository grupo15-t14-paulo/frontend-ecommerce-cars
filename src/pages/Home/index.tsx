import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/footer";
import { SideBar } from "../../components/sideBar";
import { SideBarMobile } from "../../components/sideBar/sideBarMobile";
import { useAds } from "../../hooks/useAds";
import { api } from "../../services";
import { IAnnoucement } from "../../providers/AdsProvider/interfaces";
import { useAuth } from "../../hooks/useAuth";
import Foto from "../../assets/images/7302438.jpg";

export const Home = () => {
  const [open, setOpen] = useState(false);
  const { allCars, carFilter, filtering, page, setPage } = useAds();
  const { user } = useAuth();
  const [carsFilter, setCarsFilter] = useState<IAnnoucement[] | []>([]);

  useEffect(() => {
    const getCarFilter = async () => {
      try {
        if (!carFilter) {
          return;
        }
        const queryParams = Object.entries(carFilter || {})
          .filter(([, value]) => value !== undefined)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join("&");

        const response = await api.get(`/cars?${queryParams}&${page}`);
        const cars: IAnnoucement[] = response.data;

        const filterCars = cars.filter((car) => car.user.id !== user?.id);

        setCarsFilter(filterCars);
      } catch (error) {
        return console.log(error);
      }
    };

    getCarFilter();
  }, [carFilter, user?.id, page]);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={"h-full min-w-screen box-border mb"}>
        <Navbar />
        <Header />
        {allCars ? (
          <>
            <main
              className={`mt-12 min-h-full w-full container flex flex-col gap-4 relative box-border lg:flex-row`}
            >
              <SideBar />
              <section className={"w-full h-full lg:w-full lg:min-h-max box-border pb-5"}>
                <ul
                  className={
                    "flex lg:flex-wrap  w-full gap-3 lg:gap-10 lg:justify-around overflow-auto px-2 py-10 lg:py-0"
                  }
                >
                  {carsFilter.length > 0 && filtering ? (
                    carsFilter?.map((car) => (
                      <Card
                        imgCover={car.imageCover}
                        id={car.id}
                        description={car.description}
                        img={car.images}
                        km={car.mileage}
                        title={car.brand}
                        user={car.user}
                        value={car.price}
                        year={car.year}
                        key={car.id}
                        createdAt={car.createdAt}
                        fipePrice={+car.fipePrice}
                      />
                    ))
                  ) : filtering ? (
                    <div
                      className={
                        "w-full h-[150px] flex items-center justify-center bg-colorBrandBrand2 text-colorColorsFixedWhiteFixed text-3xl rounded-sm shadow-lg"
                      }
                    >
                      Anúncios não encontrado :(
                    </div>
                  ) : (
                    allCars?.map((car) => (
                      <Card
                        imgCover={car.imageCover}
                        id={car.id}
                        description={car.description}
                        img={car.images}
                        km={car.mileage}
                        title={car.brand}
                        user={car.user}
                        value={car.price}
                        year={car.year}
                        key={car.id}
                        createdAt={car.createdAt}
                        fipePrice={+car.fipePrice}
                      />
                    ))
                  )}
                </ul>
              </section>
              <button
                className="flex items-center justify-center text-2xl text-colorBrandBrand1 font-bold lg:hidden"
                onClick={() => OpenMenu()}
              >
                Filtros
              </button>

              <div
                className={
                  "flex absolute -bottom-24 right-20 sm:right-28 md:right-1/3 gap-4  font-bold"
                }
              >
                {page > 1 && (
                  <button
                    className={"flex items-center text-2xl text-colorBrandBrand1 font-bold"}
                    onClick={() => setPage(page - 1)}
                  >
                    &lt; Anterior
                  </button>
                )}
                <span className={"text-2xl text-colorGreyScaleGrey3"}>
                  <span className={"text-colorGreyScaleGrey4"}>{page}</span>
                </span>
                <button
                  className={"flex items-center text-2xl text-colorBrandBrand1 font-bold"}
                  onClick={() => setPage(page + 1)}
                >
                  Seguinte &gt;
                </button>
              </div>
            </main>
            <div className="m-48" />
          </>
        ) : (
          <>
            <div className="flex items-center justify-center w-full md:h-[700px] gap-5 mt-5 mb-5 relative">
              <h2 className="font-bold text-colorBrandBrand1 bg-colorColorsFixedWhiteFixed p-3 rounded-md text-2xl text-center md:text-3xl lg:text-4xl absolute top-0">
                Infelizmente não tem anúncios :(
              </h2>
              <img src={Foto} alt="img" className="md:w-[700px] md:h-[700px] rounded-md" />

              {user?.isSeller && (
                <button className="button-default absolute bottom-0 flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Novo anúncio
                </button>
              )}
            </div>
          </>
        )}
      </div>
      {open && allCars && <SideBarMobile setOpen={setOpen} />}
      <Footer />
    </>
  );
};
