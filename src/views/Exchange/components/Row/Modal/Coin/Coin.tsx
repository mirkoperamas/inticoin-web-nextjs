import classes from "./coin.module.scss";
import { ICoin } from "../../interfaces";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { getBalance } from "../../../../../../utils/balance";
import { Web3Context } from "../../../../../../contexts/Web3/Web3Context";

export const Coin = ({
  id,
  coin,
  handleClose,
  handleSwapChange,
  selected = "",
}: ICoin) => {
  const { web3 } = useContext(Web3Context);
  const [balance, setBalance] = useState(0.0);

  const handleClick = () => {
    handleSwapChange(coin, selected);
    handleClose();
  };

  useEffect(() => {
    getBalance(web3.network, web3.chainId, web3.account, coin.id)
      .then((r) => setBalance(r))
      .catch((e) => console.log(e));
  }, [coin, web3.network, web3.chainId, web3.account]);

  return (
    <div className={classes.containerList}>
      <div className={classes.listContent} onClick={handleClick}>
        <div className={classes.coinImage}>
          <Image
            src={coin.icon}
            layout="fill"
            objectFit="contain"
            alt={coin.id}
          />
        </div>
        <div className={classes.listText}>
          <h5>{coin.id}</h5>
          <p>{coin.description}</p>
          <span className={classes.balanceSpan}>
            {id === 1 && balance > 0 && balance.toFixed(4)}
          </span>
        </div>
      </div>
    </div>
  );
};
