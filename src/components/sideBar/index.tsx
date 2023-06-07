export const SideBar = () => {
  return (
    <div className="hidden mb-0 lg:block lg:w-1/4 ">
      <div>
        <h2 className="text-black text-2xl font-semibold">Marca</h2>
        <ul>
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
        <h2 className="text-black">Modelo</h2>
        <ul>
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
        <ul>
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
        <ul>
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
        <ul>
          <li className="li-sideBar">
            <span className="span-li-sidebar">Diesel</span>
            <span className="span-li-sidebar">Etanol</span>
            <span className="span-li-sidebar">Gasolina</span>
            <span className="span-li-sidebar">Flex</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Km</h2>
        <div>
          <input
            className="bg-colorGreyScaleGrey5 placeholder:text-colorGreyScaleGrey3"
            type="text"
            placeholder="Mínima"
          />
          <input
            className="bg-colorGreyScaleGrey5 placeholder:text-colorGreyScaleGrey3"
            type="text"
            placeholder="Máxima"
          />
        </div>
      </div>
      <div>
        <h2 className="text-black text-2xl font-semibold">Preço</h2>
        <div>
          <input
            className="bg-colorGreyScaleGrey5 placeholder:text-colorGreyScaleGrey3"
            type="text"
            placeholder="Mínimo"
          />
          <input
            className="bg-colorGreyScaleGrey5 placeholder:text-colorGreyScaleGrey3"
            type="text"
            placeholder="Máximo"
          />
        </div>
      </div>
    </div>
  );
};
