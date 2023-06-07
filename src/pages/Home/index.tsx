import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/footer";
import { SideBar } from "../../components/sideBar";
import { carros } from "../../utility";

export const Home = () => {
  return (
    <>
      <div className={"h-full w-screen box-border"}>
        <Navbar />
        <Header />
        <main className={"mt-12 min-h-full flex gap-4 container relative"}>
          <SideBar />
          <section className={"w-full h-full lg:w-3/4 max-w-[1100px] lg:min-h-max"}>
            <ul className={"flex lg:flex-wrap w-full gap-10 overflow-auto justify-center"}>
              {carros.map((car) => (
                <Card
                  id={car.id}
                  description={car.description}
                  img={car.img}
                  km={car.km}
                  title={car.title}
                  userName={car.userName}
                  value={car.value}
                  year={car.year}
                  key={car.id}
                />
              ))}
            </ul>
          </section>
          <div className={"flex absolute -bottom-32 gap-4 right-1/3 font-bold"}>
            <span className={"text-2xl text-colorGreyScaleGrey3"}>
              1<span className={"text-colorGreyScaleGrey4"}> de 2</span>
            </span>
            <button className={"flex items-center text-2xl text-colorBrandBrand1 font-bold"}>
              Seguinte &gt;
            </button>
          </div>
        </main>
      </div>
      <div className={"mb-80"}></div>
      <Footer />
    </>
  );
};
