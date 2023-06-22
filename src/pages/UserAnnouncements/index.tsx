import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { ProfileHeaderAnnouncements } from "../../components/ProfileHeaderAnnouncements";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/footer";
import { api } from "../../services/index";
import { SideBar } from "../../components/sideBar";
import { carros } from "../../utility";
import { useParams } from "react-router-dom";
import { SideBarMobile } from "../../components/sideBar/sideBarMobile";
import { AuthContext } from "../../providers/AuthProvider";
import { ICarUserReturn } from "../../components/Card/interface";
import { useAds } from "../../hooks/useAds";
import { tReturnUser } from "../../providers/AuthProvider/interfaces";



export const UserAnnouncements = () => {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<ICarUserReturn>();
  const { id, carId } = useParams();
  const [user, setUser] = useState<tReturnUser>()
  const { allCars } = useAds();
 
  

  const OpenMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const getCar = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
      
    };
    getCar();
  }, []);

  console.log(user?.announcement)

return (
  <>
    <div className={"h-full min-w-screen box-border bg-colorGreyScaleGrey9"}>
      <Navbar />
      <ProfileHeaderAnnouncements user={user}/>

      <main
        className={`mt-[150px] items-center min-h-full container flex-col gap-4 relative box-border flex `}
      >
        <section className={"  w-full h-full lg:w-full lg: box-border pb-5"}>
          <ul
            className={
              "flex h-[510px] lg:flex-wrap w-full gap-10 overflow-auto lg:justify-center lg:py-0  scrollbar"
            }
          >
            {user?.announcement.map((car:any) => (
                      <Card
                        imgCover={car?.imageCover}
                        id={car?.id}
                        description={car?.description}
                        img={car?.images}
                        km={car?.mileage}
                        title={car?.brand}
                        user={user}
                        value={car?.price}
                        year={car?.year}
                        key={car?.id}
                        createdAt={car?.createdAt}
                        fipePrice={car?.fipePrice}
                      />
                    ))};
          </ul>
        </section>

        <div
          className={"flex mb-10 sm:right-28 md:right-1/3 gap-4  font-bold"}
        >
          <span className={"text-2xl text-colorGreyScaleGrey3"}>
            1<span className={"text-colorGreyScaleGrey4"}> de 2</span>
          </span>
          <button
            className={
              "flex items-center text-2xl text-colorBrandBrand1 font-bold"
            }
          >
            Seguinte &gt;
          </button>
        </div>
      </main>
    </div>
    {open && <SideBarMobile setOpen={setOpen} />}
    <Footer />
  </>
);
};