import { useContext, useState } from "react";
import { PreloaderContext } from "../contexts/Preloader/PreloaderContext";
import { allowance, approve } from "../utils/erc20";

export const useAprovate = () => {
  const [approvate, setApprovate] = useState(0);
  const { handlePreloader } = useContext(PreloaderContext);

  const handleApprove = (
    web3: any,
    account: string,
    coin: string,
    contract: string
  ) => {
    handlePreloader(true);
    approve(web3, account, coin, contract)
      .then(() => {
        allowance(web3, account, coin, contract)
          .then((resolve: any) => {
            resolve > 0 ? setApprovate(resolve) : setApprovate(0);
            handlePreloader(false);
          })
          .catch((e) => {
            console.log(e);
            handlePreloader(false);
          });
      })
      .catch((e) => {
        console.log(e);
        handlePreloader(false);
      });
  };

  return { approvate, setApprovate, handleApprove };
};
