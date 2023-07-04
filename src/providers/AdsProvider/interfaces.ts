import { ReactNode } from "react";
import { IUser, Images } from "../../components/Card/interface";
import { ICarFiltter } from "../../components/sideBar/sideBar.interface";
import { returnCarSchema, updateCarSchema } from "./ads.schemas";
import { z } from "zod";

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
  setCarFilter: React.Dispatch<React.SetStateAction<ICarFiltter | null | undefined>>;
  carFilter: ICarFiltter | null | undefined;
  filtering: boolean;
  setFiltering: React.Dispatch<React.SetStateAction<boolean>>;
  car: tReturnCar | null;
  setCar: React.Dispatch<React.SetStateAction<tReturnCar | null>>;
  modalAdsType: string;
  setModalAdsType: React.Dispatch<React.SetStateAction<string>>;
  getAllAnnouncement: () => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setInfoPage: React.Dispatch<React.SetStateAction<InfoPage | undefined>>;
  infoPage: InfoPage | undefined;
  setallCarsFilter: React.Dispatch<React.SetStateAction<[] | IAnnoucement[]>>;
  allCarsFilter: IAnnoucement[];
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

export interface InfoPage {
  nextPage: number | null;
  prevPage: number | null;
  totalPages: number | null;
}

export interface IAnnoucement {
  brand: string;
  color: string;
  description: string | null | undefined;
  fipePrice: number | string;
  id: string;
  imageCover: string;
  images: Images[];
  isAvailable: boolean;
  mileage: number;
  model: string;
  price: number;
  typeCar: string;
  year: string;
  user: IUser;
  createdAt: string;
}

export type tReturnCar = z.infer<typeof returnCarSchema>;

export type tUpdateCar = z.infer<typeof updateCarSchema>;
