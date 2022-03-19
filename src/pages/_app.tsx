import "../styles/normalize.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../Provider";

import type { AppProps } from "next/app";
import { Updaters } from "../Index";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Updaters>
			<Provider>
				<Component {...pageProps} />
			</Provider>
		</Updaters>
	);
}

export default MyApp;
