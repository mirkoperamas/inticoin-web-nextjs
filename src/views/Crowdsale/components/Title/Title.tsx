import React from "react";
import classes from "./title.module.css";

export const Title = () => {
  return (
    <div className={classes.container}>
      <h2>Crowdsale</h2>
      <hr className={classes.line} />
    </div>
  );
};
