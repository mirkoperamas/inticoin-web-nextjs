import Image from "next/image";
import classes from "./first-slide.module.css";

export const FirstSlide = () => {
    return(
        <>
            <Image src="/img/home/carousel/banner-1.jpg" layout="fill" priority />
            <main className={classes.contain}>
                <div className={classes.column}>
                    <div className={classes.text}>
                        <h1>Instala tu billetera y recibe Inticoin's</h1>
                        <h3>Participa desde ahora con nuestro desarrollo.</h3>
                        <div>Instala tu billetera virtual</div>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.image}>
                        <Image src="/img/home/carousel/slides-images/character-1.png" layout="fill" />
                    </div>
                </div>
            </main>
        </>
    );
}