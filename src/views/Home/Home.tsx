import { EmblaCarousel } from "./components/Carousel/Carousel";
import { Header } from "./components/Header/Header";
import classes from "./home.module.css";

export const HomeView = () => {

	return (
		<div className={classes.containerInicio}>
			{/* <div>
                Hello world
            </div> */}
			<Header />
			<EmblaCarousel />
		</div>
	);
};
