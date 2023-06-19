import { useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/footer";
import { SideBar } from "../../components/sideBar";
import { carros } from "../../utility";
import { SideBarMobile } from "../../components/sideBar/sideBarMobile";

export const Home = () => {
  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={"h-full min-w-screen box-border mb"}>
        <Navbar />
        <Header />
        <main
          className={`mt-12 min-h-full w-full container flex flex-col gap-4 relative box-border lg:flex-row`}
        >
          <SideBar />
          <section className={"w-full h-full lg:w-full lg:min-h-max box-border pb-5"}>
            <ul
              className={
                "flex lg:flex-wrap w-full gap-10 overflow-auto lg:justify-end py-10 lg:py-0"
              }
            >
              {carros.map((car) => (
                <Card
                  imgCover={car.imgCover}
                  id={car.id}
                  description={car.description}
                  img={car.img}
                  km={car.km}
                  title={car.title}
                  userName={car.userName}
                  value={car.value}
                  year={car.year}
                  key={car.id}
                  createdAt={car.createdAt}
                  fipePrice={car.fipePrice}
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
              "flex absolute -bottom-24 right-20 sm:right-28 md:right-1/3 gap-4  font-bold"
            }
          >
            <span className={"text-2xl text-colorGreyScaleGrey3"}>
              1<span className={"text-colorGreyScaleGrey4"}> de 2</span>
            </span>
            <button className={"flex items-center text-2xl text-colorBrandBrand1 font-bold"}>
              Seguinte &gt;
            </button>
          </div>
        </main>
      </div>
      {open && <SideBarMobile setOpen={setOpen} />}
      <div className="m-48" />
      <Footer />
    </>
  );
};
