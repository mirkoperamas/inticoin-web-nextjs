import Image from "next/image";
import classes from "./third-slide.module.css";
import Link from "next/link";
import mainClasses from "../../../carousel.module.css";
import { UtilityUse } from "../../UtilityUse/UtilityUse";

export const ThirdSlide = () => {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.backgroundImage}>
          <div>
            <Image
              src="/img/home/carousel/banner-3.jpg"
              layout="fill"
              objectFit="cover"
              alt="background banner 3"
            />
          </div>
        </div>
      </div>
      <main className={mainClasses.ajust}>
        <div className={classes.content}>
          <div className={classes.column}>
            <div className={classes.text}>
              <h1>Muy pronto</h1>
              <h1>Estaremos en la red de</h1>
              <h1>
                <strong>GLIMMER</strong>
              </h1>
              <h3>Parachain de:</h3>
              <div style={{ marginTop: "-2rem" }}>
                <a
                  href="https://polkadot.network/"
                  target="blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/img/home/carousel/slides-images/polkadot.png"
                    width={340}
                    height={150}
                    priority
                    alt="polkadot icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.image}>
              <Image
                src="/img/home/carousel/slides-images/coin.png"
                layout="fill"
                priority
                alt="coin"
              />
            </div>
          </div>
        </div>
        {/* <div className={mainClasses.ajust__utility}>
          <UtilityUse />
        </div> */}
      </main>
    </>
  );
};
