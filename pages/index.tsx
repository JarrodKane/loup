import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Recipies</title>
        <meta name="description" content="Recipies App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page></Page>
    </div>
  );
};

export default Home;
