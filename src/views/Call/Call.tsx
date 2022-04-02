import { Footer } from "../../components/Footer/Footer";
import classes from "./call.module.css";
import { Roadmap } from "./components/Roadmap/Roadmap";
import { Tokenomics } from "./components/Tokenomics/Tokenomics";

export const Call = () => {
    return(
        <div style={{overflow: 'hidden'}}>
            <section className={classes.contain}>
                <div style={{width: '100vw', height: 'calc(100vh - 15rem)', fontSize: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    PLAN DE DESARROLLO
                </div>
            </section>
            <Tokenomics />
            <Roadmap />
            <Footer />
        </div>
    );
}