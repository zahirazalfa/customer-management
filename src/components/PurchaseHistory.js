import React from 'react';
import './PurchaseHistory.css'; // Import CSS untuk styling

const PurchaseHistory = () => {
    const history = [
        { id: 1, item: "Item A", date: "2024-01-01" },
        { id: 2, item: "Item B", date: "2024-02-15" },
    ];

    return (
        <div className="purchase-history">
            <h2>Purchase History</h2>
            <ul>
                {history.map((purchase) => (
                    <li key={purchase.id}>{purchase.item} - {purchase.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default PurchaseHistory;

