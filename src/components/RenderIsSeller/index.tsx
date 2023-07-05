import { useAds } from "../../hooks/useAds";
import { IAnnoucement } from "../../providers/AdsProvider/interfaces";
import { Card } from "../Card";
import { SideBar } from "../sideBar";

export interface PropsIsSeller {
  allCarsFilter: IAnnoucement[] | [];
  openMenu: () => void;
}

export const RenderIsSeller = ({ allCarsFilter, openMenu }: PropsIsSeller) => {
  const { allCars, filtering, page, setPage } = useAds();

  return (
    <>
      <main
        className={`mt-12 min-h-full w-full container flex flex-col gap-4 relative box-border lg:flex-row`}
      >
        <SideBar />
        <section className={"w-full h-full lg:w-full lg:min-h-max box-border pb-5"}>
          <ul
            className={
              "flex md:flex-wrap md:justify-center lg:flex-wrap  w-full gap-3 lg:gap-10 lg:justify-around overflow-auto px-2 py-10 lg:py-0"
            }
          >
            {allCarsFilter.length > 0 && filtering ? (
              allCarsFilter?.map((car) => (
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
            )}
          </ul>
        </section>
        <button
          className="flex items-center justify-center text-2xl text-colorBrandBrand1 font-bold lg:hidden"
          onClick={() => openMenu()}
        >
          Filtros
        </button>

        <div
          className={"flex absolute -bottom-24 right-20 sm:right-28 md:right-1/3 gap-4  font-bold"}
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
  );
};
