import { useContext } from "react";
import { AdsContext } from "../providers/ads.provider";

export const useAds = () => {
  const adsContext = useContext(AdsContext);

  return adsContext;
};
