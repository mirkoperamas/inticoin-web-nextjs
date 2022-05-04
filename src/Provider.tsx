import { useContext } from "react";
import Preloader from "./components/Preloader/Preloader";
import { AjustProvider } from "./contexts/Ajust/AjustProvider";
import { PreloaderContext } from "./contexts/Preloader/PreloaderContext";
import { Web3Provider } from "./contexts/Web3/Web3Provider";

declare global {
  interface Window {
    ethereum: any;
    swapExactTokensForTokens: any;
    swapExactNativeCurrencyForTokens: any;
    swapExactTokensForNativeCurrency: any;
  }
}

export const Provider = ({ children }: any) => {
  const { preloader } = useContext(PreloaderContext);

  return (
    <>
      <AjustProvider>
        <Web3Provider>
          {children}
          {preloader.preloader && <Preloader />}
        </Web3Provider>
      </AjustProvider>
    </>
  );
};
