import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/footer";
import { SideBar } from "../../components/sideBar";
import { carros } from "../../utility";

export const Home = () => {
  return (
    <>
      <div className={"min-h-screen w-screen mb-60"}>
        <Navbar />
        <Header />
        <main className={"mt-12 h-screen flex gap-4 container"}>
          <SideBar />
          <section className={"w-3/4 max-w-[1100px] h-screen"}>
            <ul
              className={
                "grid h-screen md:grid-cols-2 lg:grid-cols-3 w-full gap-5 overflow-auto justify-center"
              }
            >
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
        </main>
      </div>
      <Footer />
    </>
  );
};
