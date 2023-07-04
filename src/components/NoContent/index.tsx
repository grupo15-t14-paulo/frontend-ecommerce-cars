import { Link } from "react-router-dom";
import Foto from "../../assets/images/7302438.jpg";
import { useAds } from "../../hooks/useAds";

interface ComponentProps {
  isSeller: boolean | undefined;
}

export const NoContent = (props: ComponentProps) => {
  const { handleOpenModal, setModalAdsType } = useAds();

  return (
    <>
      <div className="flex items-center justify-center w-full md:h-[700px] gap-5 mt-5 mb-5 relative">
        <h2 className="font-bold text-colorBrandBrand1 bg-colorColorsFixedWhiteFixed p-3 rounded-md text-2xl text-center md:text-3xl lg:text-4xl absolute top-0">
          Infelizmente não tem anúncios :(
        </h2>
        <img src={Foto} alt="img" className="md:w-[700px] md:h-[700px] rounded-md" />

        {props.isSeller && (
          <Link
            to={"/profile"}
            className="button-default absolute bottom-0 flex gap-3"
            onClick={() => {
              handleOpenModal();
              setModalAdsType("create-ads");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Novo anúncio
          </Link>
        )}
      </div>
    </>
  );
};
