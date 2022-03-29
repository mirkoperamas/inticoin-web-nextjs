import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Loader } from "../components/Loader/Loader";
import { HomeView } from "../views/Home/Home";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Head>
        <title>Inticoin - Official Site</title>
        <meta name="title" content="Inticoin" />
        <meta
          name="description"
          content="Inticoin gives you the freedom to move your money the way you want. Inticoin moves money anywhere, to anyone, instantly, for less than a penny."
        />
        <meta
          name="description"
          content="As a means of fundraising, we implement a smart contract on Glimmer to be participants in decentralized Finance platforms (DeFi).."
        />
      </Head>
      {!loading && <Loader coin={true} setLoading={setLoading} />}
      <HomeView />
    </>
  );
};

export default Home;
