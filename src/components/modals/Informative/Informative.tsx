import classes from "./informative.module.scss";
// import { useStyle } from "../../../hooks/useStyle";

interface IInformative {
  children: React.ReactNode;
  w?: number;
  handleClose: () => void;
}

export const Informative = ({ children, w = 0, handleClose }: IInformative) => {
  // const { width } = useStyle();
  return (
    <div className={classes.modal}>
      <div className={classes.modalDialog} onClick={handleClose}></div>
      <div className={classes.flex}>
        {/* <div className={classes.content} style={w > 0 ? width(w) : width(2.5)}> */}
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};
