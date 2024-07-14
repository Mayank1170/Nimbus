"use client";
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Navbar } from '../components/CoinNav';
import OracleAggregator from '../components/OracleAggregator';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState<
    "BTC" | "SOL" | "JUP" | "BONK" | "PYTH" | "INF"
  >("BTC");

  const onTabChange = (
    selectedTab: "BTC" | "SOL" | "JUP" | "BONK" | "PYTH" | "INF"
  ) => {
    setSelectedTab(selectedTab);
  };

  return (
    <div>
      <Head>
        <title>Oracle Aggregator</title>
        <meta name="description" content="Oracle Aggregator using Pyth" />
        <link
          rel="shortcut icon"
          href="../public/Logo.svg"
          type="image/x-icon"
        />
      </Head>
      <main className=''>
        <Header />
        <div className=''>
          <Navbar onTabChange={onTabChange} />
          <OracleAggregator symbol={selectedTab} />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
