import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./header-mobile.module.scss";
import { Informative } from "../modals/Informative/Informative";

export const HeaderMobile = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<any>(null);
  const [paper, setPaper] = useState(false);

  useEffect(() => {
    isMounted
      ? ref.current?.classList.add(classes.visible)
      : ref.current?.classList.remove(classes.visible);
  }, [isMounted]);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__menu}>
          <div>
            <div className={classes.header__menuMenuIcon}>
              <Image
                src="/img/header/header-icon.svg"
                alt="logo"
                width={5}
                height={5}
                layout="responsive"
                onClick={() => setIsMounted((vis) => !vis)}
              />
            </div>

            <div className={classes.header__menuLogoIcon}>
              <Link href="/">
                <a>
                  <Image
                    src="/img/inticoin-icon.svg"
                    alt="Firulaix"
                    width={200}
                    height={50}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div ref={ref} className={`${classes.header__links}`}>
          <ul>
            <li>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/swap">
                <a>Swap</a>
              </Link>
            </li>
            <li>
              <Link href="/inti-nft">
                <a>Venta NFT</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a>Acerca de</a>
              </Link>
            </li>
            <li>
              <a onClick={() => setPaper(true)}>Inti</a>
            </li>
          </ul>
        </div>
      </header>
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
