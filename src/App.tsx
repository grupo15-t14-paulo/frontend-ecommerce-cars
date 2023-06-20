import { AuthProvider } from "./providers/AuthProvider";
import { AdsProvider } from "./providers/AdsProvider/ads.provider";
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <AdsProvider>
          <RoutesMain />
        </AdsProvider>
      </AuthProvider>
      <ToastContainer
      position="bottom-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </>
  );
};
