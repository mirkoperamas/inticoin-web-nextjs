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
				<title>Inticoin - Inti + Coin = Inticoin</title>
				<meta name="title" content="Inticoin - Inti + Coin = Inticoin" />
				<meta
					name="description"
					content="INNNNNNNNNNNNNNNNNNNTIIIIIIIIIIIIIIIIICOOOOOOOOOOOOOOOOOOIIIIIIIIIIIIIIIIIINN"
				/>
			</Head>
			{!loading && <Loader coin={true}  setLoading={setLoading} />}
			<HomeView />
		</>
	);
};

export default Home;
