import React from 'react';

const StockMonitoring = () => {
    const stocks = [
        { id: 1, item: "Item A", quantity: 50 },
        { id: 2, item: "Item B", quantity: 20 },
    ];

    return (
        <div>
            <h2>Real-time Stock Monitoring</h2>
            <ul>
                {stocks.map((stock) => (
                    <li key={stock.id}>{stock.item} - Quantity: {stock.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default StockMonitoring;

