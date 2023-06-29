import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useAds } from "../../hooks/useAds";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services";
import { updateCarSchema } from "../../providers/AdsProvider/ads.schemas";
import {
  modelsRequest,
  tUpdateCar,
} from "../../providers/AdsProvider/interfaces";
import { colorDefault } from "../../utility";
import { Input } from "../Input";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";

export const EditAdsModal = () => {
  const {
    modalIsOpen,
    handleCloseModal,
    imageCount,
    setImageCount,
    car,
    setCar,
    modalAdsType,
    setModalAdsType,
  } = useAds();

  const { setUser } = useAuth();

  const [modelSelected, setModelSelected] = useState<modelsRequest>();

  const fuelTypes = [
    "Diesel",
    "Etanol",
    "Gasolina",
    "Híbrido",
    "Flex",
    "Elétrico",
  ];

  const { register, handleSubmit, setValue } = useForm<tUpdateCar>({
    resolver: zodResolver(updateCarSchema),
  });

  useEffect(() => {
    if (car) {
      setValue("brand", car.brand);
      setValue("model", car.model);
      setValue("color", car.color);
      setValue("description", car.description);
      setValue("imageCover", car.imageCover);
      setValue("mileage", car.mileage);
      setValue("price", car.price);
      setValue("fipePrice", car.fipePrice);
      setValue("typeCar", car.typeCar);
      setValue("year", car.year);

      for (let i = 0; i < car.images.length; i++) {
        setValue(`images.${i}.urlImage`, car.images[i].urlImage);
      }
    }
  }, []);

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

  const submit: SubmitHandler<tUpdateCar> = async (data: tUpdateCar) => {
    data.price = Number(data.price);
    data.mileage = Number(data.mileage);
    data.fipePrice = Number(data.fipePrice);

    if (!data.description) {
      delete data.description;
    }

    try {
      if (car) {
        const response = await api.patch(`cars/${car.id}`, data);

        setUser((previousUser) => {
          if (previousUser && previousUser.announcement) {
            previousUser.announcement = previousUser.announcement.map((car) => {
              if (car.id === response.data.id) return response.data;

              return car;
            });
          }

          return previousUser;
        });

        toast.success("Anúncio atualizado com sucesso!");

        handleCloseModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddImage = () => {
    setImageCount((prevCount) => prevCount + 1);
  };

  return (
    <Dialog.Root open={modalIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={handleCloseModal}
          className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0"
        />
        <Dialog.Content className="overflow-auto flex-col items-center data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-colorGreyScaleGrey10 p-[25px] z-50 overflow-y-scroll scrollbar box-border">
          <Dialog.Title className=" m-0 text-[17px] font-medium mb-8">
            Editar anúncio
          </Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            Informações do veículo
          </Dialog.Description>
          <form onSubmit={handleSubmit(submit)}>
            <fieldset className="fieldset-default">
              <Input
                type="text"
                label="Marca"
                register={register("brand")}
                isDisabled={true}
              />
            </fieldset>

            <fieldset className="fieldset-default">
              <Input
                type="text"
                label="Modelo"
                register={register("model")}
                isDisabled={true}
              />
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
                  value={modelSelected?.year}
                  {...register("year")}
                />
              </fieldset>

              <fieldset className="fieldset-default">
                <label className="label-default" htmlFor="combustivel">
                  Combustivel
                </label>
                <select
                  id="combustivel"
                  className="focus:inline-flex mt-2 h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none border-colorGreyScaleGrey1 border outline-none scrollbar"
                  {...register("typeCar")}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {fuelTypes.map((fuel) => (
                    <option key={fuel} value={fuel}>
                      {fuel}
                    </option>
                  ))}
                </select>
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
                  {...register("color")}
                >
                  <option value="">Selecione</option>

                  {colorDefault.map((cor, index) => (
                    <option key={index} value={cor}>
                      {cor}
                    </option>
                  ))}
                </select>
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
                  className="input-low w-full input-type-number"
                  type="number"
                  id="preço"
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
            <div className="mt-[25px] flex justify-between">
              <Dialog.Close asChild>
                <button
                  onClick={() => {
                    handleCloseModal();
                    setCar(null);
                    setModalAdsType("");
                  }}
                  className="flex justify-center items-center w-[30%] h-12 px-1 rounded border-none text-[13px] font-semibold text-colorGreyScaleGrey2 bg-colorGreyScaleGrey6 hover:bg-colorGreyScaleGrey5"
                  type="button"
                >
                  Cancelar
                </button>
              </Dialog.Close>

              <Dialog.Close asChild>
                <button
                  onClick={() => setModalAdsType("exclude-ads")}
                  className="flex justify-center items-center w-[30%] h-12 px-1 rounded border-none text-[13px] font-semibold text-colorFeedbackAlert1 bg-colorFeedbackAlert3 hover:bg-colorFeedbackAlert2"
                >
                  Excluir anúncio
                </button>
              </Dialog.Close>

              <button
                type="submit"
                className="flex justify-center items-center w-1/3 h-12 px-1 rounded border-none text-[13px] font-semibold text-colorColorsFixedWhiteFixed bg-colorBrandBrand3 hover:bg-colorBrandBrand1"
              >
                Salvar alterações
              </button>
            </div>
            <Dialog.Close asChild>
              <button
                onClick={() => {
                  handleCloseModal();

                  if (modalAdsType === "edit-ads") {
                    setCar(null);
                    setModalAdsType("");
                  }
                }}
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
