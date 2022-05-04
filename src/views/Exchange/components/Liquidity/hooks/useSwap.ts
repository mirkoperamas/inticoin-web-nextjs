import { useContext, useEffect, useState } from "react";
import { coins } from "../coinData";
import { IID, IRowI } from "../../Swap/Row/interfaces";
import { getBalance } from "../../../../../utils/balance";
import { CONTRACTS } from "../../../../../config";
import { PreloaderContext } from "../../../../../contexts/Preloader/PreloaderContext";
import { allowance, approve } from "../../../../../utils/erc20";
import { Web3Context } from "../../../../../contexts/Web3/Web3Context";

const init = coins.USDC;

const initState = {
  priceXToken0: 0.0,
  priceXToken1: 0.0,
  priceImpact: 0.0,
  fee: 0,
};

export const useSwap = () => {
  const { web3 } = useContext(Web3Context);
  const { handlePreloader } = useContext(PreloaderContext);
  const [coinValue, setCoinValue] = useState<IID>(init);
  const [route, setRoute] = useState<any>(null);
  const [approvate, setAprrovate] = useState(0);
  const [balance, setBalance] = useState(0.0);
  const [swapState, setSwapState] = useState(initState);

  const handleSwapChange = (newValues: IID, selected: string): void => {
    selected != ""
      ? setCoinValue({
          ...coinValue,
          selected,
        })
      : setCoinValue(newValues);
  };

  const handleChange = (coin: string, selected: string): void => {
    setCoinValue({
      ...coins[coin as keyof IRowI],
      selected,
    });
  };

  const handleSwapState = (data: any, reset = false) => {
    reset ? setSwapState(initState) : setSwapState(data);
  };

  const handleApprove = () => {
    handlePreloader(true);
    approve(web3.wallet, web3.account, coinValue.id, CONTRACTS.swap).then(
      () => {
        allowance(web3.wallet, web3.account, coinValue.id, CONTRACTS.swap)
          .then((resolve) => {
            resolve > 0 ? setAprrovate(resolve) : setAprrovate(0);
            handlePreloader(false);
          })
          .catch((e) => console.log(e));
      }
    );
  };

  useEffect(() => {
    web3.account != "" &&
      web3.wallet !== null &&
      getBalance(web3.wallet, web3.chainId, coinValue.id, web3.account).then(
        (resolve) => {
          setBalance(resolve);
        }
      );
  }, [web3.account, web3.wallet, coinValue.id, web3.chainId]);

  useEffect(() => {
    web3.account != "" &&
      web3.wallet !== null &&
      allowance(web3.wallet, web3.account, coinValue.id, CONTRACTS.swap)
        .then((resolve) => {
          resolve > 0 ? setAprrovate(resolve) : setAprrovate(0);
        })
        .catch((e) => console.log(e));
  }, [coinValue.id, web3.account, web3.wallet]);

  return {
    swapState,
    coinValue,
    approvate,
    balance,
    route,
    setBalance,
    handleSwapState,
    handleSwapChange,
    handleChange,
    handleApprove,
    setRoute,
  };
};
