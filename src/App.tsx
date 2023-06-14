import { AdsProvider } from "./providers/ads.provider";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <>
      <AdsProvider>
        <RoutesMain />
      </AdsProvider>
    </>
  );
};
