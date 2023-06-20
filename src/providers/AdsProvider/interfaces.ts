import { ReactNode } from "react";
import { Images } from "../../components/Card/interface";

export interface adsProviderProps {
  children: ReactNode;
}

export interface adsContextValues {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  brand: Brand;
  setBrandSelected: React.Dispatch<React.SetStateAction<string>>;
  setBrandSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
  setModels: React.Dispatch<React.SetStateAction<modelsRequest[]>>;
  models: modelsRequest[];
  brandSelected: string;
  brandSelectedFilter: string;
  imageCount: number;
  setImageCount: React.Dispatch<React.SetStateAction<number>>;
  allCars: IAnnoucement[] | [] | undefined;
}

export interface modelsRequest {
  id: string;
  name: string;
  fuel: number;
  value: number;
  brand: string;
  year: string;
}

export interface Brand {
  [key: string]: { name: string };
}

export interface IAnnoucement {
  brand: string;
  color: string;
  description: string;
  fipePrice: number;
  id: string;
  imageCover: string;
  images: Images[];
  isAvailable: boolean;
  mileage: number;
  model: string;
  price: number;
  typeCar: string;
  year: string;
  userName: string;
  createdAt: string;
}
