import { useContext, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/footer";
import { SideBarMobile } from "../../components/sideBar/sideBarMobile";
import { ProfileHeader } from "../../components/ProfileHeader";
import { ProfileCard } from "../../components/ProfileCard";
import { AuthContext } from "../../providers/AuthProvider";
import { useAuth } from "../../hooks/useAuth";
import { EditProfileModal } from "../../components/EditProfileModal";
import { ExcludeProfileModal } from "../../components/ExcludeProfileModal";
import { EditAddressModal } from "../../components/EditAddressModal";
import { CreateAdsModal } from "../../components/CreateAdsModal";
import { useAds } from "../../hooks/useAds";
import { ExcludeAdsModal } from "../../components/ExcludeAdsModal";

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const { modalIsOpen, modalType } = useAuth();
  const { modalIsOpen: modalAdsIsOpen, modalAdsType } = useAds();

  let modal;

  switch (modalType) {
    case "":
      modal = null;
      break;
    case "edit-profile":
      modal = <EditProfileModal />;
      break;
    case "exclude-profile":
      modal = <ExcludeProfileModal />;
      break;
    case "edit-address":
      modal = <EditAddressModal />;
      break;
  }

  let modalAds;

  switch (modalAdsType) {
    case "":
      modalAds = null;
      break;
    case "create-ads":
      modalAds = <CreateAdsModal />;
      break;
    case "edit-ads":
      modalAds = <CreateAdsModal />;
      break;
    case "exclude-ads":
      modalAds = <ExcludeAdsModal />;
      break;
  }

  return (
    <>
      <div className={"h-full min-w-screen box-border bg-colorGreyScaleGrey9"}>
        <Navbar />
        <ProfileHeader />

        <main
          className={`mt-[150px] items-center min-h-full container flex-col gap-4 relative box-border flex `}
        >
          <section className={"  w-full h-full lg:w-full lg: box-border pb-5"}>
            <ul
              className={
                "flex h-[510px] lg:flex-wrap w-full gap-10 overflow-auto lg:justify-center lg:py-0  scrollbar"
              }
            >
              {user?.announcement &&
                user?.announcement.map((car) => (
                  <ProfileCard
                    id={car.id}
                    description={car.description}
                    img={car.images}
                    km={car.mileage}
                    title={car.model}
                    user={user}
                    value={car.price}
                    year={car.year}
                    key={car.id}
                    createdAt={car.createdAt}
                    imgCover={car.imageCover}
                    fipePrice={car.fipePrice}
                    brand={car.brand}
                    typeCar={car.typeCar}
                    color={car.color}
                  />
                ))}
            </ul>
          </section>

          <div
            className={"flex mb-10 sm:right-28 md:right-1/3 gap-4  font-bold"}
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
      {modalIsOpen && modal}
      {modalAdsIsOpen && modalAds}
    </>
  );
};
