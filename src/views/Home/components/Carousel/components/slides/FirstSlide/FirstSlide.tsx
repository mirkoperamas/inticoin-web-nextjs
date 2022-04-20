import Image from "next/image";
import { UtilityUse } from "../../UtilityUse/UtilityUse";
import { InstallButton } from "./components/InstallButton/InstallButton";
import classes from "./first-slide.module.css";
import mainClasses from "../../../carousel.module.css";

export const FirstSlide = () => {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.backgroundImage}>
          <div>
            <Image
              src="/img/home/carousel/banner-1.jpg"
              layout="fill"
              objectFit="cover"
              priority
              alt="background banner 1"
            />
          </div>
        </div>
      </div>

      <main className={mainClasses.ajust}>
        <div className={classes.content}>
          <div className={classes.column}>
            <div className={classes.image}>
              <Image
                src="/img/home/carousel/slides-images/inticoin-wallet.png"
                layout="responsive"
                width={20}
                height={20}
                priority
                alt="character 1"
              />
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.text}>
              <h1>Instala tu billetera y recibe Inticoin's</h1>
              <h3>Participa desde ahora con nuestro desarrollo.</h3>

              <div className={classes.buttonBox}>
                <InstallButton />
              </div>
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
