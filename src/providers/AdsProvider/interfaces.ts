import { ReactNode } from "react";

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

export interface Brand {
  [key: string]: { name: string };
}
