import classes from "./header.module.css";
import Image from "next/image";

export const Header = () => {
    return (
        <>
            <div className={classes.mainHeader}>
                {/* <Image src="/img/home/header-frame.png" alt="header-frame" width={5000} height={20} /> */}
                {/* <div className=""></div> */}

                <div style={{position: 'absolute', width: '100vh', height: 'auto', top: '0', left: '44%', zIndex: '100'}}><Image src={"/img/home/inticoin-icon.png"} width={220} height={50}/></div>
                <div className={classes.headerFrames} style={{transform:'rotate(180deg)'}}></div>
                <div className={classes.headerFrames}></div>
            </div>
        </>
    );
};