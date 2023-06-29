import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useAds } from "../../hooks/useAds";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterAnnoucementForm } from "./announcement.interface";
import { api } from "../../services";
import { carCreateSchema } from "../../providers/AdsProvider/ads.schemas";
import { modelsRequest } from "../../providers/AdsProvider/interfaces";
import { AuthContext } from "../../providers/AuthProvider";
import { colorDefault } from "../../styles/utility";

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
    setIsOpen,
  } = useAds();

  const [modelSelected, setModelSelected] = useState<modelsRequest>();
  const { setLoading } = useContext(AuthContext);

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

  const getFuelLabel = (fuel: number | undefined) => {
    let fuelType;

    switch (fuel) {
      case 1:
        fuelType = "Flex";
        break;
      case 2:
        fuelType = "Elétrico";
        break;
      case 3:
        fuelType = "Híbrido";
        break;
      default:
        fuelType = "Não Informado";
        break;
    }
    return fuelType;
  };

  const { register, handleSubmit, setValue, formState:{errors} } = useForm<TRegisterAnnoucementForm>({
    resolver: zodResolver(carCreateSchema),
  });

  const submit: SubmitHandler<TRegisterAnnoucementForm> = async (
    data: TRegisterAnnoucementForm
  ) => {
    setLoading(true);
    const newCar = {
      brand: data.brand,
      model: modelSelected?.name.normalize("NFD"),
      year: data.year,
      typeCar: data.typeCar,
      mileage: Number(data.mileage),
      color: data.color,
      fipePrice: modelSelected?.value,
      price: Number(data.price),
      description: data.description,
      imageCover: data.imageCover,
      images: data.images.map((image: { urlImage: string }) => ({
        urlImage: image.urlImage,
      })),
    };

    try {
      const response = api.post<TRegisterAnnoucementForm>("/cars", newCar);
      await response;
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddImage = () => {
    setImageCount((prevCount) => prevCount + 1);
  };

  const modelSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    const id = event.currentTarget.value;
    const filter = models.find((car) => car.id === id);
    setValue("year", filter!.year);
    setValue("typeCar", getFuelLabel(filter!.fuel));
    return setModelSelected(filter);
  };

  return (
    <Dialog.Root open={modalIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={handleCloseModal}
          className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0"
        />
        <Dialog.Content className="overflow-auto flex-col items-center data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-colorGreyScaleGrey10 p-[25px] z-50 overflow-y-scroll scrollbar box-border">
          <Dialog.Title className=" m-0 text-[17px] font-medium mb-8">Criar anuncio</Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            Informações do veículo
          </Dialog.Description>
          <form onSubmit={handleSubmit(submit)}>
            <fieldset className="fieldset-default">
              <label className="label-default" htmlFor="marca">
                Marca
              </label>
              <select
                className="mt-2 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none"
                id="marca"
                value={brandSelected}
                {...register("brand")}
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
                onInput={(event) => modelSelect(event)}
                {...register("model")}
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
                  placeholder="Digite o ano"
                  className="input-normal w-full"
                  id="ano"
                  disabled={!brandSelected}
                  value={modelSelected?.year}
                  {...register("year")}
                />
               
              </fieldset>
              <fieldset className="fieldset-default">
                <label className="label-default" htmlFor="combustivel">
                  Combustivel
                </label>
                <input
                  placeholder="Selecione o Combustivel"
                  className="input-low w-full"
                  id="combustivel"
                  value={modelSelected?.fuel && getFuelLabel(modelSelected.fuel)}
                  {...register("typeCar", { required: true })}
                />
              </fieldset>
            </div>
            <div className="w-full flex gap-5 ">
              <fieldset className="fieldset-default">
                <label className="label-default " htmlFor="quilometragem">
                  Quilometragem
                </label>
                <input
                  placeholder="Digite a quilometragem"
                  className="input-normal w-full"
                  id="quilometragem"
                  {...register("mileage")}
                />
              </fieldset>
              <fieldset className="fieldset-default">
                <label className=" label-default" htmlFor="cor">
                  Cor
                </label>
                <select
                  className="focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none scrollbar"
                  id="cor"
                  disabled={!brandSelected}
                  onInput={(event) => modelSelect(event)}
                  {...register("color")}
                >
                  <option value="">Selecione</option>

                  {colorDefault.map((cor, index) => (
                    <option key={index} value={cor}>
                      {cor}
                    </option>
                  ))}
                </select>
                {errors.color && (
                <span className={"text-colorFeedbackAlert1 text-sm"}>
                  {errors.color.message}
                </span>
              )}
              </fieldset>
            </div>
            <div className="w-full flex gap-5">
              <fieldset className="fieldset-default">
                <label className="  label-default" htmlFor="tabela fipe">
                  Preço tabela FIPE
                </label>
                <input
                  placeholder="Digite o valor da fipe"
                  className="input-normal w-full"
                  id="tabela fipe"
                  value={
                    modelSelected?.value &&
                    modelSelected?.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  }
                  {...register("fipePrice")}
                />
              </fieldset>
              <fieldset className="fieldset-default">
                <label className=" label-default" htmlFor="preço">
                  Preço
                </label>
                <input
                  placeholder="Digite o valor"
                  className="input-low w-full input-type-number "
                  id="preço"
                  type="number"
                  {...register("price")}
                />
              </fieldset>
            </div>
            <fieldset className="fieldset-default">
              <label className=" label-default" htmlFor="descrição">
                Descrição
              </label>
              <textarea
                placeholder="Escreva a descrição do veiculo"
                className=" resize-none focus: inline-flex mt-2 p-5 w-full h-20 flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none "
                id="descrição"
                {...register("description")}
              />
            </fieldset>
            <fieldset className="fieldset-default">
              <label className=" label-default" htmlFor="imagem capa">
                Imagem da capa
              </label>
              <input
                placeholder="Carregar imagem"
                className="focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none "
                id="imagem capa"
                type="url"
                {...register("imageCover")}
              />
            </fieldset>
            <fieldset className="fieldset-default">
              <label className="label-default" htmlFor="imagem 1">
                1° Imagem da galeria
              </label>
              <input
                placeholder="Carregar imagem"
                className="focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none"
                id="imagem 1"
                type="url"
                {...register(`images.${0}.urlImage`)}
              />
            </fieldset>
            <fieldset className="fieldset-default">
              <label className="label-default" htmlFor="imagem 2">
                2° imagem da galeria
              </label>
              <input
                placeholder="Carregar imagem"
                className="focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none "
                id="imagem 2"
                {...register(`images.${1}.urlImage`)}
                type="url"
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
                  <button onClick={handleCloseModal} className="button-cancel" type="button">
                    Cancelar
                  </button>
                </Dialog.Close>
                <button
                  type="submit"
                  className="button-default font-normal text-sm focus:outline-none bg-colorBrandBrand3 text-colorColorsFixedWhiteFixed ml-4 px-7"
                >
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
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
