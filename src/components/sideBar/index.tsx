import { Key, useEffect, useState } from "react";
import { useAds } from "../../hooks/useAds";
import { apiHerokuApp } from "../../services";
import { color, fuels, years } from "../../utility";
import { ICarFiltter } from "./sideBar.interface";

export const SideBar = () => {
  const { models, brand, brandSelectedFilter, setBrandSelectedFilter, setModels } = useAds();
  const [carFilter, setCarFilter] = useState<ICarFiltter | null>();

  const marcas = Object.keys(brand).map((prop) => prop.charAt(0).toUpperCase() + prop.slice(1));

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const responseBrand = await apiHerokuApp.get(`/cars?brand=${brandSelectedFilter}`);
        if (Array.isArray(responseBrand.data)) {
          setModels(responseBrand.data);
        } else {
          setModels([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBrand();
  }, [brandSelectedFilter]);

  const handleCarFilter = (type: string, content: string) => {
    const newCar: ICarFiltter = { ...carFilter };

    switch (type) {
      case "name":
        newCar.name = content;
        break;
      case "brand":
        newCar.brand = content;
        break;
      case "year":
        newCar.year = content;
        break;
      case "fuel":
        newCar.fuel = content;
        break;
      case "cor":
        newCar.cor = content;
        break;
    }

    setCarFilter(newCar);
  };

  const handleBrandClick = (str: string) => {
    const lowerName = str.toLowerCase();
    handleCarFilter("brand", str);
    setBrandSelectedFilter(lowerName);
  };

  return (
    <div className="hidden mb-0 lg:block lg:w-1/4 ">
      <div>
        <h2 className="text-black text-2xl font-semibold">Marca</h2>
        <ul className="mb-10 li-sideBar">
          {carFilter?.brand ? (
            <li>{carFilter.brand}</li>
          ) : (
            marcas.map((marca, index) => (
              <li key={index} className="span-li-sidebar" onClick={() => handleBrandClick(marca)}>
                {marca}
              </li>
            ))
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Modelo</h2>
        <ul className="mb-10 li-sideBar  max-h-80 py-2 w-full overflow-y-scroll  scrollbar">
          {carFilter?.name ? (
            <li>{carFilter.name}</li>
          ) : (
            models.map((model: { name: string }, index: Key | null | undefined) => (
              <li
                key={index}
                className="span-li-sidebar"
                onClick={() => handleCarFilter("name", model.name)}
              >
                {model.name.split(" ").slice(0, 3).join(" ")}
              </li>
            ))
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Cor</h2>
        <ul className="mb-10 li-sideBar">
          {carFilter?.cor ? (
            <li>{carFilter.cor}</li>
          ) : (
            color.map((cor, index) => (
              <li
                key={index}
                className="span-li-sidebar"
                onClick={() => handleCarFilter("cor", cor)}
              >
                {cor}
              </li>
            ))
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Ano</h2>
        <ul className="mb-10 li-sideBar">
          {carFilter?.year ? (
            <li>{carFilter.year}</li>
          ) : (
            years.map((year, index) => (
              <li
                key={index}
                className="span-li-sidebar"
                onClick={() => handleCarFilter("year", year)}
              >
                {year}
              </li>
            ))
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Combustível</h2>
        <ul className="mb-10 li-sideBar">
          {carFilter?.fuel ? (
            <li>{carFilter.fuel}</li>
          ) : (
            fuels.map((fuel, index) => (
              <li
                key={index}
                className="span-li-sidebar"
                onClick={() => handleCarFilter("fuel", fuel)}
              >
                {fuel}
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-black text-2xl font-semibold mb-5">Km</h2>
        <div className="flex gap-5 ">
          <input
            className="input-sidebar placeholder:text-colorGreyScaleGrey3"
            type="text"
            placeholder="Mínima"
          />
          <input
            className="input-sidebar placeholder:text-colorGreyScaleGrey3"
            type="text"
            placeholder="Máxima"
          />
        </div>
      </div>
      <div className="h-max flex flex-col">
        <h2 className="text-black text-2xl font-semibold mb-5">Preço</h2>
        <div className="flex gap-5 ">
          <input
            className="input-sidebar placeholder:text-colorGreyScaleGrey3"
            type="text"
            placeholder="Mínimo"
          />
          <input
            className="input-sidebar placeholder:text-colorGreyScaleGrey3"
            type="text"
            placeholder="Máximo"
          />
        </div>
        <button 
        className="button-default mt-5 w-full bg-colorBrandBrand1 text-colorColorsFixedWhiteFixed 
        hover:bg-colorColorsFixedWhiteFixed hover:text-colorGreyScaleGrey0"
        onClick={() => setCarFilter({})}
        >
          Limpar Filtro
        </button>
      </div>
    </div>
  );
};
