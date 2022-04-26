// import { NFTCard } from "./components/NFTCard/NFTCard";
import Image from "next/image";
import classes from "./mint-nft.module.css";
import { useState } from "react";
import { Informative } from "../../../../components/modals/Informative/Informative";

export const MintNFT = () => {
  const [paper, setPaper] = useState(false);

  return (
    <>
      <div className={classes.mintContainer}>
        <div className={classes.mintColumns}>
          <div className={classes.firstColumn}>
            <div className={classes.mintTitle}>
              <h2 style={{ fontSize: `30px` }}>INTIS NFT's</h2>
              <strong>
                <p
                  style={{ fontSize: `15px`, cursor: "pointer" }}
                  onClick={() => setPaper(true)}
                >
                  Sobre la coleccion de Intis...
                </p>
              </strong>

              <p style={{ fontSize: `16px` }}>
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
            </div>

            <div className={classes.noConnect}>
              <h1 style={{ fontSize: `45px` }}>
                Pronto estara disponible nuestra coleccion de Intis ...
              </h1>
            </div>
          </div>

          <div className={classes.gifColumn}>
            <div className={classes.gifFrame}>
              <Image
                src="/img/inti-nft/image-inti.png"
                alt="image inti"
                layout="responsive"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
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
