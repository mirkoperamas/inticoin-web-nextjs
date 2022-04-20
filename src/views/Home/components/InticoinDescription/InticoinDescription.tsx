import classes from "./inticoin-description.module.css";
import Image from "next/image";
import { Description } from "./components/Description/Description";
import { WalletValues } from "./components/WalletValues/WalletValues";
import { Avatar } from "./components/Avatar/Avatar";

export const InticoinDescription = () => {
  return (
    <div
      style={{ background: "#000", position: "relative", overflow: "hidden" }}
    >
      <div className={classes.background}>
        <div>
          <Image
            src="/img/about-us/background.png"
            layout="fill"
            objectFit="cover"
            alt="about us background"
          />
        </div>
      </div>
      <Description />
      <WalletValues />
      <Avatar />
    </div>
  );
};
