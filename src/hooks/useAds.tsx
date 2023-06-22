import { useContext } from "react";
import { AdsContext } from "../providers/AdsProvider/ads.provider";

export const useAds = () => {
  const adsContext = useContext(AdsContext);

  return adsContext;
};
