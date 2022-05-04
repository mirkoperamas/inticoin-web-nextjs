import React, { useState } from "react";
import classes from "./toolbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Informative } from "../../../modals/Informative/Informative";

export const Toolbar = () => {
  const router = useRouter();
  const [paper, setPaper] = useState(false);

  return (
    <>
      <div className={classes.toolbar}>
        <ul>
          <Link href="/">
            <a className={router.pathname == "/" ? classes.active : ""}>
              <li>
                <p>Inicio</p>
              </li>
            </a>
          </Link>
          <Link href="/exchange">
            <a className={router.pathname == "/exchange" ? classes.active : ""}>
              <li>
                <p>Exchange</p>
              </li>
            </a>
          </Link>
          <Link href="/inti-nft">
            <a className={router.pathname == "/inti-nft" ? classes.active : ""}>
              <li>
                <p>Venta NFT</p>
              </li>
            </a>
          </Link>
          <Link href="/about-us">
            <a className={router.pathname == "/about-us" ? classes.active : ""}>
              <li>
                <p>Acerca de</p>
              </li>
            </a>
          </Link>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>Inti</p>
            </li>
          </a>
        </ul>
      </div>

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
