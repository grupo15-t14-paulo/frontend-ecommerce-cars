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
import { EditAdsModal } from "../../components/EditAdsModal";
import { NoContent } from "../../components/NoContent";
import Foto from "../../assets/images/7302438.jpg";

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const { modalIsOpen, modalType } = useAuth();
  const { modalIsOpen: modalAdsIsOpen, modalAdsType } = useAds();

  const anuncios = user?.announcement;

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
      modalAds = <EditAdsModal />;
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
            {user?.isSeller ? (
              <>
                {anuncios && anuncios?.length > 0 ? (
                  <ul
                    className={
                      "flex h-[510px] lg:flex-wrap w-full gap-10 overflow-auto lg:justify-center lg:py-0  scrollbar"
                    }
                  >
                    {anuncios?.map((car) => (
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
                ) : (
                  <NoContent isSeller={user?.isSeller} />
                )}
              </>
            ) : (
              <>
                <div className="flex items-center justify-center w-full md:h-[700px] gap-5 mb-5">
                  <h2 className="font-bold text-colorBrandBrand1 p-3 rounded-md text-2xl text-center md:text-3xl lg:text-4xl absolute top-0">
                    Não foi realizado nenhuma compra :(
                  </h2>
                  <img src={Foto} alt="img" className="md:w-[700px] md:h-[700px] rounded-md" />
                </div>
              </>
            )}
          </section>
        </main>
      </div>
      {open && <SideBarMobile setOpen={setOpen} />}
      <Footer />
      {modalIsOpen && modal}
      {modalAdsIsOpen && modalAds}
    </>
  );
};
