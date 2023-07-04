import { createContext, useEffect, useState } from "react";
import { api, apiHerokuApp } from "../../services";
import {
  adsContextValues,
  adsProviderProps,
  Brand,
  IAnnoucement,
  InfoPage,
  modelsRequest,
  tReturnCar,
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
  const [car, setCar] = useState<tReturnCar | null>(null);
  const [modalAdsType, setModalAdsType] = useState("");
  const [page, setPage] = useState(1);
  const [infoPage, setInfoPage] = useState<InfoPage>();
  const [allCarsFilter, setallCarsFilter] = useState<IAnnoucement[] | []>([]);

  const { user } = useAuth();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const getAllAnnouncement = async () => {
    try {
      const response = await api.get(`/cars?page=${page}`);

      const cars = response.data;
      const onlyPage = {
        nextPage: cars.nextPage,
        prevPage: cars.prevPage,
        totalPages: cars.totalPages,
      };

      const filterCars = cars.cars.filter((car: IAnnoucement) => car.user.id !== user?.id);

      setInfoPage(onlyPage);
      setAllCars(filterCars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await apiHerokuApp.get("/cars");
        setBrand(response.data);

        const responseBrand = await apiHerokuApp.get(`/cars?brand=${brandSelected}`);

        if (Array.isArray(await responseBrand.data)) {
          setModels(responseBrand.data);
        } else {
          setModels([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllAnnouncement();

    fetchBrand();
  }, [brandSelected, user, page]);

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
        car,
        setCar,
        modalAdsType,
        setModalAdsType,
        getAllAnnouncement,
        setPage,
        page,
        infoPage,
        setInfoPage,
        allCarsFilter,
        setallCarsFilter,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
