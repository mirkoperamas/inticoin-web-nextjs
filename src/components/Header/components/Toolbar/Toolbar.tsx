import React, { useEffect, useState } from "react";
import classes from "./toolbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Informative } from "../../../modals/Informative/Informative";

export const Toolbar = () => {
  const router = useRouter();
  const [paper, setPaper] = useState(false);
  const [lang, setLang] = useState("");

  const handleLang = () => {
    if (router.locale === "en") {
      setLang("English");
    } else if (router.locale === "es") {
      setLang("Español");
    }
  };

  useEffect(() => {
    handleLang();
  }, [lang, handleLang]);

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
              <p>Inti Wiki</p>
            </li>
          </a>
          <a
            onClick={handleLang}
            className={`${classes.active} ${classes.langStyle}`}
          >
            <li>
              <p>{lang}</p>
            </li>
          </a>

          <Link href={router.asPath} locale="es">
            <li>
              <p>Español</p>
            </li>
          </Link>
          <Link href={router.asPath} locale="en">
            <li>
              <p>English</p>
            </li>
          </Link>

          {/* <div className={classes.langs}>
            {router?.locales?.map((loc: any) => (
              <Link href={router.asPath} locale={loc} key={loc}>
                {loc}
              </Link>
            ))}
          </div> */}
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
function e(e: any) {
  throw new Error("Function not implemented.");
}
