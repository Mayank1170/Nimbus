import React, { useState, useEffect } from 'react';
import { fetchSwitchboardPrice } from '../utils/fetchSwitchboardPrice';

interface SwitchboardOracleProps {
  symbol: string;
  onPriceUpdate: (price: number | undefined) => void;
}

const SwitchboardOracle: React.FC<SwitchboardOracleProps> = ({ symbol, onPriceUpdate }) => {
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async () => {
      setIsLoading(true);
      try {
        const fetchedPrice = await fetchSwitchboardPrice(symbol);
        console.log('Fetched Switchboard price:', fetchedPrice); // Log the fetched price
        setPrice(fetchedPrice);
        onPriceUpdate(fetchedPrice);
        setError(null);
      } catch (err) {
        console.error(`Error fetching Switchboard price for ${symbol}:`, err);
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
      <h3>Switchboard Oracle Price</h3>
      {price !== undefined ? (
        <p className='text-2xl font-semibold  text-gray-400'>${price.toFixed(10)}</p>
      ) : (
        <p className='text-2xl font-semibold  text-gray-400'>N/A</p>
      )}
    </div>
  );
};

export default SwitchboardOracle;
