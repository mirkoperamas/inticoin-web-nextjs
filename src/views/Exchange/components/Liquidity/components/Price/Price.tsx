import classes from "./price-result.module.scss";

export const Price = () => {
  return (
    <div className={classes.price}>
      <div className={classes.price__content}>
        <p>Tasa actual:</p>
        <span>0.0 </span>
      </div>
      <hr />
    </div>
  );
};
