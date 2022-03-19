import { useEffect, useReducer } from "react";
import { IProps } from "./interfaces";
import { LangContext } from "./LangContext";
import { LangReducer } from "./LangReducer";
import { ENGLISH } from "./locales/en-Us";
import { SPANISH } from "./locales/es-Es";

const INIT = () => {
	return {
		locale: "en-Us",
		message: ENGLISH,
	};
};

export const LangProvider = ({ children }: IProps) => {
	console.log();
	const [lang, dispatch] = useReducer(LangReducer, INIT());

	const config = (action: string) => {
		switch (action) {
			case "es-Es":
				return { locale: "es-Es", message: SPANISH };

			default:
				return { locale: "en-Us", message: ENGLISH };
		}
	};

	const handleLang = (locale: string): void => {
		dispatch({
			type: "change",
			payload: config(locale),
		});
	};

	useEffect(() => {
		localStorage.setItem("language", lang.locale);
	}, [lang]);

	return (
		<LangContext.Provider value={{ lang, handleLang }}>
			{children}
		</LangContext.Provider>
	);
};
