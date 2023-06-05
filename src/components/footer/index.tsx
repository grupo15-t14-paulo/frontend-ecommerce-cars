export const Footer = () =>{
    return (
        <footer className="gap-80 h-32 bg-colorGreyScaleGrey0 py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 flex flex-col sm:flex-row items-center justify-between fixed bottom-0 left-0 w-full">
            <div className="text-2xl sm:text-3xl md:text-4xl">
                <span className="text-colorColorsFixedWhiteFixed">Motors</span>
                <span className="text-colorColorsFixedWhiteFixed ml-2">shop</span>
            </div>

            <p className="text-colorColorsFixedWhiteFixed text-sm sm:text-base my-2 sm:my-0">© 2022 -  Todos os direitos reservados.</p>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer text-white bg-colorGreyScaleGrey1 rounded-full p-2 w-8 h-8 sm:w-10 sm:h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </footer>
    )
}