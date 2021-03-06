import React, { useState } from "react";
import classes from "./inti-nft.module.scss";
import Image from "next/image";
import { Informative } from "../../components/modals/Informative/Informative";
import { MintNFTMobile } from "./components/MintNftMobile/MintNFTMobile";
import { MintNFT } from "./components/MintNFT/MintNFT";
import { useTranslate } from "../../hooks/useTranslate";

export const IntiNFT = () => {
  const [paper, setPaper] = useState(false);
  const { t } = useTranslate();
  return (
    <>
      <div className={classes.intiNft__blackCap}></div>
      <main className={classes.intiNft}>
        <div className={classes.intiNftContent}>
          <div className={classes.intiNftContent__inicio}>
            <h2>Intis Nft's</h2>
            <h4 onClick={() => setPaper(true)}>{t.intiNft.subtitle}</h4>

            <p>
              {t.intiNft.paragraphOne}{" "}
              <a href="https://t.me/inticoin" target="_blank">
                Telegram
              </a>{" "}
              {t.intiNft.paragraphLetter}{" "}
              <a href="https://discord.gg/usCCHykVSS" target="_blank">
                Discord
              </a>{" "}
              {t.intiNft.paragraphTwo}
            </p>
            <section className={classes.intiNftContent__inicioMint}>
              <MintNFT />
            </section>
          </div>

          <div className={classes.intiNftContent__graphic}>
            <div className={classes.intiNftContent__graphicFrame}>
              <Image
                src="/img/inti-nft/nft-gif.gif"
                alt="image inti"
                layout="responsive"
                width={45}
                height={50}
              />
              {/* <video
                src="/img/inti-nft/nft-gif.mp4"
                width="100%"
                height="100%"
                autoPlay={true}
                loop
                // controls
              ></video> */}
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
