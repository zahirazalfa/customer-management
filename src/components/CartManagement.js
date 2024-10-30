import React from 'react';
import './CartManagement.css'; // Import CSS untuk styling

const CartManagement = () => {
    const cartItems = [
        { id: 1, name: "Item A", quantity: 2 },
        { id: 2, name: "Item B", quantity: 1 },
    ];

    return (
        <div className="cart-management">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default CartManagement;

