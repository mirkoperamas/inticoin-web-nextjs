import React from "react";
import classes from "./swap.module.scss";
import { ISwap, ISwapValues } from "./interfaces";
import { useForm } from "../../../../hooks/useForm";
import { coins } from "./coinData";
import { useSwap } from "./hooks/useSwap";
import { Price } from "./components/Price/Price";
import { SwapButton } from "./components/SwapButton/SwapButton";
import { InformationFrame } from "./components/InformationFrame/InformationFrame";
import { Change } from "./components/Change/Change";
import { useAprovate } from "../../../../hooks/useAprovate";
import { IRowI } from "../Row/interfaces";
import { Row } from "../Row/Row";

export const Swap = ({ slipage, reserves, setOpen }: ISwap) => {
  const {
    coinValue,
    swapState,
    balance,
    route,
    setRoute,
    handleSwapChange,
    handleChange,
    handleSwapState,
  } = useSwap();

  const { approvate, setApprovate, handleApprove } = useAprovate();
  const { values, handleFormChange, setValues, reset } = useForm<ISwapValues>({
    token0: "",
    token1: "",
  });

  return (
    <>
      <div className={classes.swap}>
        <div className={classes.swap__calc}>
          <Row
            key={0}
            id={0}
            values={values}
            handleFormChange={handleFormChange}
            coins={coins}
            coin={coinValue}
            coinValue={coinValue}
            balance={balance}
            handleSwapState={handleSwapState}
            handleSwapChange={handleSwapChange}
            setValues={setValues}
            setRoute={setRoute}
            reserves={reserves}
          />
          <Change
            coinValue={coinValue}
            handleChange={handleChange}
            values={values}
            setValues={setValues}
            reserves={reserves}
            setRoute={setRoute}
          />
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

        <div className={classes.swap__info}>
          <Price
            priceXToken0={swapState.priceXToken0}
            priceXToken1={swapState.priceXToken1}
            coinValue={coinValue}
          />

          <SwapButton
            coinValue={coinValue}
            setOpen={setOpen}
            approvate={approvate}
            setApprovate={setApprovate}
            handleApprove={handleApprove}
            values={values}
            balance={balance}
            slipage={slipage}
            route={route}
            reset={reset}
          />
          <InformationFrame
            priceImpact={swapState.priceImpact}
            fee={swapState.fee}
            coinValue={coinValue}
            slipage={slipage}
            values={values}
          />
        </div>
      </div>
    </>
  );
};
