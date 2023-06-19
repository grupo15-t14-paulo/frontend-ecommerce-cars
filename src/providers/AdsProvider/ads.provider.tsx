import { createContext, useEffect, useState } from "react";
import { apiHerokuApp } from "../../services";
import { adsContextValues, adsProviderProps, Brand, modelsRequest } from "./interfaces";

export const AdsContext = createContext<adsContextValues>({} as adsContextValues);

export const AdsProvider = ({ children }: adsProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [brand, setBrand] = useState<Brand>({});
  const [models, setModels] = useState<modelsRequest[]>([]);
  const [brandSelected, setBrandSelected] = useState("");
  const [brandSelectedFilter, setBrandSelectedFilter] = useState("chevrolet");
  const [imageCount, setImageCount] = useState(2);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await apiHerokuApp.get("/cars");
        setBrand(response.data);

        const responseBrand = await apiHerokuApp.get(`/cars?brand=${brandSelected}`);
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
  }, [brandSelected]);

  return (
    <AdsContext.Provider
      value={{
        handleOpenModal,
        handleCloseModal,
        modalIsOpen,
        setIsOpen,
        brand,
        setBrandSelected,
        models,
        brandSelected,
        imageCount,
        setImageCount,
        brandSelectedFilter,
        setModels,
        setBrandSelectedFilter,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
