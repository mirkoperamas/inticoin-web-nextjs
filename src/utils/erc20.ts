import ERC20ABI from "../config/abi/erc20.json";
import { TOKENS } from "../config/index";
import { ITokens } from "../config/constants/tokens";
import { amountMax } from "./bigNumber";

export const approve = async (
  web3: any,
  account: string,
  token: string,
  spender: string
) => {
  try {
    const BN = amountMax;
    const contract = new web3.eth.Contract(
      ERC20ABI,
      TOKENS[token as keyof ITokens].address,
      {
        from: account,
      }
    );
    await contract?.methods.approve(spender, BN).send();
  } catch (error) {
    console.log(error);
  }
};

export const allowance = async (
  web3: any,
  account: string,
  token: string,
  spender: string
) => {
  try {
    if (
      web3 !== undefined &&
      account !== undefined &&
      TOKENS[token as keyof ITokens].type === "token"
    ) {
      const contract = new web3()?.eth.Contract(
        ERC20ABI,
        TOKENS[token as keyof ITokens].address
      );
      const response = await contract?.methods
        .allowance(account, spender)
        .call();
      return response;
    }
    return 1;
  } catch (error) {
    console.log(error);
  }
};
