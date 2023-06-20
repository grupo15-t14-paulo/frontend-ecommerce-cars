import { useParams } from "react-router-dom";
import { ResetPasswordForm } from "../../components/resetPasswordForm"
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/Navbar";

export const ResetPassword = () =>{
    const { token } = useParams<{ token: string }>();
    return(
        <>
            <Navbar/>
            <main className={"h-full"}>
                <div className={"flex justify-center items-center w-full min-h-[80vh] bg-colorGreyScaleGrey8"}>
                    <div className={"max-w-[343px] sm:max-w-[412px] w-full min-h-fit rounded px-7 lg:px-12 py-7 bg-colorGreyScaleGrey10"}> 
                        <h2 className={"text-2xl font-medium mb-8"}>Resetar senha</h2>
                        <ResetPasswordForm token={token as string}/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}