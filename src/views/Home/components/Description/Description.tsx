import classes from "./description.module.css";
import Image from "next/image";

export const Description = () => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.info}>
          <div className={classes.containerCoins}>
            <div className={classes.coins}>
              <div className={classes.image} id={classes.image1}>
                <Image
                  src="/img/crowdsale/coin.png"
                  width={380}
                  height={400}
                  layout="responsive"
                />
              </div>
              <div className={classes.image} id={classes.image2}>
                <Image
                  src="/img/crowdsale/coin.png"
                  width={380}
                  height={400}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div>
            <div className={classes.infoText}>
              <h2>Que es IntiCoin?</h2>
              <p>
                IntiCoin, la primera criptomoneda peruana, será una red
                blockchain descentralizada que admitirá contratos inteligentes
                de alto rendimiento que estará integrada con la máquina virtual
                Ethereum (EVM). Espera generar un futuro que permitirá a los
                desarrolladores implementar sus propias aplicaciones
                descentralizadas. <br />
                <br />
                Iniciará sus operaciones siendo un token ERC20 con la tecnología
                blockchain de Moonbean (GLMR), interconectada a la red Polkadot
                a modo de parachain. IntiCoin planteará pagos globales más
                avanzados y una expansión de negocios a nuevos mercados
                alrededor del mundo. Incluso buscará generar trazabilidad de sus
                productos a través del servicio IPFS junto con los contratos ERC
                721.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
