import type { NextPage } from 'next';
import Head from 'next/head';
import OracleAggregator from '../components/OracleAggregator';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DeFi Oracle Aggregator</title>
        <meta name="description" content="Oracle Aggregator using Pyth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>DeFi Oracle Aggregator</h1>
        <OracleAggregator />
      </main>
    </div>
  );
};

export default Home;