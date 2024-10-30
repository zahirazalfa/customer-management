import React from 'react';

const POMonitoring = () => {
    const purchaseOrders = [
        { id: 1, item: "Item A", status: "Pending" },
        { id: 2, item: "Item B", status: "Completed" },
    ];

    return (
        <div>
            <h2>PO Monitoring</h2>
            <ul>
                {purchaseOrders.map((po) => (
                    <li key={po.id}>{po.item} - Status: {po.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default POMonitoring;

