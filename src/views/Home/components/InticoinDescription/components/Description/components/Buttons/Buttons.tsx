import React, { useState } from "react";
import { Informative } from "../../../../../../../../components/modals/Informative/Informative";
import classes from "./buttons.module.scss";

export const Buttons = () => {
  const [contract, setContract] = useState(false);
  const [paper, setPaper] = useState(false);

  const contractCopy = () => {
    navigator.clipboard.writeText("123456");
    setContract(false);
  };

  return (
    <>
      <button className={classes.button} onClick={() => setPaper(true)}>
        Copiar Contrato
      </button>
      <button className={classes.button} onClick={() => setPaper(true)}>
        Inti Papper
      </button>

      {contract && (
        <Informative handleClose={() => setContract(false)}>
          <h5>Copiar contrato</h5>
          <hr></hr>
          <p>123456</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button type="button" onClick={contractCopy}>
              Copiar
            </button>
          </div>
        </Informative>
      )}

      {paper && (
        <Informative handleClose={() => setPaper(false)}>
          <span>
            <h2>Proximamente...</h2>
          </span>
        </Informative>
      )}
    </>
  );
};
