import React from "react";
import classes from "./qr-section.module.scss";
import Image from "next/image";
import { useTranslate } from "../../../../../../hooks/useTranslate";

export const QrSection = () => {
  const { t } = useTranslate();
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
          <h3>{t.collaboration.qrSection.subTitle}</h3>
          <div>
            <div>
              <span>
                <strong>{t.collaboration.qrSection.direction}</strong>
              </span>
              <span>0x3B60DA2F434b6BD6a3B31D6425C0b2A8395c8850</span>
            </div>
            <div>
              <span>
                <strong>{t.collaboration.qrSection.paragraphFirst}</strong>
              </span>
              <span>{t.collaboration.qrSection.paragraphFirstResp}</span>
            </div>
            <div>
              <span>
                <strong>{t.collaboration.qrSection.paragraphSecond}</strong>
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
