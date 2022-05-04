import classes from "./swap-button.module.scss";
import { useContext, useEffect } from "react";
import { ISwapValues } from "../../interfaces";
import { allowance } from "../../../../../../utils/erc20";
import { swapMethod } from "../../../../../../utils/swapRouter";
import { getBalance } from "../../../../../../utils/balance";
import { changeNetwork } from "../../../../../../utils/wallet";
import { PreloaderContext } from "../../../../../../contexts/Preloader/PreloaderContext";
import { useToast } from "../../../../../../hooks/useToast";
import { IID } from "../../Row/interfaces";
import { CHAIN_ID, CONTRACTS, NETWORK_MAINNET } from "../../../../../../config";
import { Web3Context } from "../../../../../../contexts/Web3/Web3Context";

type ISwapButton = {
  coinValue: IID;
  approvate: number;
  balance: number;
  values: ISwapValues;
  setOpen: (open: boolean) => void;
  setApprovate: (approvate: number) => void;
  handleApprove: (
    web: any,
    account: string,
    coin: string,
    contract: string
  ) => void;
  slipage: number;
  route: any;
  reset: () => void;
};

export const SwapButton = ({
  coinValue,
  approvate,
  balance,
  values,
  slipage,
  route,
  setOpen,
  reset,
  setApprovate,
  handleApprove,
}: ISwapButton) => {
  const { web3, handleChainId } = useContext(Web3Context);
  const { handlePreloader } = useContext(PreloaderContext);
  const { message } = useToast();

  const handleSwap = () => {
    handlePreloader(true);
    swapMethod(web3.wallet, route, values, web3.account, slipage)
      .then((resolve: any) => {
        if (resolve.transactionHash !== undefined) {
          reset();
          getBalance(web3.wallet, web3.chainId, coinValue.id, web3.account);
          message("success", resolve.transactionHash.substring(0, 25), false);
        }
        handlePreloader(false);
      })
      .catch((e) => {
        console.log(e);
        handlePreloader(false);
      });
  };

  useEffect(() => {
    web3.account != "" &&
      web3.wallet !== null &&
      web3.chainId === CHAIN_ID &&
      allowance(web3.wallet, web3.account, coinValue.id, CONTRACTS.swap)
        .then((resolve) => {
          resolve > 0 ? setApprovate(resolve) : setApprovate(0);
        })
        .catch((e) => console.log(e));
  }, [coinValue.id, web3.account, web3.wallet, web3.chainId, setApprovate]);

  return (
    <div className={classes.swapButton}>
      {!web3.account && (
        <button
          className={classes.swapButton__design}
          onClick={() => setOpen(true)}
        >
          <p>Conectar Billetera</p>
        </button>
      )}

      {web3.account && web3.chainId !== CHAIN_ID && (
        <button
          className={classes.swapButton__design}
          onClick={() =>
            changeNetwork(web3.wallet, handleChainId, NETWORK_MAINNET)
          }
        >
          <p>Cambiar de Red</p>
        </button>
      )}

      {web3.account && values.token0 === "" && web3.chainId === CHAIN_ID && (
        <button className={`${classes.designButton} ${classes.disabled}`}>
          <p>Ingresar Valores</p>
        </button>
      )}

      {web3.account &&
        values.token0 !== "" &&
        balance < parseInt(values.token0) &&
        web3.chainId === CHAIN_ID && (
          <button className={`${classes.designButton} ${classes.disabled}`}>
            <p>Insuficiente</p>
          </button>
        )}

      {web3.account &&
        values.token0 !== "" &&
        balance >= parseInt(values.token0) &&
        approvate === 0 &&
        web3.chainId === CHAIN_ID && (
          <button
            className={classes.designButton}
            onClick={() =>
              handleApprove(
                web3.wallet,
                web3.account,
                coinValue.id,
                CONTRACTS.swap
              )
            }
          >
            <p>Aprobar</p>
          </button>
        )}

      {web3.account &&
        values.token0 !== "" &&
        balance >= parseInt(values.token0) &&
        approvate > 0 &&
        web3.chainId === CHAIN_ID && (
          <button className={classes.designButton} onClick={handleSwap}>
            <p>Swap</p>
          </button>
        )}
    </div>
  );
};
