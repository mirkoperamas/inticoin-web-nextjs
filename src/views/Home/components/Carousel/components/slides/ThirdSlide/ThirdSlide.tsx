import Image from "next/image";
import classes from "./third-slide.module.scss";

export const ThirdSlide = () => {
  return (
    <>
      <div className={classes.background}></div>
      <div className={classes.thirdSlide}>
        <div className={classes.thirdSlide__textContent}>
          <div className={classes.thirdSlide__textContent__text}>
            <h1>
              Muy pronto estaremos en la red de <strong>Glimmer</strong>
            </h1>
            <h3>Parachain de:</h3>
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
