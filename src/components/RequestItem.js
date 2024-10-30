import React, { useState } from 'react';
import './styles.css'; // Mengimpor CSS

const RequestItem = () => {
    const [item, setItem] = useState('');

    const handleRequest = (e) => {
        e.preventDefault();
        alert(`Request for item: ${item}`);
    };

    return (
        <form onSubmit={handleRequest} className="form">
            <h2>Request Item</h2>
            <input 
                type="text" 
                placeholder="Item Name" 
                value={item} 
                onChange={(e) => setItem(e.target.value)} 
                required 
            />
            <button type="submit">Request</button>
        </form>
    );
};

export default RequestItem;

