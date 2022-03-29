import { useContext } from "react";
import Preloader from "./components/Preloader/Preloader";
import { PreloaderContext } from "./contexts/Preloader/PreloaderContext";

export const Provider = ({ children }: any) => {
  const { preloader } = useContext(PreloaderContext);

  return (
    <>
      {children}
      {preloader.preloader && <Preloader />}
    </>
  );
};
