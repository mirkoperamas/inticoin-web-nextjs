import classes from "./about-us.module.scss";

export const AboutUs = () => {
  return (
    <>
      <main className={classes.aboutUs}>
        <div className={classes.aboutUs__blackCap}></div>
        <section className={classes.aboutUs__description}>
          <h1>Plan de Desarrollo</h1>
          <div className={classes.aboutUs__descriptionText}>
            <p>
              Inticoin es un proyecto en desarrollo que utilizara la seguridad
              de UTXO al tiempo que habilita multiples maquinas virtuales,
              incluidas EVM y ARM VM. esta basado en PoS y cuenta con un
              Protocolo de Gobernanza Descentralizada (DGP) que permite
              modificar configuraciones especificas de blockchain mediante el
              uso de contratos inteligentes.
              <br />
              Como medio de recaudacion de fondos, implementamos un contrato
              inteligente en Glimmer (GLMR) para ser participes en plataformas
              de Finanzas descentralizadas (DeFi).
              <br />
              Gracias a nuestra comunidad, estamos construyendo un sistema
              financiero descentralizado más inclusivo donde más personas,
              pymes, comercios e instituciones tienen acceso a mejores servicios
              financieros más seguros. Nuestra persistencia en el avance del
              desarrollo del proyecto y gracias a la Fundación Qolkrex,
              proveedores y empresas que confían en Inticoin conseguimos un
              capital suficiente para dar inicio a nuestros objetivos. Podrán
              conseguir nuestra Token INTI en una DEX en la cadena de bloques de
              Moonbeam. El listado lo informaremos a través de nuestras redes
              sociales o grupos de comunidad, Telegram y Discord.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
