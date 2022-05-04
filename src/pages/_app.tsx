import { Provider } from "../Provider";
import type { AppProps } from "next/app";
import { Updaters } from "../Index";
import { Header } from "../components/Header/Header";
import "/src/styles.scss";
import { Footer } from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Updaters>
      <Provider>
        <div style={{ minWidth: "295px" }}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </Updaters>
  );
}

export default MyApp;
