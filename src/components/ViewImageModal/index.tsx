import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useAds } from "../../hooks/useAds";
import { useAuth } from "../../hooks/useAuth";

interface IViewImageModalProps {
  imgURL: string;
}

export const ViewImageModal = ({ imgURL }: IViewImageModalProps) => {
  const { modalIsOpen, handleCloseModal } = useAds();
  const { setModalType } = useAuth();

  return (
    <Dialog.Root open={modalIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={() => {
            handleCloseModal();
            setModalType("");
          }}
          className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0"
        />
        <Dialog.Content className="overflow-auto flex-col items-center data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-colorGreyScaleGrey10 p-[25px] z-50 overflow-y-scroll scrollbar box-border">
          <Dialog.Title className=" m-0 text-[17px] font-medium mb-8">
            Imagem do veículo
          </Dialog.Title>

          <Dialog.Description className="flex justify-center mt-[10px] mb-5 text-[15px] text-colorGreyScaleGrey2 leading-normal">
            <img src={imgURL} alt="imagem do carro" className="max-w-full " />
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              onClick={() => {
                handleCloseModal();
                setModalType("");
              }}
              className=" absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full  focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
