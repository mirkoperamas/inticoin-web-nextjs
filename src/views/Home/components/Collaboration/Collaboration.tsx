import React from "react";
import { Partners } from "./components/Partners/Partners";
import { QrSection } from "./components/QrSection/QrSection";
import classes from "./collaboration.module.scss";

export const Collaboration = () => {
  return (
    <>
      <div className={classes.collaboration}>
        <div className={classes.collaboration__mainCollaboration}>
          <Partners />
        </div>
        <div className={classes.collaboration__mainQrSection}>
          <QrSection />
        </div>
      </div>
    </>
  );
};
