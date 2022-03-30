import Image from "next/image";
import classes from "./third-slide.module.css";
import Link from "next/link";

export const ThirdSlide = () => {
  return (
    <>
      <Image src="/img/home/carousel/banner-3.jpg" layout="fill" />
      <main className={classes.contain}>
        <div className={classes.column}>
          <div className={classes.text}>
            <h1>Muy pronto</h1>
            <h1>Estaremos en la red de</h1>
            <h1>
              <strong>GLIMMER</strong>
            </h1>
            <h3>Parachain de:</h3>
            <div style={{ marginTop: "-2rem" }}>
              <a href="https://polkadot.network/" target="blank">
                <Image
                  src="/img/home/carousel/slides-images/polkadot.png"
                  width={340}
                  height={150}
                  priority
                />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.image}>
            <Image
              src="/img/home/carousel/slides-images/coin.png"
              layout="fill" priority
            />
          </div>
        </div>
      </main>
    </>
  );
};
