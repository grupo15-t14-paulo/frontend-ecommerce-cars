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
  marcas: Brand;
  setMarcaSelecionada: React.Dispatch<React.SetStateAction<string>>;
  modelos: modelsRequest[];
  marcaSelecionada: string;
}

interface modelsRequest {
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
  const [marcas, setMarcas] = useState<Brand>({});
  const [modelos, setModelos] = useState<modelsRequest[]>([]);
  const [marcaSelecionada, setMarcaSelecionada] = useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await apiHerokuApp.get("/cars");
        setMarcas(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMarcas();
  }, []);

  useEffect(() => {
    const fetchModelos = async () => {
      try {
        const response = await apiHerokuApp.get(
          `/cars?brand=${marcaSelecionada}`
        );
        if (Array.isArray(response.data)) {
          setModelos(response.data);
        } else {
          setModelos([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchModelos();
  }, [marcaSelecionada]);
  return (
    <AdsContext.Provider
      value={{
        handleOpenModal,
        handleCloseModal,
        modalIsOpen,
        setIsOpen,
        marcas,
        setMarcaSelecionada,
        modelos,
        marcaSelecionada,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
