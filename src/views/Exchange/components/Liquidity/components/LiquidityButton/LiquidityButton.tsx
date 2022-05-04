import classes from "./liquidity-button.module.scss";
import { useState } from "react";
import { Informative } from "../../../../../../components/modals/Informative/Informative";

export const LiquidityButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.liquidityButton}>
        <button
          className={classes.liquidityButton__design}
          onClick={() => setOpen(true)}
        >
          <p>Liquidity</p>
        </button>
      </div>

      {open && (
        <Informative handleClose={() => setOpen(false)}>
          <h5>Liquidity</h5>
          <hr />
          <p>
            Todos nuestros intercambios por ahora se realizan en zenlink DEX
            hasta nuestra APIsgiot personalizada.
          </p>
          <div className={classes.modalButton}>
            <a
              href="https://dex.zenlink.pro/#/swap"
              target="blank"
              rel="noreferrer noopener"
            >
              <button type="button">Ir a Zenlink</button>
            </a>
          </div>
        </Informative>
      )}
    </>
  );
};
