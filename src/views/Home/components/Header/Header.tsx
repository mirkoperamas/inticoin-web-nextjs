import classes from "./header.module.css";
import Image from "next/image";

export const Header = () => {
    return (
        <>
            <div className={classes.mainHeader}>
                {/* <Image src="/img/home/header-frame.png" alt="header-frame" width={5000} height={20} /> */}
                <div className={classes.headerFrames} style={{transform:'rotate(180deg)'}}></div>
                <div className={classes.headerFrames}></div>
            </div>
        </>
    );
};