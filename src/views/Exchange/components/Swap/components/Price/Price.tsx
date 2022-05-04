import classes from "./price-result.module.scss";
import { IID } from "../../Row/interfaces";

type IPrice = {
  priceXToken0: number;
  priceXToken1: number;
  coinValue: IID;
};

export const Price = ({ priceXToken0, priceXToken1, coinValue }: IPrice) => {
  return (
    <div className={classes.price}>
      <div className={classes.price__content}>
        <p>Precio:</p>
        <span>
          1 = {priceXToken0 === undefined ? 0.0 : priceXToken0.toFixed(8)}{" "}
          {coinValue.selected}
        </span>
        <span>
          1 = {priceXToken1 === undefined ? 0.0 : priceXToken1.toFixed(8)}{" "}
          {coinValue.id}
        </span>
      </div>
      <hr />
    </div>
  );
};
