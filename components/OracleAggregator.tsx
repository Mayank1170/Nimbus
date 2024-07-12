"use client"
import React, { useState, useCallback } from 'react';
import PythOracle from './PythOracle';

const OracleAggregator: React.FC = () => {
    const [pythPrice, setPythPrice] = useState<number | null>(null);

    const updatePythPrice = useCallback((price: number) => {
        setPythPrice(price);
    }, []);

   
    const aggregatedPrice = pythPrice 
        ? (pythPrice + 5000) / 2
        : null;

    return (
        <div >
            <h2 >Oracle Aggregator</h2>
            <div >
                <div>
                    <PythOracle onPriceUpdate={updatePythPrice} />
                </div>
                <div >
                    <h2>Assumed price</h2>
                    5000
                </div>
            </div>
            <div>
                <h3>Aggregated Price</h3>
                <p>{aggregatedPrice ? `$${aggregatedPrice.toFixed(2)}` : 'Calculating...'}</p>
            </div>
        </div>
    );
};

export default OracleAggregator;