import { createContext } from "react";
import { IPreloader } from "./interfaces";

type PreloaderContextProps = {
    preloader: IPreloader;
    handlePreloader: (value: boolean) => void;
};
export const PreloaderContext = createContext<PreloaderContextProps>(
    {} as PreloaderContextProps
);