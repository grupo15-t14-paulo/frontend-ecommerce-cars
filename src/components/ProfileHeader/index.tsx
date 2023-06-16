import { useContext } from "react";
import { profileName } from "../../hooks";
import { useAds } from "../../hooks/useAds";
import { CreateAdsModal } from "../CreateAdsModal";
import { AuthContext } from "../../providers/AuthProvider";

export const ProfileHeader = () => {
  const { modalIsOpen, handleOpenModal } = useAds();
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="w-full h-250 items-center md:h-200 bg-colorBrandBrand1 bg-contain bg-no-repeat bg-center relative box-border">
        <div className="inset-0 flex items-center relative top-20 justify-center">
          <div className="mb-10 max-w-[1240px] w-full ml-3 mr-3 flex-col p-5 min-h-217 bg-colorGreyScaleGrey10 md:w-3/1 rounded shadow-sm">
            <div className="name-profile1 bg-colorBrandBrand1 rounded-full">
              {profileName(user?.name)}
            </div>
            <div className={"w-full flex gap-5 items-center"}>
              <h1 className="mt-5 mb-5 text-2x1">{user?.name}</h1>
              {user?.isSeller && <span className={"km-year h-max"}>Anunciante</span>}
            </div>

            <h2 className="text-1x5">{user?.description}</h2>
            <button onClick={() => handleOpenModal()} className="button-newAnnoucement">
              Criar Anuncio
            </button>
          </div>
        </div>
      </div>

      {modalIsOpen && <CreateAdsModal />}
    </>
  );
};
