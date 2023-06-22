import { createContext, useEffect, useState } from "react";
import { api, apiHerokuApp } from "../../services";
import {
  adsContextValues,
  adsProviderProps,
  Brand,
  IAnnoucement,
  modelsRequest,
} from "./interfaces";
import { ICarFiltter } from "../../components/sideBar/sideBar.interface";
import { useAuth } from "../../hooks/useAuth";

export const AdsContext = createContext<adsContextValues>({} as adsContextValues);

export const AdsProvider = ({ children }: adsProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [brand, setBrand] = useState<Brand>({} as Brand);
  const [models, setModels] = useState<modelsRequest[]>([]);
  const [brandSelected, setBrandSelected] = useState("");
  const [brandSelectedFilter, setBrandSelectedFilter] = useState("");
  const [imageCount, setImageCount] = useState(2);
  const [allCars, setAllCars] = useState<IAnnoucement[] | []>();
  const [carFilter, setCarFilter] = useState<ICarFiltter | null>();
  const [filtering, setFiltering] = useState(false);

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

    const getAllAnnouncement = async () => {
      try {
        const response = await api.get("/cars");

        const cars: IAnnoucement[] = response.data;

        // const filterCars = cars.filter((car) => car.user.id !== user?.id);

        setAllCars(cars);
      } catch (error) {
        console.log(error);
      }
    };
    getAllAnnouncement();

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
        allCars,
        carFilter,
        setCarFilter,
        filtering,
        setFiltering,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
