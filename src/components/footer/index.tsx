import { useEffect, useState } from "react";

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer
      className={`${
        isMobile ? "gap-5" : ""
      }sm:h-32 bg-colorGreyScaleGrey0 gap-4 py-4 flex box-border ${
        isMobile ? "flex-col gap-0" : "flex-row"
      } items-center justify-around bottom-0 left-0 w-full`}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl">
        <span className="text-colorColorsFixedWhiteFixed">Motors</span>
        <span className="text-colorColorsFixedWhiteFixed ml-2">shop</span>
      </div>

      <p className={"text-colorColorsFixedWhiteFixed text-sm md:text-sm sm:text-xs my-2 sm:my-0"}>
        © 2022 - Todos os direitos reservados.
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="cursor-pointer text-white bg-colorGreyScaleGrey1 rounded-full p-2 w-8 h-8 sm:w-10 sm:h-10"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </footer>
  );
};
