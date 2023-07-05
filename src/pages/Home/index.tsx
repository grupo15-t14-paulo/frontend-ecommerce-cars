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
import { NoContent } from "../../components/NoContent";
import { RenderIsSeller } from "../../components/RenderIsSeller";

export const Home = () => {
  const [open, setOpen] = useState(false);
  const {
    allCars,
    carFilter,
    page,
    setPage,
    infoPage,
    setInfoPage,
    allCarsFilter,
    setallCarsFilter,
  } = useAds();
  const { user } = useAuth();

  useEffect(() => {
    const getCarFilter = async () => {
      try {
        if (!carFilter) {
          return;
        }
        const queryParams = Object.entries(carFilter || {})
          .filter(([, value]) => value !== undefined)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join("&");

        const response = await api.get(`/cars?${queryParams}&${page}`);

        const onlyPage = {
          nextPage: response.data.nextPage,
          prevPage: response.data.prevPage,
          totalPages: response.data.totalPages,
        };

        const cars: IAnnoucement[] = response.data.cars;

        const filterCars = cars.filter((car) => car.user.id !== user?.id);
        setInfoPage(onlyPage);
        setallCarsFilter(filterCars);
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
        {user?.isSeller && allCarsFilter.length > 0 ? (
          <RenderIsSeller allCarsFilter={allCarsFilter} openMenu={OpenMenu} />
        ) : !user?.isSeller && allCars && allCars.length > 0 ? (
          <>
            <main
              className={`mt-12 min-h-full w-full container flex flex-col gap-4 relative box-border lg:flex-row`}
            >
              <SideBar />
              <section
                className={
                  "w-full h-full lg:w-full lg:min-h-max box-border pb-5"
                }
              >
                <ul
                  className={
                    "flex md:flex-wrap md:justify-center lg:flex-wrap  w-full gap-3 lg:gap-10 lg:justify-around overflow-auto px-2 py-10 lg:py-0"
                  }
                >
                  {allCarsFilter.length > 0
                    ? allCarsFilter?.map((car) => (
                        <Card
                          imgCover={car.imageCover}
                          id={car.id}
                          description={car.description}
                          img={car.images}
                          mileage={car.mileage}
                          title={car.brand}
                          user={car.user}
                          price={car.price}
                          year={car.year}
                          key={car.id}
                          createdAt={car.createdAt}
                          fipePrice={+car.fipePrice}
                        />
                      ))
                    : allCars?.map((car) => (
                        <Card
                          imgCover={car.imageCover}
                          id={car.id}
                          description={car.description}
                          img={car.images}
                          mileage={car.mileage}
                          title={car.brand}
                          user={car.user}
                          price={car.price}
                          year={car.year}
                          key={car.id}
                          createdAt={car.createdAt}
                          fipePrice={+car.fipePrice}
                        />
                      ))}
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
                  "flex absolute -bottom-24 right-44 sm:right-20 md:right-1/3 gap-4  font-bold"
                }
              >
                {page > 1 && (
                  <button
                    className={
                      "flex items-center text-2xl text-colorBrandBrand1 font-bold"
                    }
                    onClick={() => setPage(page - 1)}
                  >
                    &lt; Anterior
                  </button>
                )}

                <span className={"text-2xl text-colorGreyScaleGrey3"}>
                  {page} de{" "}
                  <span className={"text-colorGreyScaleGrey4"}>
                    {infoPage?.totalPages}
                  </span>
                </span>
                {infoPage?.nextPage && (
                  <button
                    className={
                      "flex items-center text-2xl text-colorBrandBrand1 font-bold"
                    }
                    onClick={() => setPage(page + 1)}
                  >
                    Seguinte &gt;
                  </button>
                )}
              </div>
            </main>

            <div className="m-48" />
          </>
        ) : (
          <NoContent isSeller={user?.isSeller} />
        )}
      </div>
      {open && allCarsFilter && allCars && <SideBarMobile setOpen={setOpen} />}
      <Footer />
    </>
  );
};
