import Image from "next/image";
import React from "react";
import classes from "./avatar.module.css";

export const Avatar = () => {
  return (
    <div className={classes.aboutUs__avatar}>
      <div>
        <Image
          src="/img/about-us/avatar.png"
          layout="responsive"
          width={50}
          height={65}
        />
      </div>
    </div>
  );
};
