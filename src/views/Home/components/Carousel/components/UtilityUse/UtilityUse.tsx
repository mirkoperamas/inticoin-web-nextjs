import React from "react";
import classes from "./utility-use.module.scss";
import Image from "next/image";

export const UtilityUse = () => {
  return (
    <div className={classes.utilityUse}>
      <div className={classes.utilityUse__container}>
        <div className={classes.utilityUse__containerDescription}>
          <h4>UTILITY</h4>
          <h2>USA TU INTI</h2>
          <p>
            IntiCoin, nacido el 01 de junio del 2021, será una red blockchain
            descentralizada para admitir contratos inteligentes de alto
            rendimiento. Estamos desarrollando un futuro que permitirá a los
            desarrolladores implementar sus propias aplicaciones
            descentralizadas.
          </p>
        </div>
        <div className={classes.utilityUse__containerFeatures}>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-1.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>
                Inticoin está descentralizado y respaldado por su comunidad de
                entusiastas.
              </p>
            </div>
          </div>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-2.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>Pague a sus amigos y familiares.</p>
            </div>
          </div>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-3.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>
                En el mercado de las criptomonedas, la confianza es suprema.
              </p>
            </div>
          </div>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-4.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>
                La comunidad lo es todo e Inticoin se esfuerza por incluir a
                todos en todo el mundo.
              </p>
            </div>
          </div>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-5.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>
                Pasajes aéreos, facturas de servicios públicos y suscripciones.
              </p>
            </div>
          </div>
          <div className={classes.utilityUse__containerFeatures_object}>
            <div className={classes.utilityUse__containerFeatures_objectImage}>
              <Image
                src="/img/home/carousel/utility/image-6.png"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>
            <div className={classes.utilityUse__containerFeatures_objectText}>
              <p>Abarrotes, comida y otros.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
