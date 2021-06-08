import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Recipies</title>
        <meta name="description" content="Recipies App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Home page</h1>
        <div>
          <Link href="/recipies">Recipes Page</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
