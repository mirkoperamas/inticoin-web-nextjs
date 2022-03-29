import classes from "./controls.module.css";
import Image from "next/image";

export const Controls = ({after, before}:any) => {
  return (
    <div className={classes.controls}>
      <button onClick={before}>
        <div className={classes.beforeButton}>
          <Image src="/img/home/carousel/arrow.png" width={65} height={65} />
        </div>
      </button>
      <button onClick={after}>
        <div className={classes.AfterButton}>
          <Image src="/img/home/carousel/arrow.png" width={65} height={65} />
        </div>
      </button>
    </div>
  );
};
