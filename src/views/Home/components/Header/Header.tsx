import classes from "./header.module.css";
import Image from "next/image";

export const Header = () => {
    return (
        <>
            <div className={classes.mainHeader} style={{position: 'absolute', zIndex: '10', top: '5%'}}>
                    <div style={{position: 'absolute', width: '100vh', height: 'auto', top: '0', left: '44%'}}><Image src={"/img/home/inticoin-icon.png"} width={220} height={50}/></div>
                    {/* <div className={classes.headerFrames} style={{transform:'rotate(180deg)'}}></div> */}
                    {/* <div style={{background: 'red', width: '100%', height: '9rem', position: 'absolute', zIndex: '-1'}}></div> */}
                    {/* <div className={classes.headerFrames}></div> */}
                    <div style={{position: 'relative', width: '100%', height:'100%'}}>
                        <Image src="/img/home/header-image.png" layout="fill" objectFit="contain" priority />
                    </div>
                    
            </div>
        </>
    );
};