import Image from "next/image";
import { useTranslate } from "../../../../../../../hooks/useTranslate";
import classes from "./third-slide.module.scss";

export const ThirdSlide = () => {
  const { t } = useTranslate();
  return (
    <>
      <div className={classes.background}></div>
      <div className={classes.thirdSlide}>
        <div className={classes.thirdSlide__textContent}>
          <div className={classes.thirdSlide__textContent__text}>
            <h1>
              {t.carousel.thirdSlide.title}
              <strong>Glimmer</strong>
            </h1>
            <h3>{t.carousel.thirdSlide.subtitle}</h3>
            <a href="https://polkadot.network/" target="blank" rel="noreferrer">
              <div className={classes.thirdSlide__textContent__textIcon}>
                <Image
                  src="/img/home/carousel/slides-images/polkadot.png"
                  width={340}
                  height={150}
                  alt="polkadot-icon"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
