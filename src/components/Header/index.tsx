export const Header = () => {
  return (
    <div
      className={
        "w-screen h-627 md:h-544 bg-primary-car-header bg-contain bg-no-repeat bg-center relative"
      }
    >
      <div
        className={
          "w-screen h-full bg-gradient-to-t from-colorGreyScaleGrey0 to-transparent absolute z-0"
        }
      />
      <div
        className={
          "flex flex-col items-center w-full h-full text-colorColorsFixedWhiteFixed absolute top-14 p-5 text-center gap-4"
        }
      >
        <h1 className={"text-3xl font-semibold"}>Motors Shop</h1>
        <h2 className={"text-2xl"}>A melhor plataforma de anúnicos de carros do país</h2>
      </div>
    </div>
  );
};
