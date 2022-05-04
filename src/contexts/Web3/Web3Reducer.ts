import { IWeb3 } from "./interfaces";

type tAction =
  | { type: "provider"; payload: any }
  | { type: "account"; payload: any }
  | { type: "chainId"; payload: any };

export const Web3Reducer = (state: IWeb3, action: tAction) => {
  switch (action.type) {
    case "provider":
      return {
        ...state,
        wallet: action.payload.web3,
        provider: action.payload.provider,
        providerString: action.payload.providerString,
      };
    case "account":
      return {
        ...state,
        account: action.payload,
      };

    case "chainId":
      return {
        ...state,
        chainId: action.payload,
      };

    default:
      return state;
  }
};
