import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/footer";

export const Home = () => {
  return (
    <>
      <div className={"min-h-screen w-screen"}>
        <Navbar />
        <Footer />
      </div>
    </>
  );
};
