import { CONTRACTS } from "../config/index";
import { TOKENS } from "../config/index";
import { ITokens } from "../config/constants/tokens";
import { ROUTER_METHODS, SWAPABI } from "../config";
import { amountBig } from "./bigNumber";
import { ISwapValues } from "../views/Exchange/components/Swap/interfaces";

const newContract = (web3: any, account: string) =>
  new web3.eth.Contract(SWAPABI, CONTRACTS.swap, {
    from: account,
  });

export const amountMin = (
  amount: string | number,
  slipage: number,
  type = true
) => {
  amount = typeof amount === "string" ? parseFloat(amount) : amount;
  const response = type
    ? amount - amount * (slipage / 1000)
    : amount + amount * (slipage / 1000);
  console.log(response);
  return response.toString();
};

const getAddressCoin = (array: string[]) => {
  const newArray: any = [];
  for (let i = 0; i < array.length; i++) {
    (i !== 0 || i !== array.length - 1) &&
      TOKENS[array[i] as keyof ITokens].type !== "crypto" &&
      newArray.push(TOKENS[array[i] as keyof ITokens].address);
  }
  return newArray;
};

export const swapExactTokensForTokens = async (
  contract: any,
  account: string,
  BN: string,
  BNM: string,
  path: any
) => {
  try {
    const response = await contract.methods[
      ROUTER_METHODS.swapExactTokensForTokens
    ](path, BN, BNM, account).send();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const swapExactNativeCurrencyForTokens = async (
  contract: any,
  account: string,
  BN: string,
  BNM: string,
  path: any
) => {
  try {
    const response = await contract.methods[
      ROUTER_METHODS.swapExactNativeCurrencyForTokens
    ](path, BNM, account).send({ value: BN });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const swapExactTokensForNativeCurrency = async (
  contract: any,
  account: string,
  BN: string,
  BNM: string,
  path: any
) => {
  try {
    const response = await contract.methods[
      ROUTER_METHODS.swapExactTokensForNativeCurrency
    ](path, BN, BNM, account).send();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const swapMethod = async (
  web3: any,
  route: any,
  values: ISwapValues,
  account: string,
  slipage: number
) => {
  const contract = newContract(web3, account);
  const BN = amountBig(
    values.token0,
    TOKENS[route[0] as keyof ITokens].decimals
  ).toString();
  const BNM = amountMin(
    amountBig(
      values.token1,
      TOKENS[route[route.length - 1] as keyof ITokens].decimals
    ),
    slipage
  );
  const path = getAddressCoin(route);
  if (
    TOKENS[route[0] as keyof ITokens].type === "crypto" &&
    TOKENS[route[route.length - 1] as keyof ITokens].type === "token"
  ) {
    const response = await swapExactNativeCurrencyForTokens(
      contract,
      account,
      BN,
      BNM,
      path
    );
    return response;
  } else if (
    TOKENS[route[0] as keyof ITokens].type === "token" &&
    TOKENS[route[route.length - 1] as keyof ITokens].type === "crypto"
  ) {
    const response = await swapExactTokensForNativeCurrency(
      contract,
      account,
      BN,
      BNM,
      path
    );
    return response;
  } else {
    const response = await swapExactTokensForTokens(
      contract,
      account,
      BN,
      BNM,
      path
    );
    return response;
  }
};
