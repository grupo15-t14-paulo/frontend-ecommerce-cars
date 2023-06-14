import { useAds } from "../../hooks/useAds";

export const CreateAdsModal = () => {
  const { handleCloseModal } = useAds();
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
      // style={{
      //   position: "fixed",
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   bottom: 0,
      //   zIndex: 1000,
      //   backgroundColor: "rgba(0, 0, 0, 0.5)",
      // }}
    >
      <div
        className="absolute bg-white p-6 rounded shadow-lg z-[1000]"
        style={{ backgroundColor: "white" }}
      >
        <h2 className="text-lg font-bold mb-4">Modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button
          onClick={handleCloseModal}
          className="px-4 py-2 mt-4 text-white bg-gray-500 rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
