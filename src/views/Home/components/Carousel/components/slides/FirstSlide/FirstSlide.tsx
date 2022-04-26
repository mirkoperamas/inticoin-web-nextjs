import Image from "next/image";
import { InstallButton } from "./components/InstallButton/InstallButton";
import classes from "./first-slide.module.scss";

export const FirstSlide = () => {
  return (
    <>
      <div className={classes.background}></div>
      <section className={classes.firstSlide}>
        <div className={classes.firstSlide__image}>
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
            <h1>Instala tu billetera y recibe Inticoin's</h1>
            <h3>Participa desde ahora con nuestro desarrollo.</h3>
          </div>
          <div className={classes.firstSlide__textContent__button}>
            <InstallButton />
          </div>
        </div>
      </section>
    </>
  );
};
