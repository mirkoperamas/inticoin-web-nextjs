import classes from "./information-frame.module.scss";

export const InformationFrame = () => {
  return (
    <div className={classes.informationFrame}>
      <p>
        Consejo: cuando agrega liquidez, recibirá tokens de grupo que
        representan su posición. Estos tokens ganan automáticamente tarifas
        proporcionales a su parte del grupo y se pueden canjear en cualquier
        momento.
      </p>
    </div>
  );
};
