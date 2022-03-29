import "../styles/normalize.css";
import "../styles/globals.css";
import { Provider } from "../Provider";
import type { AppProps } from "next/app";
import { Updaters } from "../Index";
import { Header } from "../components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Updaters>
			<Provider>
				<Header />
				<Component {...pageProps} />
			</Provider>
		</Updaters>
	);
}

export default MyApp;
