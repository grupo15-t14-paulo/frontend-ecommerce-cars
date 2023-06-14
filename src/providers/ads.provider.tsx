import { ReactNode, createContext, useState } from "react";

interface adsProviderProps {
  children: ReactNode;
}

interface adsContextValues {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdsContext = createContext<adsContextValues>(
  {} as adsContextValues
);

export const AdsProvider = ({ children }: adsProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <AdsContext.Provider
      value={{ handleOpenModal, handleCloseModal, modalIsOpen, setIsOpen }}
    >
      {children}
    </AdsContext.Provider>
  );
};
