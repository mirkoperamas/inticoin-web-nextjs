import React, { useState } from "react";
import classes from "./toolbar.module.css";
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
          {/* <Link href="/crowdsale">
            <a
              className={router.pathname == "/crowdsale" ? classes.active : ""}
            >
              <li>
                <p>Crowdsale</p>
              </li>
            </a>
          </Link> */}
          {/* <Link href="/call">
            <a className={router.pathname == "/call" ? classes.active : ""}>
              <li>
                <p>Swap</p>
              </li>
            </a>
          </Link> */}
          <a onClick={() => setPaper(true)}>
            <li>
              <p>Swap</p>
            </li>
          </a>
          <a onClick={() => setPaper(true)}>
            <li>
              <p>Venta NFT</p>
            </li>
          </a>
          <Link href="/about-us">
            <a className={router.pathname == "/about-us" ? classes.active : ""}>
              <li>
                <p>Acerca de</p>
              </li>
            </a>
          </Link>
          {/* <Link href="/">
            <a href="https://intichain.io/" target="_blank">
              <li id={classes.intichain}>
                <p>Intichain</p>
              </li>
            </a>
          </Link> */}
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
