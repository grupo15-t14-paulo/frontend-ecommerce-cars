import { Footer } from "../../components/Footer";

export const DetailCar = () => {
  return (
    <>
      <div className={"h-full min-w-screen box-border"}>
        <main className={"flex flex-col lg:flex-row gap-4 container w-full h-screen"}>
          <section className={"w-3/4 bg-gray-300"}>DetailCard</section>
          <section className={"bg-slate-500 w-1/4"}>Sidebar</section>
        </main>
      </div>
      <div className={"mb-32"}></div>
      <Footer />
    </>
  );
};
