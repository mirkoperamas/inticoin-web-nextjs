import { Carousel } from "./components/Carousel/Carousel";
import classes from "./home.module.css";

export const HomeView = () => {

	return (
		<div className={classes.containerInicio}>
			<Carousel />
		</div>
	);
};
