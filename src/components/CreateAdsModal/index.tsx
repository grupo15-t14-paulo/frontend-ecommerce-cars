import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useAds } from "../../hooks/useAds";
// import { modelsRequest } from "../../providers/ads.provider";

export const CreateAdsModal = () => {
  const {
    modalIsOpen,
    handleCloseModal,
    brand,
    models,
    brandSelected,
    setBrandSelected,
    imageCount,
    setImageCount,
  } = useAds();

  const renderImage = () => {
    const inputs = [];
    for (let i = 3; i <= imageCount; i++) {
      inputs.push(
        <div className="flex flex-col" key={i}>
          <fieldset className="fieldset-default">
            <label className="label-default" htmlFor="imagem 1">
              {i}º Imagem de galeria
            </label>
            <input
              type="url"
              name={`image${i}`}
              id={`image${i}`}
              className="focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none"
            />
          </fieldset>
        </div>
      );
    }
    return inputs;
  };

  const handleAddImage = () => {
    setImageCount((prevCount) => prevCount + 1);
  };

  // const initialData = {
  //   year: "",
  //   fuel: "",
  //   tabelaFipe: {},
  // };

  // const handleDataUpdate = (data: modelsRequest) => {
  //   initialData.year = data.year;
  //   initialData.fuel = getFuelLabel(data.fuel);
  //   initialData.tabelaFipe = data.value;
  // };

  // const getFuelLabel = (fuel: number) => {
  //   switch (fuel) {
  //     case 1:
  //       return "Flex";
  //     case 2:
  //       return "Elétrico";
  //     case 3:
  //       return "Híbrido";
  //     default:
  //       return "";
  //   }
  // };

  return (
    <Dialog.Root open={modalIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={handleCloseModal}
          className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0"
        />
        <Dialog.Content className="overflow-auto flex-col items-center data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-colorGreyScaleGrey10 p-[25px] z-50 overflow-y-scroll scrollbar box-border">
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
              value={brandSelected}
              onChange={(e) => setBrandSelected(e.target.value)}
            >
              <option value="">Selecione a marca</option>

              {Object.keys(brand).map((marca) => (
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
              disabled={!brandSelected}
            >
              <option value="">Selecione o modelo</option>

              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </select>
          </fieldset>
          <div className="  w-full flex gap-5">
            <fieldset className="fieldset-default">
              <label className="label-default" htmlFor="ano">
                Ano
              </label>
              <input
                className="input-normal w-full"
                id="ano"
                // disabled={!brandSelected}
                // value={initialData.year}
              />
            </fieldset>
            <fieldset className="fieldset-default">
              <label className="label-default" htmlFor="combustivel">
                Combustivel
              </label>
              <input
                className="input-low w-full"
                id="combustivel"
                // value={initialData.fuel}
              />
            </fieldset>
          </div>
          <div className="w-full flex gap-5 ">
            <fieldset className="fieldset-default">
              <label className="label-default " htmlFor="quilometragem">
                Quilometragem
              </label>
              <input className="input-normal w-full" id="quilometragem" />
            </fieldset>
            <fieldset className="fieldset-default">
              <label className=" label-default" htmlFor="cor">
                Cor
              </label>
              <input className="input-low w-full" id="cor" />
            </fieldset>
          </div>
          <div className="w-full flex gap-5">
            <fieldset className="fieldset-default">
              <label className="  label-default" htmlFor="tabela fipe">
                Preço tabela FIPE
              </label>
              <input className="input-normal w-full" id="tabela fipe" />
            </fieldset>
            <fieldset className="fieldset-default">
              <label className=" label-default" htmlFor="preço">
                Preço
              </label>
              <input className="input-low w-full" id="preço" />
            </fieldset>
          </div>
          <fieldset className="fieldset-default">
            <label className=" label-default" htmlFor="descrição">
              Descrição
            </label>
            <textarea
              className=" resize-none focus: inline-flex mt-2 p-5 w-full h-20 flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none "
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
              className="focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none"
              id="imagem 1"
            />
          </fieldset>
          <fieldset className="fieldset-default">
            <label className="label-default" htmlFor="imagem 2">
              2° imagem da galeria
            </label>
            <input
              className="focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none "
              id="imagem 2"
            />
          </fieldset>
          {renderImage()}
          {imageCount < 6 && (
            <button
              onClick={handleAddImage}
              className="inline-flex border bg-colorBrandBrand4 border-colorBrandBrand2 text-colorBrandBrand2  p-2 rounded-[4px] mt-4 mb-6"
            >
              Adicionar campo para imagem da galeria
            </button>
          )}
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
