import classes from "./header.module.css";
import Image from "next/image";
import { Toolbar } from "./components/Toolbar/Toolbar";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header
        className={classes.root}
        style={{ backgroundImage: "url(/img/home/header-image.png)" }}
      >
        <div>
          <div className={classes.logo}>
            <Link href="/">
              <a>
                <div>
                  <Image
                    src="/img/home/inticoin-icon.png"
                    layout="fill"
                    alt="inticoin icon"
                  />
                </div>
              </a>
            </Link>
          </div>
          <Toolbar />
        </div>
      </header>
    </>
  );
};
