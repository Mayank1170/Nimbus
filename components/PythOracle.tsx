import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface PythOracleProps {
    onPriceUpdate: (price: number) => void;
}

interface PriceData {
    id: string;
    price: {
        price: string;
    };
}

const PythOracle: React.FC<PythOracleProps> = ({ onPriceUpdate }) => {
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        const fetchPythPrice = async () => {
            try {
                // ETH/USD price feed ID
                const ethUsdFeedId = "ef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d";
                const response = await axios.get<PriceData[]>(`https://hermes.pyth.network/api/latest_price_feeds?ids[]=${ethUsdFeedId}`);
                if (response.data && response.data.length > 0) {
                    const newPrice = parseFloat(response.data[0].price.price);
                    setPrice(newPrice);
                    onPriceUpdate(newPrice);
                }
            } catch (error) {
                console.error('Error fetching Pyth price:', error);
            }
        };

        fetchPythPrice();
        const interval = setInterval(fetchPythPrice, 600); // Update every minute

        return () => clearInterval(interval);
    }, [onPriceUpdate]);

    return (
        <div>
            <h3>Pyth Oracle Price</h3>
            <p>{price ? `$${price.toFixed(2)}` : 'Loading...'}</p>
        </div>
    );
};

export default PythOracle;