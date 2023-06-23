import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useAuth } from "../../hooks/useAuth";

export const ExcludeProfileModal = () => {
  const { modalIsOpen, handleCloseModal, deleteUser } = useAuth();

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
          <Dialog.Title className=" m-0 text-[17px] font-medium mb-8">Excluir perfil</Dialog.Title>
          <h2 className="text-base font-medium">Tem certeza que deseja excluir seu perfil?</h2>
          <Dialog.Description className="mt-[10px] mb-5 text-[15px] text-colorGreyScaleGrey2 leading-normal">
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus
            dados de nossos servidores.
          </Dialog.Description>
          <form className={"flex flex-col gap-6"}>
            <div className="mt-[25px] flex justify-end gap-3">
              <Dialog.Close asChild>
                <button
                  onClick={() => {
                    handleCloseModal();
                  }}
                  className="flex justify-center items-center w-[30%] h-12 px-1 rounded border-none text-[13px] font-semibold text-colorGreyScaleGrey2 bg-colorGreyScaleGrey6 hover:bg-colorGreyScaleGrey5"
                  type="button"
                >
                  Cancelar
                </button>
              </Dialog.Close>

              <Dialog.Close asChild>
                <button
                  onClick={() => deleteUser()}
                  className="flex justify-center items-center max-w-fit h-12 px-3 rounded border-none text-[13px] font-semibold text-colorFeedbackAlert1 bg-colorFeedbackAlert3 hover:bg-colorFeedbackAlert2"
                >
                  Sim, excluir perfil
                </button>
              </Dialog.Close>
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
