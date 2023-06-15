import { ReactNode, createContext, useEffect, useState } from "react";
import { apiHerokuApp } from "../services";

interface adsProviderProps {
  children: ReactNode;
}

interface adsContextValues {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  brand: Brand;
  setBrandSelected: React.Dispatch<React.SetStateAction<string>>;
  models: modelsRequest[];
  brandSelected: string;
  imageCount: number;
  setImageCount: React.Dispatch<React.SetStateAction<number>>;
}

export interface modelsRequest {
  id: string;
  name: string;
  fuel: number;
  value: number;
  brand: string;
  year: string;
}

interface Brand {
  [key: string]: { name: string };
}

export const AdsContext = createContext<adsContextValues>(
  {} as adsContextValues
);

export const AdsProvider = ({ children }: adsProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [brand, setBrand] = useState<Brand>({});
  const [models, setModels] = useState<modelsRequest[]>([]);
  const [brandSelected, setBrandSelected] = useState("");
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
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBrand();
  }, []);

  useEffect(() => {
    const fetchModelos = async () => {
      try {
        const response = await apiHerokuApp.get(`/cars?brand=${brandSelected}`);
        if (Array.isArray(response.data)) {
          setModels(response.data);
        } else {
          setModels([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchModelos();
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
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
