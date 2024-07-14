import React, { useState, useEffect } from 'react';
import { fetchPythPrice } from '../utils/fetchPythPrice';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';

interface PythOracleProps {
  symbol: string;
  onPriceUpdate: (price: number | undefined) => void;
}

const PythOracle: React.FC<PythOracleProps> = ({ symbol, onPriceUpdate }) => {
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async () => {
      setIsLoading(true);
      try {
        const fetchedPrice = await fetchPythPrice(symbol);
        setPrice(fetchedPrice);
        onPriceUpdate(fetchedPrice);
        setError(null);
      } catch (err) {
        console.error(`Error fetching Pyth price for ${symbol}:`, err);
        setError(`Failed to fetch ${symbol} price`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 1000); // Update every 60 seconds
    return () => clearInterval(interval);
  }, [symbol, onPriceUpdate]);

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div>
      <Link href={"https://pyth.network/"} className='flex flex-row gap-2 items-center'>
        <h3>Pyth Oracle Price</h3>
        <GoArrowUpRight />
      </Link>
      {price !== undefined ? (
        <p className='text-2xl font-semibold text-gray-400'>${price.toFixed(10)}</p>
      ) : (
        <p className='text-2xl font-semibold  text-gray-400'>N/A</p>
      )}
    </div>
  );
};

export default PythOracle;