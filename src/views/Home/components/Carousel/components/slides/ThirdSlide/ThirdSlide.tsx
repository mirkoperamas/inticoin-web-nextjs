import Image from "next/image";
import classes from "./third-slide.module.css";

export const ThirdSlide = () => {
    return(
        <>
            <Image src="/img/home/carousel/banner-3.jpg" layout="fill" />
            <main className={classes.contain}>
                <div className={classes.column}>
                    <div className={classes.text}>
                        {/* <h3>Estas en el mejor momento para que puedas comprar tus</h3> */}
                        <h1>Muy pronto</h1>
                        <h1>Estaremos en la red de</h1>
                        <h1><strong>GLIMMER</strong></h1>
                        <h3>Parachain de: Polkadot</h3>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.image}>
                        <Image src="/img/home/carousel/slides-images/coin.png" layout="fill" />
                    </div>
                </div>
            </main>
        </>
    );
}