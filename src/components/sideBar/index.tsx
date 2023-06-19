import { useEffect, useState } from "react";
import { useAds } from "../../hooks/useAds";
import { apiHerokuApp } from "../../services";
import { color, fuels, years } from "../../utility";

interface ICarFiltter {
  brand?: string;
  name?: string;
  fuel?: string;
  year?: string;
  cor?: string;
}

export const SideBar = () => {
  const { models, brand, brandSelectedFilter, setBrandSelectedFilter, setModels } = useAds();
  const [selected , setSelected] = useState(false)
  const [carFilter, setCarFilter] = useState<ICarFiltter | null>()

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
  }, [brandSelectedFilter])

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
        newCar.fuel = content
        break;
        case "cor":
        newCar.cor = content
        break;
    }

    setCarFilter(newCar)
  }

  const handleBrandClick = (str: string) => {
    const lowerName = str.toLowerCase()
    handleCarFilter('brand', str)
    setSelected(true)
    setBrandSelectedFilter(lowerName)
  }

  return (
    <div className="hidden mb-0 lg:block lg:w-1/4 ">
      <div>
        <h2 className="text-black text-2xl font-semibold">Marca</h2>
        <ul className="mb-10 li-sideBar">
          {selected ? <li>{brandSelectedFilter}</li> : marcas.map((marca, index) => (
              <li key={index} className="span-li-sidebar" onClick={()=> handleBrandClick(marca)}>
                {marca}
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Modelo</h2>
        <ul className="mb-10 li-sideBar  max-h-80 py-2 w-full overflow-y-scroll  scrollbar">
          {carFilter?.name ? <li>{carFilter.name}</li> : models.map((model, index) => (
            <li key={index} className="span-li-sidebar" onClick={() => handleCarFilter('name', model.name)}>
              {model.name.split(" ").slice(0, 3).join(" ")}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Cor</h2>
        <ul className="mb-10 li-sideBar">
          {color.map((cor, index) => (
            <li key={index} className="span-li-sidebar" onClick={() => handleCarFilter('cor', cor)}>
              {cor}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Ano</h2>
        <ul className="mb-10 li-sideBar">
          {years.map((year, index) => (
            <li key={index} className="span-li-sidebar" onClick={() => handleCarFilter('year', year)}>
              {year}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Combustível</h2>
        <ul className="mb-10 li-sideBar">
          {fuels.map((fuel, index) => (
            <li key={index} className="span-li-sidebar" onClick={() => handleCarFilter('fuel', fuel)}>
              {fuel}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-black text-2xl font-semibold mb-5">Km</h2>
        <div className="m-2 flex gap-5 ">
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
      <div>
        <h2 className="text-black text-2xl font-semibold mb-5">Preço</h2>
        <div className="m-2 flex gap-5 ">
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
      </div>
    </div>
  );
};
