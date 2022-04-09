import React from "react";
import classes from "./plan.module.css";

export const Plan = () => {
  return (
    <>
      <section className={classes.container}>
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
      </section>
    </>
  );
};
