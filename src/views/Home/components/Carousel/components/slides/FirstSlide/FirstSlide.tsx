import Image from "next/image";
import { InstallButton } from "./components/InstallButton/InstallButton";
import classes from "./first-slide.module.scss";

import { useTranslate } from "../../../../../../../hooks/useTranslate";

export const FirstSlide = ({ setPaper }: any) => {
  const { t } = useTranslate();

  return (
    <>
      <div className={classes.background}></div>
      <section className={classes.firstSlide}>
        <div
          className={classes.firstSlide__image}
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <Image
            src="/img/home/carousel/slides-images/inticoin-wallet.png"
            layout="responsive"
            width={20}
            height={20}
            alt="inticoin-wallet"
          />
        </div>
        <div className={classes.firstSlide__textContent}>
          <div className={classes.firstSlide__textContent__text}>
            <h1>{t.carousel.firstSlide.title}</h1>
            <h3>{t.carousel.firstSlide.subtitle}</h3>
          </div>
          <div className={classes.firstSlide__textContent__button}>
            <InstallButton setPaper={setPaper} />
          </div>
        </div>
      </section>
    </>
  );
};
