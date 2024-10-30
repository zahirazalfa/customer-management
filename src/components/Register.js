import React, { useState } from 'react';
import './Register.css'; // Impor CSS untuk styling

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`User Registered: ${username}`);
    };

    return (
        <form onSubmit={handleSubmit} className="form register-form">
            <h2>Register</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;

