import { LangProvider } from "./contexts/Localization/LangProvider";
import { PreloaderProvider } from "./contexts/Preloader/PreloaderProvider";

export const Updaters = ({ children }: any) => {
    return (
        <LangProvider>
            <PreloaderProvider>{children}</PreloaderProvider>
        </LangProvider>
    );
};