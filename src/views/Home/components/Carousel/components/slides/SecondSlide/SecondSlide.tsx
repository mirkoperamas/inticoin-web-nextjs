import Image from "next/image";
import classes from "./second-slide.module.scss";

export const SecondSlide = () => {
  return (
    <>
      <div className={classes.background}></div>
      <section className={classes.secondSlide}>
        <div className={classes.secondSlide__textContent}>
          <div className={classes.secondSlide__textContent__text}>
            <h2>
              Establecemos un entorno empresarial distribuido de confianza con
              informacion transparente, colaboracion eficiente
            </h2>
            <h1>
              <a href="https://intichain.io/" target="_blank">
                Ir a INTICHAIN web...
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
