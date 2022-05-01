import Image from "next/image";
import React from "react";
import classes from "./collaboration.module.scss";

export const Collaboration = () => {
  return (
    <>
      <section className={classes.collaboration}>
        <div className={classes.collaboration__designImg}>
          <div>
            <Image
              src="/img/home/collaboration/background-design.png"
              layout="responsive"
              width={200}
              height={40}
            />
          </div>
        </div>
        <div className={classes.collaboration__incaImg}>
          <Image
            src="/img/home/collaboration/inti-image.png"
            layout="responsive"
            width={50}
            height={74}
          />
        </div>
        <div className={classes.collaboration__text}>
          <h3>Puedes colaborar con nuestro proyecto despositando en:</h3>
          <div>
            <div>
              <span>
                <strong>Dirección de recepción:</strong>
              </span>
              <span>0x3B60DA2F434b6BD6a3B31D6425C0b2A8395c8850</span>
            </div>
            <div>
              <span>
                <strong>Token aceptado:</strong>
              </span>
              <span>Cualquier BEP20 (BSC)</span>
            </div>
            <div>
              <span>
                <strong>Token preferido:</strong>
              </span>
              <span>INTI</span>
            </div>
          </div>
        </div>
        <div className={classes.collaboration__qrImg}>
          <Image
            src="/img/home/collaboration/qr-image.png"
            layout="responsive"
            width={50}
            height={50}
          />
        </div>
      </section>
    </>
  );
};
