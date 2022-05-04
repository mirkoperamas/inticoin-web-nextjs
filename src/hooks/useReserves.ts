import { useCallback, useContext, useState } from "react";
import { Web3Context } from "../contexts/Web3/Web3Context";
import { CONTRACTS, PAIRS } from "../config/index";
import { TOKENS } from "../config/index";
import { ITokens } from "../config/constants/tokens";
import FACTORYABI from "../config/abi/factory.json";
import PAIRABI from "../config/abi/pair.json";
import { IPAIRS } from "../config/constants/pair";

export const useReserves = () => {
  const [reserves, setReserves] = useState<any>([]);
  const { web3 } = useContext(Web3Context);

  const handleReserves = () => {
    setReserves([]);
    Object.keys(PAIRS).map((pair: string) => {
      PAIRS[pair as keyof IPAIRS].pair != "" &&
        getReserves(PAIRS[pair as keyof IPAIRS].pair)
          .then((resolve) => {
            setReserves((r: any) => [...r, { ...resolve, pair }]);
          })
          .catch((e) => console.log(e));
    });
  };

  const getPair = useCallback(
    async (token0: string, token1: string) => {
      const contract = new web3.network.eth.Contract(
        FACTORYABI,
        CONTRACTS.factory
      );
      return await contract.methods
        .getPair(
          TOKENS[token0 as keyof ITokens].address,
          TOKENS[token1 as keyof ITokens].address
        )
        .call();
    },
    [web3.network]
  );

  const getReserves = useCallback(
    async (address: string) => {
      const contract = new web3.network.eth.Contract(PAIRABI, address);
      return await contract.methods.getReserves().call();
    },
    [web3.network]
  );

  const getToken0 = useCallback(
    async (address: string) => {
      const contract = new web3.network.eth.Contract(PAIRABI, address);
      return await contract.methods.token0().call();
    },
    [web3.network]
  );

  return {
    reserves,
    getToken0,
    getPair,
    getReserves,
    handleReserves,
  };
};
