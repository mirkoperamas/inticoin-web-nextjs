import Image from "next/image";

export const Tokenomics = () => {
    return(
        <>
            <section style={{width: '100%', height: '100vh', position: 'relative'}}>
                <Image src="/img/call/tokenomics.png" layout="fill" objectFit="cover" />    
            </section>
        </>
    );
}