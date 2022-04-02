import Image from "next/image";
import classes from "./second-slide.module.css";

export const SecondSlide = () => {
    return(
        <>
            <div className={classes.background}>
                <div>
                    <Image src="/img/home/carousel/banner-2.jpg" layout="fill" objectFit="cover" />
                </div>
            </div>
            <main className={classes.contain}>
                <div className={classes.column}>
                    <div className={classes.text}>
                        <h3>Estas en el mejor momento para que puedas comprar tus</h3>
                        <h1>Inticoin's</h1>
                    </div>
                </div>
                <div className={classes.column}>
                    <div className={classes.image}>
                        <Image src="/img/home/carousel/slides-images/character-2.png" layout="fill" priority />
                    </div>
                </div>
            </main>
        </>
    );
}