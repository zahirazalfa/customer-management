import React from 'react';

const OrderManagement = () => {
    const orders = [
        { id: 1, item: "Item A", quantity: 2, status: "Shipped" },
        { id: 2, item: "Item B", quantity: 1, status: "Pending" },
    ];

    return (
        <div>
            <h2>Order Management</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>{order.item} - Quantity: {order.quantity} - Status: {order.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderManagement;

