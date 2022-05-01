import React from "react";
import classes from "./wallet-values.module.scss";
import Image from "next/image";

export const WalletValues = () => {
  return (
    <div className={classes.aboutUs__walletValues}>
      <div className={classes.aboutUs__walletValues__graphic}>
        <div className={classes.aboutUs__walletValues__graphicColumn}>
          <div
            className={classes.aboutUs__walletValues__graphicColumn__contain}
          >
            <p>20%</p>
            <div
              className={
                classes.aboutUs__walletValues__graphicColumn__containImage
              }
            >
              <Image
                src="/img/home/inticoin-description/20.png"
                layout="responsive"
                width={100}
                height={25}
              />
            </div>
            <h3>
              <strong>Team</strong>
            </h3>
          </div>
          <div
            className={classes.aboutUs__walletValues__graphicColumn__contain}
          >
            <p>10%</p>
            <div
              className={
                classes.aboutUs__walletValues__graphicColumn__containImage
              }
            >
              <Image
                src="/img/home/inticoin-description/10.png"
                layout="responsive"
                width={100}
                height={25}
              />
            </div>
            <h3>
              <strong>Marketing</strong>
            </h3>
          </div>
          <div
            className={classes.aboutUs__walletValues__graphicColumn__contain}
          >
            <p>10%</p>
            <div
              className={
                classes.aboutUs__walletValues__graphicColumn__containImage
              }
            >
              <Image
                src="/img/home/inticoin-description/10.png"
                layout="responsive"
                width={100}
                height={25}
              />
            </div>
            <h3>
              <strong>Initial liquidity</strong>
            </h3>
          </div>
          <div
            className={classes.aboutUs__walletValues__graphicColumn__contain}
          >
            <p>20%</p>
            <div
              className={
                classes.aboutUs__walletValues__graphicColumn__containImage
              }
            >
              <Image
                src="/img/home/inticoin-description/20.png"
                layout="responsive"
                width={100}
                height={25}
              />
            </div>
            <h3>
              <strong>Ecosystem</strong>
            </h3>
          </div>
        </div>

        <div className={classes.aboutUs__walletValues__graphicColumn}>
          <div
            className={classes.aboutUs__walletValues__graphicColumn__contain}
          >
            <h3>20%</h3>
            <h3>7000000</h3>
          </div>
          <div
            className={classes.aboutUs__walletValues__graphicColumn__contain}
          >
            <h3>10%</h3>
            <h3>3500000</h3>
          </div>
          <div
            className={classes.aboutUs__walletValues__graphicColumn__contain}
          >
            <h3>10%</h3>
            <h3>3500000</h3>
          </div>
          <div
            className={classes.aboutUs__walletValues__graphicColumn__contain}
          >
            <h3>20%</h3>
            <h3>7000000</h3>
          </div>
        </div>

        {/* <div className={classes.aboutUs__walletValues__graphicColumn}>
          <div
            className={
              classes.aboutUs__walletValues__graphicColumn__walletImage
            }
          >
            <Image
              src="/img/home/inticoin-description/wallet.png"
              layout="responsive"
              width={50}
              height={55}
            />
          </div>
        </div> */}
      </div>

      <div className={classes.aboutUs__walletValues__walletImage}>
        <Image
          src="/img/home/inticoin-description/wallet.png"
          layout="responsive"
          width={50}
          height={55}
        />
      </div>
    </div>
  );
};
