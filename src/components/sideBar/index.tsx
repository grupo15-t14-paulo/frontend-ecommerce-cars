import { useAds } from "../../hooks/useAds";
import { ICarFiltter } from "./sideBar.interface";

export const SideBar = () => {
  const {
    setBrandSelectedFilter,
    carFilter,
    setCarFilter,
    allCars,
    setFiltering,
  } = useAds();

  const marcas = [...new Set(allCars?.map((obj) => obj.brand))];
  const models = [...new Set(allCars?.map((obj) => obj.model))];
  const colors = [...new Set(allCars?.map((obj) => obj.color))];
  const years = [...new Set(allCars?.map((obj) => obj.year))];
  const fuels = [...new Set(allCars?.map((obj) => obj.typeCar))];

  // const marcas = Object.keys(brand).map((prop) => prop.charAt(0).toUpperCase() + prop.slice(1));

  // useEffect(() => {
  //   const fetchBrand = async () => {
  //     try {
  //       const responseBrand = await apiHerokuApp.get(`/cars?brand=${brandSelectedFilter}`);
  //       if (Array.isArray(responseBrand.data)) {
  //         setModels(responseBrand.data);
  //       } else {
  //         setModels([]);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchBrand();
  // }, [brandSelectedFilter]);

  const handleCarFilter = (type: string, content: string) => {
    const newCar: ICarFiltter = { ...carFilter };
    setFiltering(true);
    switch (type) {
      case "model":
        newCar.model = content;
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
        newCar.color = content;
        break;
      case "minPrice":
        newCar.minPrice = content;
        break;
      case "maxPrice":
        newCar.maxPrice = content;
        break;
      case "minMileage":
        newCar.minMileage = content;
        break;
      case "maxMileage":
        newCar.maxMileage = content;
        break;
    }

    setCarFilter(newCar);
  };

  const handleBrandClick = (str: string) => {
    const lowerName = str.toLowerCase();
    handleCarFilter("brand", str);
    setBrandSelectedFilter(lowerName);
  };

  const emptyFilter = () => {
    setCarFilter({});
    setFiltering(false);
  };

  return (
    <div className="hidden mb-0 lg:block lg:w-1/4 ">
      <div>
        <h2 className="text-black gap-1 text-2xl font-semibold">Marca</h2>
        <ul className="mb-10 li-sideBar">
          {carFilter?.brand ? (
            <li>{carFilter.brand.charAt(0).toUpperCase() + carFilter.brand.slice(1)}</li>
          ) : (
            marcas.map((marca, index) => (
              <li key={index} className="span-li-sidebar" onClick={() => handleBrandClick(marca)}>
                {marca.charAt(0).toUpperCase() + marca.slice(1)}
              </li>
            ))
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Modelo</h2>
        <ul className="mb-10 li-sideBar gap-1 max-h-80 py-2 w-full overflow-y-auto scrollbar">
          {carFilter?.model ? (
            <li>{carFilter.model.charAt(0).toUpperCase() + carFilter.model.slice(1)}</li>
          ) : (
            models.map((model, index) => (
              <li
                key={index}
                className="span-li-sidebar"
                onClick={() => handleCarFilter("model", model)}
              >
                {model.split(" ").slice(0, 3).join(" ").charAt(0).toUpperCase() + model.slice(1)}
              </li>
            ))
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Cor</h2>
        <ul className="mb-10 li-sideBar">
          {carFilter?.color ? (
            <li>{carFilter.color}</li>
          ) : (
            colors.map((cor, index) => (
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
            onChange={(e) => handleCarFilter("minMileage", e.target.value)}
          />
          <input
            className="input-sidebar placeholder:text-colorGreyScaleGrey3"
            type="text"
            placeholder="Máxima"
            onChange={(e) => handleCarFilter("maxMileage", e.target.value)}
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
            onChange={(e) => handleCarFilter("minPrice", e.target.value)}
          />
          <input
            className="input-sidebar placeholder:text-colorGreyScaleGrey3"
            type="text"
            placeholder="Máximo"
            onChange={(e) => handleCarFilter("maxPrice", e.target.value)}
          />
        </div>
        <button
          className="flex justify-center mt-10 bg-colorBrandBrand2 text-colorColorsFixedWhiteFixed py-3 rounded max-w-[279px] hover:text-colorGreyScaleGrey0 hover:bg-colorColorsFixedWhiteFixed border-2"
          onClick={() => emptyFilter()}
        >
          Limpar Filtro
        </button>
      </div>
    </div>
  );
};
