import React from 'react';

const SalesHistory = () => {
    const sales = [
        { id: 1, item: "Item A", amount: 100, date: "2024-01-01" },
        { id: 2, item: "Item B", amount: 200, date: "2024-02-15" },
    ];

    return (
        <div>
            <h2>Sales History</h2>
            <ul>
                {sales.map((sale) => (
                    <li key={sale.id}>{sale.item} - Amount: ${sale.amount} on {sale.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default SalesHistory;

