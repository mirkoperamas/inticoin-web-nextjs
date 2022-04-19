import Image from "next/image";
import React from "react";
import classes from "./plan.module.css";

export const Plan = () => {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.backgroundImage}>
          <div>
            <Image
              src="/img/call/background.png"
              layout="fill"
              objectFit="cover"
              priority
              alt="background"
            />
          </div>
        </div>
      </div>

      <main className={classes.ajust}>
        <div className={classes.content}>
          <div className={classes.column}>
            <div className={classes.image}>
              <Image
                src="/img/call/character.png"
                layout="responsive"
                width={20}
                height={24}
                priority
                alt="character 1"
              />
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.text}>
              <h1>Plan de desarrollo</h1>
              <p>
                Gracias a nuestra comunidad, estamos construyendo un sistema
                financiero descentralizado más inclusivo donde más personas,
                pymes, comercios e instituciones tienen acceso a mejores
                servicios financieros más seguros. Nuestra persistencia en el
                avance del desarrollo del proyecto y gracias a la Fundación
                Qolkrex, proveedores y empresas que confían en Inticoin
                conseguimos un capital suficiente para dar inicio a nuestros
                objetivos. Podrán conseguir nuestra Token INTI en una DEX en la
                cadena de bloques de Moonbeam. El listado lo informaremos a
                través de nuestras redes sociales o grupos de comunidad,
                Telegram y Discord.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* <section className={classes.container}>
        <div className={classes.text}>
          <h2>Plan de desarrollo</h2>
          <p>
            Gracias a nuestra comunidad, estamos construyendo un sistema
            financiero descentralizado más inclusivo donde más personas, pymes,
            comercios e instituciones tienen acceso a mejores servicios
            financieros más seguros. Nuestra persistencia en el avance del
            desarrollo del proyecto y gracias a la Fundación Qolkrex,
            proveedores y empresas que confían en Inticoin conseguimos un
            capital suficiente para dar inicio a nuestros objetivos. Podrán
            conseguir nuestra Token INTI en una DEX en la cadena de bloques de
            Moonbeam. El listado lo informaremos a través de nuestras redes
            sociales o grupos de comunidad, Telegram y Discord.
          </p>
        </div>
      </section> */}
    </>
  );
};
