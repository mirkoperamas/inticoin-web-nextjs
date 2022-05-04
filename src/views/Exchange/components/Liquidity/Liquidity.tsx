import classes from "./liquidity.module.scss";
import { Change } from "./components/Change/Change";
import { LiquidityButton } from "./components/LiquidityButton/LiquidityButton";
import { ISwap, ISwapValues } from "../Swap/interfaces";
import { useForm } from "../../../../hooks/useForm";
import { coins } from "./coinData";
import { Price } from "./components/Price/Price";
import { InformationFrame } from "./components/InformationFrame/InformationFrame";
import { useSwap } from "./hooks/useSwap";
import { Row } from "../Row/Row";
import { IRowI } from "../Row/interfaces";

export const Liquidity = ({ slipage, setOpen, reserves }: ISwap) => {
  const {
    coinValue,
    swapState,
    approvate,
    balance,
    route,
    setBalance,
    setRoute,
    handleSwapChange,
    handleChange,
    handleSwapState,
    handleApprove,
  } = useSwap();
  const { values, handleFormChange, setValues, reset } = useForm<ISwapValues>({
    token0: "",
    token1: "",
  });

  return (
    <div className={classes.liquidity}>
      <div className={classes.liquidity__calc}>
        <Row
          key={0}
          id={0}
          values={values}
          handleFormChange={handleFormChange}
          coins={coins}
          coin={coinValue}
          coinValue={coinValue}
          balance={balance}
          setBalance={setBalance}
          handleSwapState={handleSwapState}
          handleSwapChange={handleSwapChange}
          setValues={setValues}
          setRoute={setRoute}
          reserves={reserves}
        />
        <Change />
        <Row
          key={1}
          id={1}
          values={values}
          handleFormChange={handleFormChange}
          coins={coins}
          coin={coins[coinValue.selected as keyof IRowI]}
          coinValue={coinValue}
          handleSwapChange={handleSwapChange}
          setValues={setValues}
          setRoute={setRoute}
          reserves={reserves}
        />
      </div>
      <div className={classes.liquidity__info}>
        <Price />
        <LiquidityButton />
        <InformationFrame />
      </div>
    </div>
  );
};
