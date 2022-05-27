import React from "react";
import classes from "./utility-use.module.scss";
import Image from "next/image";
import { useTranslate } from "../../../../../../hooks/useTranslate";

export const UtilityUse = () => {
  const { t } = useTranslate();

  return (
    <div className={classes.utilityUse}>
      <div className={classes.utilityUse__container}>
        <div className={classes.utilityUse__containerDescription}>
          <h4>{t.utility.title}</h4>
          <h2>{t.utility.subtitle}</h2>
          <p>{t.utility.description}</p>
        </div>
        <div className={classes.utilityUse__containerFeatures}>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-1.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>{t.utility.textBox._01}</p>
            </div>
          </div>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-2.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>{t.utility.textBox._02}</p>
            </div>
          </div>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-3.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>{t.utility.textBox._03}</p>
            </div>
          </div>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-4.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>{t.utility.textBox._04}</p>
            </div>
          </div>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-5.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>{t.utility.textBox._05}</p>
            </div>
          </div>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-6.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>{t.utility.textBox._06}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
