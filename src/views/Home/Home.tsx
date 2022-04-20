import { Footer } from "../../components/Footer/Footer";
import { Carousel } from "./components/Carousel/Carousel";
import { InticoinDescription } from "./components/InticoinDescription/InticoinDescription";
import classes from "./home.module.css";

export const HomeView = () => {
  return (
    <div className={classes.containerInicio}>
      <Carousel />
      <InticoinDescription />
      <Footer />
    </div>
  );
};
