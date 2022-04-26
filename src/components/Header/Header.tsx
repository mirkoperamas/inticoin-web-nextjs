import classes from "./header.module.scss";
import Image from "next/image";
import { Toolbar } from "./components/Toolbar/Toolbar";
import Link from "next/link";
import { HeaderMobile } from "../HeaderMobile/HeaderMobile";

export const Header = () => {
  return (
    <>
      <HeaderMobile />
      <header className={classes.header}>
        <div>
          <div className={classes.header__logo}>
            <Link href="/">
              <a>
                <Image
                  src="/img/inticoin-icon.svg"
                  layout="responsive"
                  width={50}
                  height={10}
                  alt="inticoin-icon"
                />
              </a>
            </Link>
          </div>
          <Toolbar />
        </div>
      </header>
    </>
  );
};
