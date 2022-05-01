import { Footer } from "../../components/Footer/Footer";
import { Carousel } from "./components/Carousel/Carousel";
import { Collaboration } from "./components/Collaboration/Collaboration";
import { InticoinDescription } from "./components/InticoinDescription/InticoinDescription";
import { Partners } from "./components/Partners/Partners";
import { Roadmap } from "./components/Roadmap/Roadmap";
import classes from "./home.module.scss";

export const HomeView = () => {
  return (
    <div className={classes.HomeView}>
      <Carousel />
      <InticoinDescription />
      <Roadmap />
      <Partners />
      <Collaboration />
      <Footer />
    </div>
  );
};
