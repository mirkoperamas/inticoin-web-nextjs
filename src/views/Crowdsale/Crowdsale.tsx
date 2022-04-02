import classes from "./crowdsale.module.css";
import Image from "next/image";
import { BuyToken } from "./components/BuyToken/BuyToken";
import { Footer } from "../../components/Footer/Footer";

export const Crowdsale = () => {
    return(
        <div style={{overflow: "hidden"}}>
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
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magnam atque fugit, nesciunt culpa sapiente tempore, voluptatum perferendis blanditiis eveniet ipsam facilis beatae? Mollitia, quidem tenetur at odio inventore voluptas?
                            Cupiditate dignissimos perferendis laboriosam exercitationem harum maiores accusamus, fugit corrupti aspernatur ipsa doloribus eligendi? Vitae animi reiciendis et fugit totam, aperiam ipsum quasi dolore assumenda architecto id nisi eaque quam?</p>
                        </div>
                    </div>
                </div>
            </section>
            <BuyToken />
            <Footer />
        </div>
    );
}