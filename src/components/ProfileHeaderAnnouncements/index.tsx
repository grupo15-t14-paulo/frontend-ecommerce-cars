import { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { api } from "../../services/index";
import { ICarUserReturn, IUser } from "../../components/Card/interface";
import ImgDefault from "../../assets/Cars/default.png";
import { useParams } from "react-router-dom";
import { profileName } from "../../hooks/index";
import { Footer } from "../../components/footer";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


export const ProfileHeaderAnnouncements = ({user}:any) => {
  console.log(user)
    
  return (
    <>
      <div className="w-full h-250 items-center md:h-200 bg-colorBrandBrand1 bg-contain bg-no-repeat bg-center relative box-border">
        <div className="inset-0 flex items-center relative top-20 justify-center">
          <div className="mb-10 max-w-[1240px] w-full ml-3 mr-3 flex-col p-5 min-h-217 bg-colorGreyScaleGrey10 md:w-3/1 rounded shadow-sm">
            <div className="name-profile1 bg-colorBrandBrand1 rounded-full">
              {profileName(`${user?.name}`)}
            </div>
            <div className={"w-full flex gap-5 items-center"}>
              <h1 className="mt-5 mb-5 text-2x1">{user?.name}</h1>
              {user?.isSeller && <span className={"km-year h-max"}>Anunciante</span>}
            </div>
            <h2 className="text-1x5">{user?.description}</h2>
          </div>
        </div>
      </div>

    </>
  );
};
