import LogoImg from "./Logo.png";

export const Logo = () => {
  return (
    <div className={"flex"}>
      <img src={LogoImg} alt="logo" />
    </div>
  );
};
