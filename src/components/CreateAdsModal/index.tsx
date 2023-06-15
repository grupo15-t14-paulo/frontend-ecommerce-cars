import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useAds } from "../../hooks/useAds";

export const CreateAdsModal = () => {
  const {
    modalIsOpen,
    handleCloseModal,
    marcas,
    modelos,
    marcaSelecionada,
    setMarcaSelecionada,
  } = useAds();

  return (
    <Dialog.Root open={modalIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={handleCloseModal}
          className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0"
        />
        <Dialog.Content className="overflow-auto data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-colorGreyScaleGrey10 p-[25px] z-50 overflow-y-scroll scrollbar box-border">
          <Dialog.Title className=" m-0 text-[17px] font-medium mb-8">
            Criar anuncio
          </Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            Informações do veículo
          </Dialog.Description>
          <fieldset className="fieldset-default">
            <label className="label-default" htmlFor="marca">
              Marca
            </label>
            <select
              className="mt-2 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none"
              id="marca"
              value={marcaSelecionada}
              onChange={(e) => setMarcaSelecionada(e.target.value)}
            >
              <option value="">Selecione a marca</option>

              {Object.keys(marcas).map((marca) => (
                <option key={marca} value={marca}>
                  {marca}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className="fieldset-default">
            <label className="label-default" htmlFor="modelo">
              Modelo
            </label>
            <select
              className="focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none"
              id="modelo"
              disabled={!marcaSelecionada}
            >
              <option value="">Selecione o modelo</option>

              {modelos.map((modelo) => (
                <option key={modelo.id} value={modelo.id}>
                  {modelo.name}
                </option>
              ))}
            </select>
          </fieldset>
          <div className="flex gap-5">
            <fieldset className="fieldset-default">
              <label className="label-default" htmlFor="ano">
                Ano
              </label>
              <input className="input-normal" id="ano" />
            </fieldset>
            <fieldset className="fieldset-default">
              <label className="label-default" htmlFor="combustivel">
                Combustivel
              </label>
              <input className="input-low" id="combustivel" />
            </fieldset>
          </div>
          <div className="flex gap-5">
            <fieldset className="fieldset-default">
              <label className="label-default" htmlFor="quilometragem">
                Quilometragem
              </label>
              <input className="input-normal" id="quilometragem" />
            </fieldset>
            <fieldset className="fieldset-default">
              <label className=" label-default" htmlFor="cor">
                Cor
              </label>
              <input className="input-low" id="cor" />
            </fieldset>
          </div>
          <div className="flex gap-5">
            <fieldset className="fieldset-default">
              <label className="  label-default" htmlFor="tabela fipe">
                Preço tabela FIPE
              </label>
              <input className="input-normal" id="tabela fipe" />
            </fieldset>
            <fieldset className="fieldset-default">
              <label className=" label-default" htmlFor="preço">
                Preço
              </label>
              <input className="input-low" id="preço" />
            </fieldset>
          </div>
          <fieldset className="fieldset-default">
            <label className=" label-default" htmlFor="descrição">
              Descrição
            </label>
            <textarea
              className="  focus:inline-flex mt-2 p-5 w-full h-20 flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none "
              id="descrição"
            />
          </fieldset>
          <fieldset className="fieldset-default">
            <label className=" label-default" htmlFor="imagem capa">
              Imagem da capa
            </label>
            <input
              className="focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none "
              id="imagem capa"
            />
          </fieldset>
          <fieldset className="fieldset-default">
            <label className="label-default" htmlFor="imagem 1">
              1° Imagem da galeria
            </label>
            <input
              className="  focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border"
              id="imagem 1"
            />
          </fieldset>
          <fieldset className="fieldset-default">
            <label className="label-default" htmlFor="imagem 2">
              2° imagem da galeria
            </label>
            <input
              className=" focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none "
              id="imagem 2"
            />
          </fieldset>
          <button className="inline-flex border bg-colorBrandBrand4 border-colorBrandBrand2 text-colorBrandBrand2  p-2 rounded-[4px] mt-4 mb-6">
            Adicionar campo para imagem da galeria
          </button>
          <div className="mt-[25px] flex justify-end">
            <div>
              <Dialog.Close asChild>
                <button onClick={handleCloseModal} className="button-cancel">
                  Cancelar
                </button>
              </Dialog.Close>
              <button className="button-default font-normal text-sm focus:outline-none bg-colorBrandBrand3 text-colorColorsFixedWhiteFixed ml-4 px-7">
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
};
