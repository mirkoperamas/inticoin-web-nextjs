import React from "react";
import classes from "./inti-nft.module.css";
import Image from "next/image";
import { MintNFT } from "./components/MintNFT/MintNFT";

export const IntiNFT = () => {
  return (
    <>
      <div style={{ background: "#000" }}>
        <div className={classes.background}>
          <div>
            <Image
              src="/img/inti-nft/background.jpg"
              layout="fill"
              objectFit="cover"
              alt="background"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          overflow: "hidden",
        }}
      >
        <MintNFT />
      </div>
    </>
  );
};
