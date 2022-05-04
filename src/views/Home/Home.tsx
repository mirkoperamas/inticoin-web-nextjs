import { useEffect, useState } from "react";
import { Informative } from "../../components/modals/Informative/Informative";
import { Carousel } from "./components/Carousel/Carousel";
import { Collaboration } from "./components/Collaboration/Collaboration";
import { InticoinDescription } from "./components/InticoinDescription/InticoinDescription";
import { Partners } from "./components/Partners/Partners";
import { Roadmap } from "./components/Roadmap/Roadmap";
import classes from "./home.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export const HomeView = () => {
  const [paper, setPaper] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={classes.HomeView}>
        <Carousel setPaper={setPaper} />
        <InticoinDescription setPaper={setPaper} />
        <Roadmap />
        <Partners />
        <Collaboration />
      </div>
      {paper && (
        <Informative handleClose={() => setPaper(false)}>
          <span>
            <h2>Proximamente...</h2>
          </span>
        </Informative>
      )}
    </>
  );
};
