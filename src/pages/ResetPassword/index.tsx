import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/footer"
import { SendEmailForm } from "../../components/sendEmailForm"

export const SendEmailResetPassword = () =>{
    return(
        <>
            <Navbar/>
            <main className={"h-full min-w-screen box-border"}>
                <div className={"flex justify-center items-center w-full min-h-[80vh] bg-colorGreyScaleGrey8"}>
                    <div className={"max-w-[343px] sm:max-w-[412px] w-full min-h-fit rounded px-7 lg:px-12 py-7 bg-colorGreyScaleGrey10"}> 
                        <h2 className={"text-2xl font-medium mb-8"}>Enviar email</h2>
                        <SendEmailForm/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

