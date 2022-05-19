import React from "react";
import classes from "./qr-section.module.scss";
import Image from "next/image";

export const QrSection = () => {
  return (
    <>
      <section className={classes.qrSection}>
        <div className={classes.qrSection__designImg}>
          <div>
            <Image
              src="/img/home/collaboration/background-design.png"
              layout="responsive"
              width={200}
              height={40}
            />
          </div>
        </div>
        <div className={classes.qrSection__incaImg}>
          <Image
            src="/img/home/collaboration/inti-image.png"
            layout="responsive"
            width={50}
            height={74}
          />
        </div>
        <div
          className={classes.qrSection__text}
          data-aos="fade-down"
          data-aos-duration="2500"
        >
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
        <div className={classes.qrSection__qrImg}>
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
