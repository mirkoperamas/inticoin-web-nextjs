import Image from "next/image";
import classes from "./fourth-slide.module.scss";

export const FourthSlide = () => {
  return (
    <>
      <div className={classes.background}></div>
      <section className={classes.secondSlide}>
        <div className={classes.secondSlide__textContent}>
          <div className={classes.secondSlide__textContent__text}>
            <h1>
              Inticoin utilizara UTXO seguridad mientras habilita multiples
              maquinas virtuales incluidas EVM y ARM VM
            </h1>
          </div>
        </div>
        <div className={classes.secondSlide__image}>
          <div>
            <Image
              src="/img/home/carousel/slides-images/laptop.png"
              layout="responsive"
              width={20}
              height={25}
              alt="intichain-coin"
            />
          </div>
        </div>
      </section>
      {/* <div className={classes.background}>
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
      <main className={mainClasses.ajust}>
        <div className={classes.content}>
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
                layout="responsive"
                width={20}
                height={25}
                priority
                alt="laptop"
              />
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
};
