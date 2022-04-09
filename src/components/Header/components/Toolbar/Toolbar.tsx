import classes from "./toolbar.module.css";
import Link from "next/link";

export const Toolbar = () => {
  return (
    <>
      <div className={classes.toolbar}>
        <ul>
          <Link href="/">
            <a>
              <li>
                <p>Inicio</p>
              </li>
            </a>
          </Link>
          <Link href="/crowdsale">
            <a>
              <li>
                <p>Crowdsale</p>
              </li>
            </a>
          </Link>
          <Link href="/call">
            <a>
              <li>
                <p>Convocatoria</p>
              </li>
            </a>
          </Link>
          <Link href="/about-us">
            <a>
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
    </>
  );
};
