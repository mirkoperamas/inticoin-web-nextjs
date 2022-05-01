import Image from "next/image";
import React from "react";
import classes from "./collaboration.module.scss";

export const Collaboration = () => {
  return (
    <>
      <section className={classes.collaboration}>
        <div className={classes.collaboration__incaImg}>
          <div>
            <Image
              src="/img/home/collaboration/inti-image.png"
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
        </div>
        <div className={classes.collaborarion__addresses}>
          <div></div>
        </div>
        <div className={classes.collaboration__qrImg}>
          <Image
            src="/img/home/collaboration/qr-image.png"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
      </section>
    </>
  );
};
