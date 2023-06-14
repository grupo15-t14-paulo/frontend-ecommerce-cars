import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface Props {
  modalIsOpen: boolean;
  handleCloseModal: () => void;
}
const DialogDemo: React.FC<Props> = ({ modalIsOpen, handleCloseModal }) => (
  <Dialog.Root open={modalIsOpen}>
    <Dialog.Portal>
      <Dialog.Overlay
        onClick={handleCloseModal}
        className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0"
      />
      <Dialog.Content className="overflow-auto data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-colorGreyScaleGrey10 p-[25px]">
        <Dialog.Title className=" m-0 text-[17px] font-medium mb-8">
          Criar anuncio
        </Dialog.Title>
        <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
          Informações do veículo
        </Dialog.Description>
        <fieldset className="mb-[15px] flex-col items-center gap-5">
          <label
            className="text-colorGreyScaleGrey10  w-[90px] text-right text-[15px]"
            htmlFor="Marca"
          >
            Marca
          </label>
          <input
            className=" mt-2  inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none "
            id="marca"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex-col items-center gap-5">
          <label className=" w-[90px] text-right text-[15px]" htmlFor="modelo">
            Modelo
          </label>
          <input
            className="  focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none "
            id="modelo"
          />
        </fieldset>
        <div className="flex gap-5">
          <fieldset className="mb-[15px]  flex-col items-center gap-5">
            <label
              className="text-colorGreyScaleGrey10  w-[90px] text-right text-[15px]"
              htmlFor="ano"
            >
              Ano
            </label>
            <input
              className=" mt-2  inline-flex h-[35px] w-auto flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none"
              id="ano"
            />
          </fieldset>
          <fieldset className="mb-[15px] flex-col items-center gap-5">
            <label
              className=" w-[90px] text-right text-[15px]"
              htmlFor="combustivel"
            >
              Combustivel
            </label>
            <input
              className="  focus:inline-flex  mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none"
              id="combustivel"
            />
          </fieldset>
        </div>
        <div className="flex gap-5">
          <fieldset className="mb-[15px] flex-col items-center gap-5">
            <label
              className="text-colorGreyScaleGrey10  w-[90px] text-right text-[15px]"
              htmlFor="quilometragem"
            >
              Quilometragem
            </label>
            <input
              className=" mt-2 w-auto  inline-flex h-[35px]  flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none"
              id="quilometragem"
            />
          </fieldset>
          <fieldset className="mb-[15px] flex-col items-center gap-5">
            <label className=" w-[90px] text-right text-[15px]" htmlFor="cor">
              Cor
            </label>
            <input
              className="  focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none"
              id="cor"
            />
          </fieldset>
        </div>
        <div className="flex gap-5">
          <fieldset className="mb-[15px] flex-col items-center gap-5">
            <label
              className="text-colorGreyScaleGrey10  w-[90px] text-right text-[15px]"
              htmlFor="tabela fipe"
            >
              Preço tabela FIPE
            </label>
            <input
              className=" mt-2   inline-flex h-[35px] w-auto  flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none "
              id="tabela fipe"
            />
          </fieldset>
          <fieldset className="mb-[15px] flex-col items-center gap-5">
            <label className=" w-[90px] text-right text-[15px]" htmlFor="preço">
              Preço
            </label>
            <input
              className="  focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none "
              id="preço"
            />
          </fieldset>
        </div>
        <fieldset className="mb-[15px] flex-col items-center gap-5">
          <label
            className=" w-[90px] text-right text-[15px]"
            htmlFor="descrição"
          >
            Descrição
          </label>
          <textarea
            className="  focus:inline-flex mt-2 p-5 w-full h-20 flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none "
            id="descrição"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex-col items-center gap-5">
          <label
            className=" w-[90px] text-right text-[15px]"
            htmlFor="imagem capa"
          >
            Imagem da capa
          </label>
          <input
            className="  focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none "
            id="imagem capa"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex-col items-center gap-5">
          <label
            className=" w-[90px] text-right text-[15px]"
            htmlFor="imagem 1"
          >
            1° Imagem da galeria
          </label>
          <input
            className="  focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none "
            id="imagem 1"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex-col items-center gap-5">
          <label
            className=" w-[90px] text-right text-[15px]"
            htmlFor="imagem 2"
          >
            2° imagem da galeria
          </label>
          <input
            className=" focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey10 border outline-none "
            id="imagem 2"
          />
        </fieldset>
        <button className="inline-flex border bg-#B0A6F0 border-colorBrandBrand2 text-colorBrandBrand2  p-2 rounded-[4px]">
          Adicionar campo para imagem da galeria
        </button>
        <div className="mt-[25px] flex justify-end">
          <div>
            <Dialog.Close asChild>
              <button
                onClick={handleCloseModal}
                className=" inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none  focus:outline-none"
              >
                Cancelar
              </button>
            </Dialog.Close>
            <button className=" inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none  focus:outline-none">
              Criar anúncio
            </button>
          </div>
        </div>
        <Dialog.Close asChild>
          <button
            onClick={handleCloseModal}
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

export default DialogDemo;
