import classes from "./about-us.module.css";
import Image from "next/image";

export const AboutUs = () => {
    return(
        <div style={{background: '#000'}}>
            <div className={classes.background}>
                <div>
                    <Image src="/img/about-us/background.png" layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className={classes.container}>
                <h1>Que es Inticoin?</h1>
                <div className={classes.description}>
                    <p>Inticoin es un proyecto en desarrollo que utilizara la seguridad de UTXO al tiempo que habilita multiples maquinas virtuales, incluidas EVM y ARM VM. esta basado en PoS y cuenta con un Protocolo de Gobernanza Descentralizada (DGP) que permite modificar configuraciones especificas de blockchain mediante el uso de contratos inteligentes.</p>
                    <p>Coo medio de recaudacion de fondos, implementamos un contrato inteligente en la Binance Smart Chain (BSC) para ser  participes en plataformas de Finanzas descentralizadas (DeFi).</p>
                </div>
            </div>
        </div>
    );
}