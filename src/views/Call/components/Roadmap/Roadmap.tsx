import classes from "./roadmap.module.css";
import Image from "next/image";

export const Roadmap = () => {
  return (
    <>
      <section style={{ width: "100%", height: "100vh", position: "relative" }}>
        <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
          <div style={{ width: "100%", height: "100vh", position: "relative" }}>
            <Image
              src="/img/call/roadmap.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};
