import React from "react";
import { useTranslate } from "../../../../../../../../../hooks/useTranslate";
import classes from "./install-button.module.scss";

export const InstallButton = ({ setPaper }: any) => {
  const { t } = useTranslate();
  return (
    <>
      <a onClick={() => setPaper(true)}>
        <button className={classes.button}>
          {t.carousel.firstSlide.button}
        </button>
      </a>
    </>
  );
};
