import classes from "./loader.module.scss";
import { useEffect, useState } from "react";

export const Loader = ({ coin = false, setLoading }: any) => {
  const [loader, setLoader] = useState({ opacity: 1, zIndex: 100000 });

  useEffect(() => {
    setTimeout(
      () => {
        setLoader({ opacity: 0, zIndex: 100000 });
        setTimeout(
          () => {
            setLoading(true);
          },
          coin ? 1500 : 500
        );
      },
      coin ? 1500 : 500
    );
  }, [coin, setLoading]);

  return (
    <div
      className={classes.loader}
      style={{ zIndex: loader.zIndex, opacity: loader.opacity }}
    >
      {coin && (
        <div className={classes.circle}>
          <div className={classes.circleImg}></div>
        </div>
      )}
    </div>
  );
};
