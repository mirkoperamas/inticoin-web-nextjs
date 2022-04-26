import { Footer } from "../../components/Footer/Footer";
import { Carousel } from "./components/Carousel/Carousel";
import { InticoinDescription } from "./components/InticoinDescription/InticoinDescription";
import { Roadmap } from "./components/Roadmap/Roadmap";
import classes from "./home.module.scss";

export const HomeView = () => {
  return (
    <div className={classes.HomeView}>
      <Carousel />
      <Roadmap />
      <InticoinDescription />
      <Footer />
    </div>
  );
};
