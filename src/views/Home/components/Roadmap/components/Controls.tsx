import classes from "./controls.module.scss";
import Image from "next/image";

export const Controls = ({ after, before }: any) => {
  return (
    <div className={classes.controls}>
      <button onClick={before}>
        <div className={classes.controls__leftButton}>
          <Image
            src="/img/home/carousel/arrow.png"
            width={45}
            height={45}
            alt="arrow-icon"
          />
        </div>
      </button>
      <button onClick={after}>
        <div className={classes.controls__rightButton}>
          <Image
            src="/img/home/carousel/arrow.png"
            width={45}
            height={45}
            alt="arrow-icon"
          />
        </div>
      </button>
    </div>
  );
};
