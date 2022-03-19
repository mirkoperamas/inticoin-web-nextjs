import { ILang } from "./interfaces";

type tAction = { type: "change"; payload: any };

export const LangReducer = (state: ILang, action: tAction) => {
	switch (action.type) {
		case "change":
			return {
				locale: action.payload.locale,
				message: action.payload.message,
			};
		default:
			return state;
	}
};
