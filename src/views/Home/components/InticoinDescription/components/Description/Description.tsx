import React from "react";
import classes from "./description.module.scss";
import Image from "next/image";
import { Buttons } from "./components/Buttons/Buttons";
import { useTranslate } from "../../../../../../hooks/useTranslate";

export const Description = ({ setPaper }: any) => {
  const { t } = useTranslate();
  return (
    <div className={classes.aboutUs__description}>
      <div className={classes.aboutUs__descriptionBlackcap}></div>
      <div className={classes.aboutUs__descriptionImage}>
        <div className={classes.aboutUs__descriptionImage__content}>
          <Image
            src="/img/home/inticoin-description/logo-bg.png"
            layout="responsive"
            width={37}
            height={20}
          />
        </div>
      </div>
      <div className={classes.aboutUs__descriptionText}>
        <h1>{t.inticoinDescription.descriptions.title}</h1>
        <div className={classes.aboutUs__descriptionText__content}>
          <div>
            <p>{t.inticoinDescription.descriptions.paragraph}</p>
          </div>
        </div>
        <div className={classes.aboutUs__descriptionText__buttons}>
          <Buttons setPaper={setPaper} />
        </div>
      </div>
    </div>
  );
};
