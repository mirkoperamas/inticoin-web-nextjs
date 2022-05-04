import { createContext } from "react";
import { IWeb3 } from "./interfaces";

type Web3ContextProps = {
  web3: any;
  handleWeb3: any;
  handleAccount: any;
  handleChainId: any;
};

const INIT = {
  web3: null,
  handleWeb3: null,
  handleAccount: null,
  handleChainId: null,
};

export const Web3Context = createContext<Web3ContextProps>(INIT);
