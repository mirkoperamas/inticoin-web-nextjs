import classes from "./roadmap.module.css";
import Image from "next/image";

export const Roadmap = () => {
    return(
        <>
            <section style={{width: '100%', height: '100vh', position: 'relative'}}>
                <div style={{width: '100%', height: '100vh', position: 'absolute'}}>
                    <div style={{width: '100%', height: '100vh', position: 'relative'}}>
                        <Image src="/img/call/roadmap.png" layout="fill" objectFit="cover" />    
                    </div>
                </div>
                <div style={{position: 'relative', width: '100%',  height: '100vh', margin: '0', overflow: 'hidden', display: "flex", justifyContent: 'center', alignItems: 'center', }}>
                        <h1>Proximamente...</h1>
                </div>
            </section>
        </>
    );
}