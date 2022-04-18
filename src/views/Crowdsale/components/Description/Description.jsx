import React from "react";
import classes from "./description.module.css";
import Image from "next/image";

export const Description = () => {
  return (
    <section className={classes.contain}>
      <div className={classes.info}>
        <div className={classes.containerCoins}>
          <div style={{ width: "70%", position: "relative" }}>
            <Image
              src="/img/crowdsale/character.png"
              width={9}
              height={10}
              layout="responsive"
              alt="character"
            />
          </div>
        </div>

        <div className={classes.text}>
          <div>
            <p>
              <strong>
                Anunciamos públicamente la cancelación de nuestro crowdsale{" "}
                <a
                  href="https://es.beincrypto.com/qolkrex-foundation-cancela-proceso-crowdsale-proyecto-inticoin/?utm_source=telegram&utm_medium=social"
                  target="_blank"
                  rel="noreferrer"
                >
                  aquí.
                </a>
              </strong>
            </p>
            <p>
              El crowdsale de INTICOIN estaba pactado para el 28 de marzo del
              2022 y para el 13 de junio del 2022 el listado del token INTI.
              Ahora, desde el 4 de Julio del 2022, se podrá conseguir las tokens
              en una DEX en la red de Moonbean. El listado lo informaremos a
              través de nuestras redes sociales o grupos de comunidad, Telegram
              y Discord.
            </p>
            <p>
              Desde que comenzó el proyecto, QolKrex Foundation ha estado
              entusiasmado con los grandes avances que se han venido generando
              durante este tiempo. Gracias a sus principales proveedores se
              encontró capital suficiente para poder seguir avanzando en aras de
              nuestros objetivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
