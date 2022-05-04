import classes from "./inticoin-description.module.scss";
import { Description } from "./components/Description/Description";
import { WalletValues } from "./components/WalletValues/WalletValues";
import { Avatar } from "./components/Avatar/Avatar";

export const InticoinDescription = ({ setPaper }: any) => {
  return (
    <div className={classes.background}>
      <Description setPaper={setPaper} />
      <WalletValues />
      <Avatar />
    </div>
  );
};
