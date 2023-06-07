interface PropsBarMobile {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideBarMobile = ({setOpen}:PropsBarMobile) => {
    return (
      <div className="flex justify-center items-start w-screen min-h-screen shadow absolute top-20 mb-80 inset-0">
          <div className="flex flex-col bg-colorColorsFixedWhiteFixed shadow min-h-full min-w-full p-10">
            <div className="flex justify-between ">
              <span className="text-black font-semibold">Filtro</span>
              <button onClick={()=>setOpen(false)} className="text-colorGreyScaleGrey4 cursor-pointer mb-4">X</button>
            </div>
            <div>
              <h2 className="text-black text-2xl font-semibold">Marca</h2>
                <ul className="mb-10">
                  <li className="li-sideBar">
                    <span className="span-li-sidebar">General Motors</span>
                    <span className="span-li-sidebar">Fiat</span>
                    <span className="span-li-sidebar">Ford</span>
                    <span className="span-li-sidebar">Honda</span>
                    <span className="span-li-sidebar">spanorsche</span>
                    <span className="span-li-sidebar">Volswagen</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-black text-2xl font-semibold">Modelo</h2>
                <ul className="mb-10">
                  <li className="li-sideBar">
                    <span className="span-li-sidebar">Civic</span>
                    <span className="span-li-sidebar">Corolla</span>
                    <span className="span-li-sidebar">Cruze</span>
                    <span className="span-li-sidebar">Fit</span>
                    <span className="span-li-sidebar">Gol</span>
                    <span className="span-li-sidebar">Ka</span>
                    <span className="span-li-sidebar">Onix</span>
                    <span className="span-li-sidebar">Porsche 718</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-black text-2xl font-semibold">Cor</h2>
                <ul className="mb-10">
                  <li className="li-sideBar">
                    <span className="span-li-sidebar">Azul</span>
                    <span className="span-li-sidebar">Branca</span>
                    <span className="span-li-sidebar">Cinza</span>
                    <span className="span-li-sidebar">Prata</span>
                    <span className="span-li-sidebar">Preta</span>
                    <span className="span-li-sidebar">Verde</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-black text-2xl font-semibold">Ano</h2>
                <ul className="mb-10">
                  <li className="li-sideBar">
                    <span className="span-li-sidebar">2022</span>
                    <span className="span-li-sidebar">2021</span>
                    <span className="span-li-sidebar">2018</span>
                    <span className="span-li-sidebar">2015</span>
                    <span className="span-li-sidebar">2013</span>
                    <span className="span-li-sidebar">2012</span>
                    <span className="span-li-sidebar">2010</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-black text-2xl font-semibold">Combustível</h2>
                <ul className="mb-10">
                  <li className="li-sideBar">
                    <span className="span-li-sidebar">Diesel</span>
                    <span className="span-li-sidebar">Etanol</span>
                    <span className="span-li-sidebar">Gasolina</span>
                    <span className="span-li-sidebar">Flex</span>
                  </li>
                </ul>
              </div>
              <div className="mb-10">
                <h2 className="text-black text-2xl font-semibold mb-5">Km</h2>
                <div className="m-2 flex gap-5 ">
                  <input
                    className="input-sidebar placeholder:text-colorGreyScaleGrey3"
                    type="text"
                    placeholder="Mínima"
                  />
                  <input
                    className="input-sidebar placeholder:text-colorGreyScaleGrey3"
                    type="text"
                    placeholder="Máxima"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-black text-2xl font-semibold mb-5">Preço</h2>
                <div className="m-2 flex gap-5 ">
                  <input
                    className="input-sidebar placeholder:text-colorGreyScaleGrey3"
                    type="text"
                    placeholder="Mínimo"
                  />
                  <input
                    className="input-sidebar placeholder:text-colorGreyScaleGrey3"
                    type="text"
                    placeholder="Máximo"
                  />
                </div>
              </div>
              <button className="flex justify-center items-center m-5 bg-colorBrandBrand2 text-colorColorsFixedWhiteFixed py-3 rounded">
                Ver anúncios 
              </button>
          </div>
      </div>
    );
  };
  
  