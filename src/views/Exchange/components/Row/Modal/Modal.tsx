import classes from "./modal.module.scss";
import { IModal, IRowI } from "../interfaces";
import { Coin } from "./Coin/Coin";

export const Modal = ({
  handleClose,
  coins,
  filter,
  handleSwapChange,
}: IModal) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalDialog} onClick={handleClose}></div>
      <div className={classes.flex}>
        <div className={classes.content}>
          <h2>Select a token</h2>

          {filter.length > 0
            ? filter.map((coin) => (
                <Coin
                  id={2}
                  key={coin}
                  coin={coins[coin as keyof IRowI]}
                  handleClose={handleClose}
                  handleSwapChange={handleSwapChange}
                  selected={coin}
                />
              ))
            : Object.keys(coins).map((coin) => (
                <Coin
                  id={1}
                  key={coin}
                  coin={coins[coin as keyof IRowI]}
                  handleClose={handleClose}
                  handleSwapChange={handleSwapChange}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
