import { Provider } from "../Provider";
import type { AppProps } from "next/app";
import { Updaters } from "../Index";
import { Header } from "../components/Header/Header";
import "/src/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Updaters>
      <Provider>
        <div style={{ minWidth: "295px" }}>
          <Header />
          <Component {...pageProps} />
        </div>
      </Provider>
    </Updaters>
  );
}

export default MyApp;
