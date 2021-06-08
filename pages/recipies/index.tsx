import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

// API
import { getRecipies } from "../../apis/recipie";

// Components
import Layout from "../../components/templates/Layout";

const Recipies = () => {
  const [recipies, setRecipies] = useState();

  const callRecipies = async () => {
    const data = await getRecipies();
    console.log(data);
  };

  // Using useEffect to just call the data on first load of this page, could have used callStaicProps since this is a Next.js but decided to go with this for now
  useEffect(() => {
    callRecipies();
  }, []);

  return (
    <div>
      <Head>
        <title>Recipies</title>
        <meta name="description" content="Recipies App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>asdasd</Layout>
    </div>
  );
};

export default Recipies;
