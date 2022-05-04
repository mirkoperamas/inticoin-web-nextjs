import React from "react";
import classes from "./install-button.module.scss";
import { useState } from "react";
import { Informative } from "../../../../../../../../../components/modals/Informative/Informative";

export const InstallButton = ({ setPaper }: any) => {
  // const [paper, setPaper] = useState(false);

  return (
    <>
      <a onClick={() => setPaper(true)}>
        <button className={classes.button}>Instala tu billetera virtual</button>
      </a>
      {/* {paper && (
        <Informative handleClose={() => setPaper(false)}>
          <span>
            <h2>Proximamente...</h2>
          </span>
        </Informative>
      )} */}
    </>
  );
};
