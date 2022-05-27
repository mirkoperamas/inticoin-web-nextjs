import Image from "next/image";
import { useTranslate } from "../../../../../../../hooks/useTranslate";
import classes from "./second-slide.module.scss";

export const SecondSlide = () => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}></div>
      <section className={classes.secondSlide}>
        <div className={classes.secondSlide__textContent}>
          <div className={classes.secondSlide__textContent__text}>
            <h2>{t.carousel.secondSlide.subtitle}</h2>
            <h1>
              <a href="https://intichain.io/" target="_blank">
                {t.carousel.secondSlide.intichainUrl}
              </a>
            </h1>
          </div>
        </div>
        <div className={classes.secondSlide__image}>
          <a href="https://intichain.io/" target="_blank" rel="noreferrer">
            <Image
              src="/img/home/carousel/slides-images/intichain-coin.png"
              layout="responsive"
              width={20}
              height={20}
              alt="intichain-coin"
            />
          </a>
        </div>
      </section>
    </>
  );
};
