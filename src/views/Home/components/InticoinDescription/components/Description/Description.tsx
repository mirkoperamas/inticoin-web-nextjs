import React from "react";
import classes from "./description.module.css";
import Image from "next/image";
import { Buttons } from "./components/Buttons/Buttons";

export const Description = () => {
  return (
    <div className={classes.aboutUs__description}>
      <div className={classes.aboutUs__descriptionImage}>
        <div className={classes.aboutUs__descriptionImage__content}>
          <Image
            src="/img/home/inticoin-description/inti-image.png"
            layout="responsive"
            width={37}
            height={20}
          />
        </div>
      </div>
      <div className={classes.aboutUs__descriptionText}>
        <h1>¿Que es Inticoin?</h1>
        <div className={classes.aboutUs__descriptionText__content}>
          <div>
            <p>
              Inticoin es un proyecto en desarrollo que utilizara la seguridad
              de UTXO al tiempo que habilita multiples maquinas virtuales,
              incluidas EVM y ARM VM. esta basado en PoS y cuenta con un
              Protocolo de Gobernanza Descentralizada (DGP) que permite
              modificar configuraciones especificas de blockchain mediante el
              uso de contratos inteligentes.
            </p>
            <p>
              Como medio de recaudacion de fondos, implementamos un contrato
              inteligente en la Binance Smart Chain (BSC) para ser participes en
              plataformas de Finanzas descentralizadas (DeFi).
            </p>
          </div>
        </div>
        <div className={classes.aboutUs__descriptionText__buttons}>
          <Buttons />
        </div>
      </div>
    </div>
  );
};
