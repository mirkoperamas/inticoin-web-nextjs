import classes from "./about-us.module.css";
import Image from "next/image";
import { Buttons } from "./components/Description/components/Buttons/Buttons";
import { Description } from "./components/Description/Description";
import { WalletValues } from "./components/WalletValues/WalletValues";
import { Avatar } from "./components/Avatar/Avatar";

export const AboutUs = () => {
  return (
    <div style={{ background: "#000" }}>
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
