import React from 'react';


export default function Logout() {
    const handleLogout = () => {
        alert('You have successfully logged out.');
    };

    return (
        <div className="logout">
            <h1>Logout</h1>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

// Need to implement this logout design
