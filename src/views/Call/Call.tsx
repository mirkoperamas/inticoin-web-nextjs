import { Footer } from "../../components/Footer/Footer";
import classes from "./call.module.css";
import { Plan } from "./components/Plan/Plan";
import { Roadmap } from "./components/Roadmap/Roadmap";
import { Title } from "./components/Title/Title";
import { Tokenomics } from "./components/Tokenomics/Tokenomics";

export const Call = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Title />
      <Plan />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
};
