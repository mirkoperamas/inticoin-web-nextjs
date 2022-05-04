import classes from "./row.module.scss";
import { memo, useEffect, useState } from "react";
import { Modal } from "./Modal/Modal";
import Image from "next/image";
import { IRow } from "./interfaces";
import { getAmountReserves } from "../../../../utils/getAmountReserves";
import { ISwapValues } from "../Swap/interfaces";

const Component = ({
  id,
  values,
  coins,
  coin,
  coinValue,
  balance,
  handleSwapState,
  handleSwapChange,
  handleFormChange,
  setValues,
  setRoute,
  reserves,
  setOpenRowModal,
}: IRow | any) => {
  const [open, setOpen] = useState(false);
  const hanldleKeyup = () => {
    if (parseFloat(values.token0) > 0) {
      const response: any = getAmountReserves(
        reserves,
        coinValue.id,
        coinValue.selected,
        values.token0
      );
      setValues({
        ...values,
        token1: response?.recivided,
      });
      setRoute(response.route);
      typeof handleSwapState === "function" &&
        handleSwapState({
          ["priceXToken0"]: response?.priceXToken0,
          ["priceXToken1"]: response?.priceXToken1,
          ["fee"]: response?.fee,
          ["priceImpact"]: response?.priceImpact,
        });
    } else {
      setValues({
        ...values,
        token1: "",
      });
      typeof handleSwapState === "function" && handleSwapState("", true);
      setRoute(null);
    }
  };

  return (
    <>
      <div className={classes.row}>
        <div className={classes.row__coin} onClick={() => setOpen(true)}>
          <div className={classes.row__coinImage}>
            <Image
              src={coin.icon}
              layout="fill"
              objectFit="contain"
              alt={coin.description}
            />
          </div>
          <div className={classes.row__coinText}>
            <div>
              <p>{coin.id}</p>
              <span className={classes.row__coinBalance}>
                {id === 0 && balance?.toFixed(4)}
              </span>
            </div>
          </div>
          <div className={classes.row__coinFlag}>
            <div>
              <Image
                src="/img/swap/downflag.png"
                layout="responsive"
                width={10}
                height={6}
                alt="downflag"
              />
            </div>
          </div>
        </div>
        <div className={classes.row__input}>
          <input
            type="text"
            placeholder="0.0"
            name={`token${id}`}
            value={values[`token${id}` as keyof ISwapValues]}
            onChange={id === 0 ? handleFormChange : () => {}}
            onKeyUp={
              reserves[1] !== undefined && id === 0 ? hanldleKeyup : () => {}
            }
          />
        </div>
      </div>

      {open && id === 0 && (
        <Modal
          handleClose={() => setOpen(false)}
          handleSwapChange={handleSwapChange}
          coins={coins}
          filter={[]}
        />
      )}
      {open && id === 1 && (
        <Modal
          handleClose={() => setOpen(false)}
          handleSwapChange={handleSwapChange}
          coins={coins}
          filter={coinValue.filter}
        />
      )}
    </>
  );
};

export const Row = memo(Component);
