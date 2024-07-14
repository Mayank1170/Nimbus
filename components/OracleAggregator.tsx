"use client";
import React, { useState, useCallback } from 'react';
import SwitchboardOracle from './SwitchboardOracle';
import PythOracle from './PythOracle';
import { SymbolType } from '../constants';
import { Chart } from './Chart';

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
    <div className='flex mt-5 gap-4 mx-4'>
      <div className='w-[50%] p-[40px] flex flex-col gap-5 rounded-xl bg-[#DBC9BC]' style={{ boxShadow: "inset 2px 2px 5px 2px #000", backgroundColor: "#1F2025" }} >
        <div className=' h-[50px] flex items-center'>
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
        <div className='flex flex-col gap-5 mt-[30px]'>
          <SwitchboardOracle symbol={symbol} onPriceUpdate={updateSwitchboardPrice} />
          <PythOracle symbol={symbol} onPriceUpdate={updatePythPrice} />
        </div>

      </div>
      <div className='w-[50%] h-[60vh]'>
        <Chart symbol={symbol} />
      </div>
    </div>
  );
};

export default OracleAggregator;
