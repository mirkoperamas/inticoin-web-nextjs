import classes from "./about-us.module.css";
import Image from "next/image";
import { Footer } from "../../components/Footer/Footer";

export const AboutUs = () => {
  return (
    <div style={{ background: "#000" }}>
      <div className={classes.background}>
        <div>
          <Image
            src="/img/about-us/background.png"
            layout="fill"
            objectFit="cover"
            alt="about us background"
          />
        </div>
      </div>

      <main className={classes.container}>
        <div className={classes.container__description}>
          <h1>Plan de Desarrollo</h1>
          <div className={classes.description}>
            <p>
              Inticoin es un proyecto en desarrollo que utilizara la seguridad
              de UTXO al tiempo que habilita multiples maquinas virtuales,
              incluidas EVM y ARM VM. esta basado en PoS y cuenta con un
              Protocolo de Gobernanza Descentralizada (DGP) que permite
              modificar configuraciones especificas de blockchain mediante el
              uso de contratos inteligentes.
            </p>
            <p>
              Coo medio de recaudacion de fondos, implementamos un contrato
              inteligente en la Binance Smart Chain (BSC) para ser participes en
              plataformas de Finanzas descentralizadas (DeFi).
              <p>
                Gracias a nuestra comunidad, estamos construyendo un sistema
                financiero descentralizado más inclusivo donde más personas,
                pymes, comercios e instituciones tienen acceso a mejores
                servicios financieros más seguros. Nuestra persistencia en el
                avance del desarrollo del proyecto y gracias a la Fundación
                Qolkrex, proveedores y empresas que confían en Inticoin
                conseguimos un capital suficiente para dar inicio a nuestros
                objetivos. Podrán conseguir nuestra Token INTI en una DEX en la
                cadena de bloques de Moonbeam. El listado lo informaremos a
                través de nuestras redes sociales o grupos de comunidad,
                Telegram y Discord.
              </p>
            </p>
          </div>
        </div>
        <div className={classes.container__header}>
          <Footer />
        </div>
      </main>
    </div>
  );
};
