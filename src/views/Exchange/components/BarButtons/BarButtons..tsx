import classes from "./bar-buttons.module.scss";
import { useState } from "react";
import Image from "next/image";
import { Informative } from "../../../../components/modals/Informative/Informative";

interface IBarButtons {
  active: string;
  setActive: (active: string) => void;
  slipage: number;
  handleSlipage: any;
}

export const BarButtons = ({
  active,
  setActive,
  slipage,
  handleSlipage,
  setOpenConfModal,
}: IBarButtons | any) => {
  return (
    <>
      <div className={classes.barButtons}>
        <div className={classes.barButtons__options}>
          <button
            className={active === "Swap" ? classes.buttonActive : "none"}
            onClick={() => setActive("Swap")}
          >
            <p>Swap</p>
          </button>
          <button
            className={active === "Liquidity" ? classes.buttonActive : "none"}
            onClick={() => setActive("Liquidity")}
          >
            <p>Liquidity</p>
          </button>
        </div>

        <div className={classes.barButtons__settings} style={{}}>
          <button onClick={() => setOpenConfModal(true)}>
            <div>
              <Image
                src="/img/swap/nut-icon.png"
                width={10}
                height={10}
                layout="responsive"
                alt="nut icon"
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
