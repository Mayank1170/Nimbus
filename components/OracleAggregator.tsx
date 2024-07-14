"use client";
import React, { useState, useCallback } from 'react';
import SwitchboardOracle from './SwitchboardOracle';
import PythOracle from './PythOracle';
import { SymbolType, priceIds } from '../constants';
import { Chart } from './Chart';

// Import logos dynamically
import btcLogo from "../public/CoinLogos/BitcoinLogo.png"
import solLogo from '../public/CoinLogos/SolanaLogo.png';
import pythLogo from '../public/CoinLogos/PythLogo.png';
import jupLogo from '../public/CoinLogos/JupLogo.png';
import bonkLogo from '../public/CoinLogos/BonkLogo.png';
import infLogo from '../public/CoinLogos/InfLogo.png';
import Image, { StaticImageData } from 'next/image';

// Define a map to match symbol with logo
const symbolToLogo: Record<SymbolType, StaticImageData> = {
  BTC: btcLogo,
  SOL: solLogo,
  PYTH: pythLogo,
  JUP: jupLogo,
  BONK: bonkLogo,
  INF: infLogo,
};
interface OracleAggregatorProps {
  symbol: SymbolType;
}

const OracleAggregator: React.FC<OracleAggregatorProps> = ({ symbol }) => {
  const [switchboardPrice, setSwitchboardPrice] = useState<number | undefined>(undefined);
  const [pythPrice, setPythPrice] = useState<number | undefined>(undefined);

  const updateSwitchboardPrice = useCallback((price: number | undefined) => {
    setSwitchboardPrice(price);
  }, []);

  const updatePythPrice = useCallback((price: number | undefined) => {
    setPythPrice(price);
  }, []);

  const calculateAggregatedPrice = () => {
    if (switchboardPrice !== undefined && pythPrice !== undefined) {
      return (switchboardPrice + pythPrice) / 2;
    }
    return undefined;
  };

  const aggregatedPrice = calculateAggregatedPrice();

  return (
    <div className='lg:h-[60vh] h-full flex lg:flex-row flex-col mt-3 gap-4 mx-4'>
      <div className=' relative overflow-hidden lg:w-[50%] p-[40px] flex flex-col gap-5 rounded-xl bg-[#DBC9BC]' style={{ boxShadow: "inset 2px 2px 5px 2px #000", backgroundColor: "#1F2025" }} >
        <div className=' h-[50px] flex items-center'>
          <Image src={symbolToLogo[symbol]} alt={`${symbol} Logo`} className="h-[40px] w-[50px] mr-[20px]" />
          <h1 className='text-[30px] font-bold text-[#E9C7A5]'>{symbol}/USD</h1>
        </div>
        <div>
          <h3>Aggregated Price</h3>
          {aggregatedPrice !== undefined ? (
            <p className='text-4xl text-[#ea8977] font-bold'>${aggregatedPrice.toFixed(10)}</p>
          ) : (
            <p className='text-4xl text-[#ea8977] font-bold'>Calculating...</p>
          )}
        </div>
        <div className='flex z-50 flex-col gap-5 mt-[30px]'>
          <SwitchboardOracle symbol={symbol} onPriceUpdate={updateSwitchboardPrice} />
          <PythOracle symbol={symbol} onPriceUpdate={updatePythPrice} />
        </div>
        <Image src={symbolToLogo[symbol]} alt={`${symbol} Logo`} className="absolute bottom-[-150px] right-[-200px] h-[400px] w-[500px] mr-[20px]" />

      </div>
      <div className='lg:w-[50%] h-[60vh] '>
        <Chart symbol={symbol} />
      </div>
    </div>
  );
};

export default OracleAggregator;
