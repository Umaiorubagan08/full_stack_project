import React, { useState } from 'react';
import './Settings.css'; 

export default function Settings() { // not correctly working, need to improvement
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    const handleDarkModeChange = () => {
        setDarkMode(!darkMode);
    };

    const handleNotificationsChange = () => {
        setNotifications(!notifications);
    };

    return (
        <div className={`settings-container ${darkMode ? 'dark-mode' : ''}`}>
            <div className={`settings-box ${darkMode ? 'dark-box' : ''}`}>
                <h1 className={`settings-header ${darkMode ? 'dark-header' : ''}`}>Settings</h1>

                <div className={`settings-option ${darkMode ? 'dark-option' : ''}`}>
                    <label htmlFor="darkMode" className={`settings-label ${darkMode ? 'dark-label' : ''}`}>
                        Dark Mode
                    </label>
                    <input 
                        type="checkbox" 
                        id="darkMode" 
                        checked={darkMode} 
                        onChange={handleDarkModeChange} 
                        className={`settings-checkbox ${darkMode ? 'dark-checkbox' : ''}`}
                    />
                </div>

                <div className={`settings-option ${darkMode ? 'dark-option' : ''}`}>
                    <label htmlFor="notifications" className={`settings-label ${darkMode ? 'dark-label' : ''}`}>
                        Enable Notifications
                    </label>
                    <input 
                        type="checkbox" 
                        id="notifications" 
                        checked={notifications} 
                        onChange={handleNotificationsChange} 
                        className={`settings-checkbox ${darkMode ? 'dark-checkbox' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
}
