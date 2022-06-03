import React from "react";
import { useTranslate } from "../../../../hooks/useTranslate";
import classes from "./mint-nft.module.scss";

export const MintNFT = () => {
  const { t } = useTranslate();
  return (
    <>
      <div className={classes.mintNft}>
        <div className={classes.mintNft__blackCap}></div>
        <h1>{t.mintNft.title}</h1>
      </div>
    </>
  );
};
