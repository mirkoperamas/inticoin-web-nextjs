import Image from "next/image";
import { Buttons } from "./components/Buttons/Buttons";
import classes from "./first-slide.module.css";

export const FirstSlide = () => {
    return(
        <>
        <div className={classes.background}>
            <div>
                <Image src="/img/home/carousel/banner-1.jpg" layout="fill" objectFit="cover" priority />
            </div>
        </div>
            <main className={classes.contain}>
                <div className={classes.column}>
                    <div className={classes.text}>
                        <h1>Instala tu billetera y recibe Inticoin's</h1>
                        <h3>Participa desde ahora con nuestro desarrollo.</h3>
                        <div className={classes.buttonBox}>
                            <h4>
                                Instala tu billetara virtual...
                            </h4>
                        </div>
                        <div className={classes.buttonBox}>
                            <Buttons />
                        </div>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.image}>
                        <Image src="/img/home/carousel/slides-images/character-1.png" layout="fill" priority />
                    </div>
                </div>
            </main>
        </>
    );
}