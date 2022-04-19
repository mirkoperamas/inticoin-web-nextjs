import Image from "next/image";
import classes from "./second-slide.module.css";
import mainClasses from "../../../carousel.module.css";
import { UtilityUse } from "../components/UtilityUse/UtilityUse";

export const SecondSlide = () => {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.backgroundImage}>
          <div>
            <Image
              src="/img/home/carousel/banner-2.jpg"
              layout="fill"
              objectFit="cover"
              alt="background banner 2"
            />
          </div>
        </div>
      </div>

      <main className={mainClasses.ajust}>
        <div className={classes.content}>
          <div className={classes.column}>
            <div className={classes.text}>
              <h3>
                Establecemos un entorno empresarial distribuido de confianza con
                informacion transparente, colaboracion eficiente
              </h3>
              <div className={classes.textIcon}>
                <Image
                  src="/img/home/carousel/slides-images/intichain-icon.png"
                  layout="responsive"
                  width={20}
                  height={3}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={mainClasses.ajust__utility}>
          <UtilityUse />
        </div>
      </main>
    </>
  );
};
