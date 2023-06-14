import { profileName } from "../../hooks";
import { useAds } from "../../hooks/useAds";
import DialogDemo from "../CreateAdsModal";

const nameUser = "Samuel Leão";

export const ProfileHeader = () => {
  const { modalIsOpen, handleOpenModal, handleCloseModal } = useAds();
  return (
    <>
      <div className="w-full h-250  items-center md:h-200 bg-colorBrandBrand1 bg-contain bg-no-repeat bg-center relative box-border">
        <div className="inset-0 flex items-center  relative top-20 justify-center">
          <div className="mb-10 ml-3 mr-3 flex-col p-5 min-h-217 bg-colorGreyScaleGrey10 md:w-3/1 ">
            <div className="name-profile1 bg-colorBrandBrand1">
              {profileName(nameUser)}
            </div>
            <h1 className="mt-5 mb-5 text-2x1">Samuel Leão</h1>

            <h2 className="text-1x5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              magnam aut laboriosam necessitatibus nisi expedita consequuntur
            </h2>
            <button
              onClick={() => handleOpenModal()}
              className=" mt-5  border-solid border-colorBrandBrand1 text-colorBrandBrand1 border rounded px-4 py-2"
            >
              Criar Anuncio
            </button>
          </div>
        </div>
      </div>
      <DialogDemo
        modalIsOpen={modalIsOpen}
        handleCloseModal={handleCloseModal}
      />

      {/* {modalIsOpen && <CreateAdsModal />} */}
    </>
  );
};
