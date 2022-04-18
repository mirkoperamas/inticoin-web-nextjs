import classes from "./buy-token.module.css";
import Image from "next/image";

export const BuyToken = () => {
  return (
    <>
      <section
        style={{ width: "100vw", height: "100vh", position: "relative" }}
      >
        <Image
          src="/img/crowdsale/buytoken.png"
          layout="fill"
          objectFit="cover"
          alt="buytoken"
        />
      </section>
    </>
  );
};
