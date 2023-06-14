import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { carros } from "../../utility";
import { SideBarMobile } from "../../components/sideBar/sideBarMobile";
import { ProfileHeader } from "../../components/ProfileHeader";
import { ProfileCard } from "../../components/ProfileCard";
import { CreateAdsModal } from "../../components/CreateAdsModal";
import { useAds } from "../../hooks/useAds";

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const { modalIsOpen } = useAds();

  return (
    <>
      <div
        className={"h-full min-w-screen box-border"}
        style={{ background: "#F1F3F5" }}
      >
        <Navbar />
        <ProfileHeader />

        <main
          className={`mt-10 min-h-full w-full container flex flex-col gap-4 relative box-border lg:flex-row`}
        >
          <section
            className={
              " mt-10 w-full h-full lg:w-full lg:min-h-max box-border pb-5"
            }
          >
            {modalIsOpen && <CreateAdsModal />}
            <ul
              className={
                "flex mt-10 lg:flex-wrap w-full gap-10 overflow-auto lg:justify-end  lg:py-0"
              }
            >
              {carros.map((car) => (
                <ProfileCard
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

          <div
            className={
              "flex absolute -bottom-24 right-20 sm:right-28 md:right-1/3 gap-4  font-bold"
            }
          >
            <span className={"text-2xl text-colorGreyScaleGrey3"}>
              1<span className={"text-colorGreyScaleGrey4"}> de 2</span>
            </span>
            <button
              className={
                "flex items-center text-2xl text-colorBrandBrand1 font-bold"
              }
            >
              Seguinte &gt;
            </button>
          </div>
        </main>
      </div>
      {open && <SideBarMobile setOpen={setOpen} />}
      <Footer />
    </>
  );
};
