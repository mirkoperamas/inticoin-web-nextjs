import { PreloaderProvider } from "./contexts/Preloader/PreloaderProvider";

export const Updaters = ({ children }: any) => {
  return <PreloaderProvider>{children}</PreloaderProvider>;
};
