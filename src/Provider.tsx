import { useContext, useEffect } from "react";
import { LangContext } from "./contexts/Localization/LangContext";
import { IntlProvider } from "react-intl";
import Preloader from "./components/Preloader/Preloader";
import { ToastContainer } from "react-toastify";
import { flatten } from "flat";
import { PreloaderContext } from "./contexts/Preloader/PreloaderContext";

export const Provider = ({ children }: any) => {
	const { lang, handleLang } = useContext(LangContext);
	const { preloader } = useContext(PreloaderContext);

	useEffect(() => {
		handleLang(localStorage.getItem("language"));
	}, []);

	return (
		<IntlProvider
			locale={lang.locale}
			messages={flatten(lang.message)}
			timeZone="America/Lima">
			{children}
			<ToastContainer />
			{preloader.preloader && <Preloader />}
		</IntlProvider>
	);
};
