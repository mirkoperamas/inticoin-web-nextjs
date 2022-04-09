import { BuyToken } from "./components/BuyToken/BuyToken";
import { Footer } from "../../components/Footer/Footer";
import { Title } from "./components/Title/Title";
import { Description } from "./components/Description/Description";

export const Crowdsale = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Title />
      <Description />
      <BuyToken />
      <Footer />
    </div>
  );
};
