import classes from "./description.module.css";
import Image from "next/image";

export const Description = () => {
    return(
        <>
            <section className={classes.contain}>
                <div className={classes.info}>
                    <div className={classes.containerCoins}>
                        <div className={classes.coins}>
                            <div className={classes.image} id={classes.image1}>
                                <Image src="/img/crowdsale/coin.png" width={380} height={400} layout="responsive" />
                            </div>
                            <div className={classes.image} id={classes.image2}>
                                <Image src="/img/crowdsale/coin.png" width={380} height={400} layout="responsive" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={classes.infoText}>
                            <h2>Que es IntiCoin?</h2>
                            <p>Inticoin será una red blockchain descentralizada para admitir contratos inteligentes de alto rendimiento. Estamos desarrollando un futuro que permitirá a los desarrolladores implementar sus propias aplicaciones descentralizadas. <br />Con la tecnología blockchain de Glimmer, interconectada a la red Polkadot a modo de parachain, haremos más avanzados los pagos globales y los negocios podrán expandirse a nuevos mercados alrededor del mundo e incluso generar trazabilidad de sus productos a través del servicio IPFS junto con los contratos ERC 721.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}