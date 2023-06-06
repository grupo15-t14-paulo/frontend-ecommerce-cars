import { Card } from "../../components/Card";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/footer";
import { carros } from "../../utility";

export const Home = () => {
  return (
    <>
      <div className={"min-h-screen w-screen"}>
        <Navbar />
        <Footer />
        <ul className={"flex flex-col gap-10"}>
          {carros.map((car, index) => (
            <Card
              description={car.description}
              img={car.img}
              km={car.km}
              title={car.title}
              userName={car.userName}
              value={car.value}
              year={car.year}
              key={index}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
