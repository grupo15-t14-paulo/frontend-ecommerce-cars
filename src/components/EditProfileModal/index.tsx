import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { tUpdateUserWithoutAddress } from "../../providers/AuthProvider/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserWithoutAddress } from "../../providers/AuthProvider/schemas";

export const EditProfileModal = () => {
  const { modalIsOpen, setModalIsOpen } = useAuth();

  const { register, handleSubmit } = useForm<tUpdateUserWithoutAddress>({
    resolver: zodResolver(updateUserWithoutAddress),
  });

  const submit: SubmitHandler<tUpdateUserWithoutAddress> = async (
    data: tUpdateUserWithoutAddress
  ) => {
    console.log(data);
  };

  return (
    <Dialog.Root open={modalIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={() => setModalIsOpen(false)}
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
            />
            <div className="mt-[25px] flex justify-end">
              <div>
                <Dialog.Close asChild>
                  <button
                    onClick={() => setModalIsOpen(false)}
                    className="button-cancel"
                    type="button"
                  >
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
                onClick={() => setModalIsOpen(false)}
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
