import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useAds } from '../../hooks/useAds';
import { IComments } from '../Card/interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { api } from '../../services';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

interface ICommentInfo {
    commentInfo: IComments
}

const EditCommentModal = ({commentInfo}:ICommentInfo) => {
    const {modalIsOpen,handleCloseModal} = useAds();
    const { setLoading } = useContext(AuthContext);

    const { register, handleSubmit } = useForm<IComments>();

    const submit:SubmitHandler<IComments> = async (data:IComments) => {
        try {
            setLoading(true)
            await api.patch(`comments/${commentInfo.id}`,data)
            toast.success("Comentario editado com sucesso")
            handleCloseModal()
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    return (
        <Dialog.Root open={modalIsOpen}>
            <Dialog.Portal>
            <Dialog.Overlay onClick={handleCloseModal} className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <form className="mt-5" onSubmit={handleSubmit(submit)}>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                    <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="coment">
                        Comentario
                    </label>
                    <input
                        className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                        id="coment"
                        defaultValue={commentInfo.comment}
                        {...register("comment")}

                    />
                    </fieldset>
                    <div className="mt-[25px] flex justify-end">
                    <Dialog.Close asChild>
                        <button type='submit' className="flex justify-center items-center w-1/3 h-12 px-1 rounded border-none text-[13px] font-semibold text-colorColorsFixedWhiteFixed bg-colorBrandBrand3 hover:bg-colorBrandBrand1">
                        Editar comentario
                        </button>
                    </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                    <button
                        onClick={()=> handleCloseModal()}
                        className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close"
                    >
                        <Cross2Icon />
                    </button>
                    </Dialog.Close>
                </form>
            </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
  
};

export default EditCommentModal;