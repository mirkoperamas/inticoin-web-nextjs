import Image from "next/image";
import classes from "./fourth-slide.module.css";

export const FourthSlide = () => {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.backgroundImage}>
          <div>
            <Image
              src="/img/home/carousel/banner-4.jpg"
              layout="fill"
              objectFit="cover"
              alt="background banner 4"
            />
          </div>
        </div>
      </div>
      <main className={classes.contain}>
        <div className={classes.column}>
          <div className={classes.text}>
            <h1>
              <strong>
                Inticoin utilizara UTXO seguridad mientras habilita multiples
                maquinas virtuales incluidas EVM y ARM VM
              </strong>
            </h1>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.image}>
            <Image
              src="/img/home/carousel/slides-images/laptop.png"
              layout="fill"
              priority
              alt="laptop"
            />
          </div>
        </div>
      </main>
    </>
  );
};
