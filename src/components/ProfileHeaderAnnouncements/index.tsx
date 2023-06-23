import { profileName } from "../../hooks/index";

interface IPropUser {
  name: string | null | undefined;
  description: string | null | undefined;
  isSeller: boolean | null | undefined;
}

export const ProfileHeaderAnnouncements = ({ name, isSeller, description }: IPropUser) => {
  return (
    <>
      <div className="w-full h-250 items-center md:h-200 bg-colorBrandBrand1 bg-contain bg-no-repeat bg-center relative box-border">
        <div className="inset-0 flex items-center relative top-20 justify-center">
          <div className="mb-10 max-w-[1240px] w-full ml-3 mr-3 flex-col p-5 min-h-217 bg-colorGreyScaleGrey10 md:w-3/1 rounded shadow-sm">
            <div className="name-profile1 bg-colorBrandBrand1 rounded-full">
              {profileName(`${name}`)}
            </div>
            <div className={"w-full flex gap-5 items-center"}>
              <h1 className="mt-5 mb-5 text-2x1">{name}</h1>
              {isSeller && <span className={"km-year h-max"}>Anunciante</span>}
            </div>
            <h2 className="text-1x5">{description}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
