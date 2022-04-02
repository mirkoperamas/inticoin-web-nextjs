import { Carousel } from "./components/Carousel/Carousel";
import { Description } from "./components/Description/Description";
import classes from "./home.module.css";

export const HomeView = () => {

	return (
		<div className={classes.containerInicio}>
			<Carousel />
			<Description />
		</div>
	);
};
