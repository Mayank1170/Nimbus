"use client";
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import OracleAggregator from '../components/OracleAggregator';
import Header from '../components/Header';

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className=''>
          <Navbar onTabChange={onTabChange} />
          <OracleAggregator symbol={selectedTab} />
        </div>
      </main>
    </div>
  );
};

export default Home;
