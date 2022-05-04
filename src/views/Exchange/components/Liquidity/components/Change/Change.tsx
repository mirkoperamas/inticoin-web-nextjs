import Image from "next/image";
import classes from "./change-button.module.scss";

export const Change = () => {
  return (
    <div className={classes.change}>
      <Image src="/img/swap/add.png" width={60} height={60} alt="change" />
    </div>
  );
};
