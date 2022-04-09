import classes from "./utility.module.css";

export const Utility = () => {
  return (
    <>
      <section className={classes.content}>
        <div className={classes.text}>
          <h2>Use su Inti</h2>
          <p>
            En enero del 2018, comienza el desarrollo de la blockchain de
            Inticoin, en el 2021 Qolkrex Foundation toma las riendas del avance
            de nuevas integraciones para admitir contratos inteligentes de alto
            rendimiento. Estamos desarrollando un futuro que permitirá a los
            desarrolladores implementar sus propias aplicaciones
            descentralizadas.
          </p>
        </div>
        <div className={classes.cardsContainer}>
          <div className={classes.card}>
            <div className={classes.cardImage} id={classes.wallet}></div>
            <p>Pague a sus amigos y familiares.</p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage} id={classes.sum}></div>
            <p>
              Pasajes aéreos, facturas de servicios públicos y suscripciones.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage} id={classes.check}></div>
            <p>Abarrotes, comida y otros.</p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage} id={classes.security}></div>
            <p>
              Inticoin está descentralizado y respaldado por su comunidad de
              entusiastas.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage} id={classes.document}></div>
            <p>
              La comunidad lo es todo e Inticoin se esfuerza por incluir a todos
              en todo el mundo.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage} id={classes.sun}></div>
            <p>En el mercado de las criptomonedas, la confianza es suprema.</p>
          </div>
        </div>
      </section>
    </>
  );
};
