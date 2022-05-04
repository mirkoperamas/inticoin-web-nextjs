import React, { useState } from "react";
import classes from "./inti-nft.module.scss";
import Image from "next/image";
import { Informative } from "../../components/modals/Informative/Informative";
import { MintNFTMobile } from "./components/MintNftMobile/MintNFTMobile";
import { MintNFT } from "./components/MintNFT/MintNFT";

export const IntiNFT = () => {
  const [paper, setPaper] = useState(false);

  return (
    <>
      <main className={classes.intiNft}>
        <div className={classes.intiNftContent}>
          <div className={classes.intiNftContent__inicio}>
            <h2>Intis Nft's</h2>
            <h4 onClick={() => setPaper(true)}>
              Sobre la coleccion de Intis...
            </h4>

            <p>
              Puedes unirte a nuestros grupos de{" "}
              <a href="https://t.me/inticoin" target="_blank">
                Telegram
              </a>{" "}
              y{" "}
              <a href="https://discord.gg/usCCHykVSS" target="_blank">
                Discord
              </a>{" "}
              para no perderte ninguna novedad.
            </p>
            <section className={classes.intiNftContent__inicioMint}>
              <MintNFT />
            </section>
          </div>

          <div className={classes.intiNftContent__graphic}>
            <div className={classes.intiNftContent__graphicFrame}>
              <Image
                src="/img/inti-nft/image-inti.png"
                alt="image inti"
                layout="responsive"
                width={50}
                height={50}
              />
            </div>
          </div>

          <section className={classes.intiNftContent__mintMobile}>
            <MintNFTMobile />
          </section>
        </div>
      </main>

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
