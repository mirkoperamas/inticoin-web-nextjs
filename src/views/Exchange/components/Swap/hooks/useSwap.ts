import { useCallback, useContext, useEffect, useState } from "react";
import { Web3Context } from "../../../../../contexts/Web3/Web3Context";
import { getBalance } from "../../../../../utils/balance";
import { IID, IRowI } from "../Row/interfaces";
import { coins } from "../coinData";

const init = coins.USDC;

const initState = {
  priceXToken0: 0.0,
  priceXToken1: 0.0,
  priceImpact: 0.0,
  fee: 0,
};

export const useSwap = () => {
  const { web3 } = useContext(Web3Context);
  const [coinValue, setCoinValue] = useState<IID>(init);
  const [route, setRoute] = useState<any>(null);
  const [balance, setBalance] = useState(0.0);
  const [swapState, setSwapState] = useState(initState);

  const handleSwapChange = useCallback(
    (newValues: IID, selected: string): void => {
      selected != ""
        ? setCoinValue({
            ...coinValue,
            selected,
          })
        : setCoinValue(newValues);
    },
    [coinValue, setCoinValue]
  );

  const handleChange = useCallback(
    (coin: string, selected: string): void => {
      setCoinValue({
        ...coins[coin as keyof IRowI],
        selected,
      });
    },
    [setCoinValue]
  );

  const handleSwapState = useCallback(
    (data: any, reset = false) => {
      reset ? setSwapState(initState) : setSwapState(data);
    },
    [setSwapState]
  );

  useEffect(() => {
    web3.account != "" &&
      web3.wallet !== null &&
      getBalance(web3.network, web3.chainId, web3.account, coinValue.id).then(
        (resolve) => {
          setBalance(resolve);
        }
      );
  }, [web3.account, web3.chainId, web3.network, coinValue.id, web3.wallet]);

  return {
    swapState,
    coinValue,
    balance,
    route,
    setBalance,
    handleSwapState,
    handleSwapChange,
    handleChange,
    setRoute,
  };
};
