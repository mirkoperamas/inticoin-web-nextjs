import Image from "next/image";
import { getAmountReserves } from "../../../../../../utils/getAmountReserves";
import { IID } from "../../Row/interfaces";
import { ISwapValues } from "../../interfaces";
import classes from "./change-button.module.scss";
interface IChange {
  coinValue: IID;
  values: ISwapValues;
  handleChange: (coin: string, selected: string) => void;
  setValues: (values: ISwapValues) => void;
  setRoute: (route: any) => void;
  reserves: any;
}

export const Change = ({
  coinValue,
  handleChange,
  values,
  setValues,
  reserves,
  setRoute,
}: IChange) => {
  const handleClick = () => {
    handleChange(coinValue.selected, coinValue.id);
    if (parseFloat(values.token1) > 0) {
      const response: any = getAmountReserves(
        reserves,
        coinValue.selected,
        coinValue.id,
        values.token0
      );
      setValues({
        ...values,
        token1: response?.recivided,
      });
      setRoute(response.route);
    }
  };
  return (
    <div className={classes.change} onClick={handleClick}>
      <Image src="/img/swap/flags.png" width={60} height={60} alt="change" />
    </div>
  );
};
