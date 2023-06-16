import { AuthProvider } from "./providers/AuthProvider";
import { AdsProvider } from "./providers/AdsProvider/ads.provider";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <AdsProvider>
          <RoutesMain />
        </AdsProvider>
      </AuthProvider>
    </>
  );
};
