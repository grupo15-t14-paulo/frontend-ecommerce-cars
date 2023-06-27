import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { tUpdateAddress } from "../../providers/AuthProvider/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateAddressSchema } from "../../providers/AuthProvider/schemas";
import { useEffect } from "react";
import InputMask from "react-input-mask";

export const EditAddressModal = () => {
  const { modalIsOpen, user, handleCloseModal, updateUserAddress } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<tUpdateAddress>({
    resolver: zodResolver(updateAddressSchema),
  });

  const submit: SubmitHandler<tUpdateAddress> = async (
    data: tUpdateAddress
  ) => {
    console.log(data);
    updateUserAddress(data);

    handleCloseModal();
  };

  const checkCEP = (e: { target: HTMLInputElement }) => {
    const cep = e.target.value.replace(/\D/g, "");

    if (cep != "") {
      try {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((res) => res.json())
          .then((data) => {
            setValue("state", data.uf);
            setValue("city", data.localidade);
            setValue("street", data.logradouro);
            setFocus("number");
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setValue("cep", user?.address.cep);
    setValue("state", user?.address.state);
    setValue("city", user?.address.city);
    setValue("street", user?.address.street);
    setValue("number", user?.address.number);
    setValue("complement", user?.address.complement);
  }, []);

  return (
    <Dialog.Root open={modalIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={() => {
            handleCloseModal();
          }}
          className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0"
        />
        <Dialog.Content className="overflow-auto flex-col items-center data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-colorGreyScaleGrey10 p-[25px] z-50 overflow-y-scroll scrollbar box-border">
          <Dialog.Title className=" m-0 text-[17px] font-medium mb-8">
            Editar endereço
          </Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            Informações de endereço
          </Dialog.Description>
          <form
            onSubmit={handleSubmit(submit)}
            className={"flex flex-col gap-6"}
          >
            <div className={"flex flex-col gap-2"}>
              <label htmlFor={"CEP"} className={"text-sm"}>
                CEP
              </label>

              <InputMask
                id="CEP"
                mask="99999-999"
                {...register("cep")}
                onBlur={checkCEP}
                placeholder="00000-000"
                className={
                  "h-12 rounded border-2 border-colorGreyScaleGrey7 focus:outline-none focus:border-colorBrandBrand2 invalid:border-colorFeedbackAlert1 px-4"
                }
              />
            </div>
            {errors.cep && (
              <span className={"text-colorFeedbackAlert1 text-sm"}>
                {errors.cep.message}
              </span>
            )}

            <div className={"flex justify-between"}>
              <div className={"w-[48%]"}>
                <Input
                  type="text"
                  label="Estado"
                  placeholder="Digitar Estado"
                  register={register("state")}
                />
                {errors.state && (
                  <span className={"text-colorFeedbackAlert1 text-sm"}>
                    {errors.state.message}
                  </span>
                )}
              </div>

              <div className={"w-[48%]"}>
                <Input
                  type="text"
                  label="Cidade"
                  placeholder="Digitar cidade"
                  register={register("city")}
                />
                {errors.city && (
                  <span className={"text-colorFeedbackAlert1 text-sm"}>
                    {errors.city.message}
                  </span>
                )}
              </div>
            </div>

            <Input
              type="text"
              label="Rua"
              placeholder="Digitar rua"
              register={register("street")}
            />
            {errors.street && (
              <span className={"text-colorFeedbackAlert1 text-sm"}>
                {errors.street.message}
              </span>
            )}

            <div className={"flex justify-between"}>
              <div className={"w-[48%]"}>
                <Input
                  type="text"
                  label="Número"
                  placeholder="Digitar número"
                  register={register("number")}
                />
                {errors.number && (
                  <span className={"text-colorFeedbackAlert1 text-sm"}>
                    {errors.number.message}
                  </span>
                )}
              </div>

              <div className={"w-[48%]"}>
                <Input
                  type="text"
                  label="Complemento"
                  placeholder="Ex: apart 307"
                  register={register("complement")}
                  isRequired={false}
                />
              </div>
            </div>

            <div className="mt-[25px] flex justify-end gap-2">
              <Dialog.Close asChild>
                <button
                  onClick={() => {
                    handleCloseModal();
                  }}
                  className="flex justify-center items-center w-[30%] h-12 px-1 rounded border-none text-base font-semibold text-colorGreyScaleGrey2 bg-colorGreyScaleGrey6 hover:bg-colorGreyScaleGrey5"
                  type="button"
                >
                  Cancelar
                </button>
              </Dialog.Close>

              <button
                type="submit"
                className="flex justify-center items-center w-[190px] h-12 px-1 rounded border-none text-base font-semibold text-colorColorsFixedWhiteFixed bg-colorBrandBrand3 hover:bg-colorBrandBrand1"
              >
                Salvar alterações
              </button>
            </div>
            <Dialog.Close asChild>
              <button
                onClick={() => {
                  handleCloseModal();
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
