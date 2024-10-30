import React from 'react';

const StockManagement = () => {
    const items = [
        { id: 1, item: "Item A", stock: 50 },
        { id: 2, item: "Item B", stock: 20 },
    ];

    return (
        <div>
            <h2>Stock Management</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.item} - Stock: {item.stock}</li>
                ))}
            </ul>
            <button>Add New Stock</button>
        </div>
    );
};

export default StockManagement;
