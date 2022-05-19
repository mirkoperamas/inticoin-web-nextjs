import Image from "next/image";
import React from "react";
import classes from "./partners.module.scss";

export const Partners = () => {
  return (
    <>
      <section className={classes.partners}>
        <h2>Nuestros colaboradores</h2>
        <div
          className={classes.partnersContainer}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className={classes.partnersContainer__image}>
            <a href="https://firulaixcoin.finance/" target="_blank">
              <Image
                src="/img/home/partners/firulaix.png"
                layout="responsive"
                width={200}
                height={80}
              />
            </a>
          </div>
          <div className={classes.partnersContainer__image}>
            <a href="https://www.renian.org/" target="_blank">
              <Image
                src="/img/home/partners/renian.png"
                layout="responsive"
                width={200}
                height={80}
              />
            </a>
          </div>

          <div className={classes.partnersContainer__image}>
            <a href="https://www.petid.pe/" target="_blank">
              <Image
                src="/img/home/partners/pet-id.png"
                layout="responsive"
                width={200}
                height={80}
              />
            </a>
          </div>
          <div className={classes.partnersContainer__image}>
            <a href="https://www.pettravelperu.com/" target="_blank">
              <Image
                src="/img/home/partners/pet-travel.png"
                layout="responsive"
                width={200}
                height={80}
              />
            </a>
          </div>

          <div className={classes.partnersContainer__image}>
            <Image
              src="/img/home/partners/apolobit.png"
              layout="responsive"
              width={200}
              height={80}
            />
          </div>
        </div>
      </section>
    </>
  );
};
