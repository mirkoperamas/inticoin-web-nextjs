import Image from "next/image";
import React from "react";
import classes from "./swap.module.scss";

export const Swap = () => {
  return (
    <>
      <div className={classes.background}></div>
      <main className={classes.swap}>
        <div className={classes.swap__exchange}>
          <div className={classes.swap__exchangeFrame}>
            <div>
              <Image
                src="/img/swap/swap-frame.png"
                width={50}
                height={30}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className={classes.swap__image}>
          <div>
            <Image
              src="/img/swap/inti-img.png"
              width={50}
              height={70}
              layout="responsive"
            />
          </div>
        </div>
      </main>
    </>
  );
};
