import classes from "./inticoin-description.module.scss";
import { Description } from "./components/Description/Description";
import { WalletValues } from "./components/WalletValues/WalletValues";
import { Avatar } from "./components/Avatar/Avatar";

export const InticoinDescription = () => {
  return (
    <div className={classes.background}>
      <Description />
      <WalletValues />
      <Avatar />
    </div>
  );
};
