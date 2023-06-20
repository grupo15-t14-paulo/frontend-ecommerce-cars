import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { tUpdateUserWithoutAddress } from "../../providers/AuthProvider/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserWithoutAddress } from "../../providers/AuthProvider/schemas";
import { MaskedInput } from "../MaskedInput";
import { useEffect } from "react";

export const EditProfileModal = () => {
  const { modalIsOpen, setModalIsOpen, setModalType, user } = useAuth();

  const { register, handleSubmit, setValue } =
    useForm<tUpdateUserWithoutAddress>({
      resolver: zodResolver(updateUserWithoutAddress),
    });

  const submit: SubmitHandler<tUpdateUserWithoutAddress> = async (
    data: tUpdateUserWithoutAddress
  ) => {
    console.log(data);
  };

  useEffect(() => {
    setValue("name", user?.name);
    setValue("email", user?.email);
    setValue("cpf", user?.cpf);
    setValue("tel", user?.tel);
    setValue("dateBirth", user?.dateBirth);
    setValue("description", user?.description);
  });

  return (
    <Dialog.Root open={modalIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={() => {
            setModalIsOpen(false);
            setModalType("");
          }}
          className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0"
        />
        <Dialog.Content className="overflow-auto flex-col items-center data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-colorGreyScaleGrey10 p-[25px] z-50 overflow-y-scroll scrollbar box-border">
          <Dialog.Title className=" m-0 text-[17px] font-medium mb-8">
            Editar Perfil
          </Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            Informações pessoais
          </Dialog.Description>
          <form
            onSubmit={handleSubmit(submit)}
            className={"flex flex-col gap-6"}
          >
            <Input
              type="text"
              label="Nome"
              placeholder="Ex: Samuel Leão"
              register={register("name")}
              isRequired={false}
            />

            <Input
              type="email"
              label="Email"
              placeholder="Ex: samuel@kenzie.com.br"
              register={register("email")}
              isRequired={false}
            />

            <MaskedInput
              label="CPF"
              placeholder="000.000.000-00"
              register={register("cpf")}
              mask="999.999.999-99"
            />

            <MaskedInput
              label="Celular"
              placeholder="(DDD) 90000-0000"
              register={register("tel")}
              mask="(99) 99999-9999"
            />

            <MaskedInput
              label="Data de nascimento"
              placeholder="00/00/00"
              register={register("dateBirth")}
              mask="99/99/9999"
            />

            <Input
              type="text"
              label="Descrição"
              placeholder="Digitar descrição"
              register={register("description")}
              isRequired={false}
            />

            <div className="mt-[25px] flex justify-between">
              <Dialog.Close asChild>
                <button
                  onClick={() => {
                    setModalIsOpen(false);
                    setModalType("");
                  }}
                  className="flex justify-center items-center w-[30%] h-12 px-1 rounded border-none text-[13px] font-semibold text-colorGreyScaleGrey2 bg-colorGreyScaleGrey6 hover:bg-colorGreyScaleGrey5"
                  type="button"
                >
                  Cancelar
                </button>
              </Dialog.Close>

              <Dialog.Close asChild>
                <button className="flex justify-center items-center w-[30%] h-12 px-1 rounded border-none text-[13px] font-semibold text-colorFeedbackAlert1 bg-colorFeedbackAlert3 hover:bg-colorFeedbackAlert2">
                  Excluir perfil
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
                  setModalIsOpen(false);
                  setModalType("");
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
