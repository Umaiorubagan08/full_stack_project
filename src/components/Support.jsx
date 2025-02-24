import React, { useState } from 'react';

export default function Support() {
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("Your query has been submitted. We will get back to you soon!");
    };

    return (
        <div className="support">
            <h1>Support</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="query">Your Query:</label>
                    <textarea 
                        id="query" 
                        value={query} 
                        onChange={handleQueryChange} 
                        rows="4" 
                        placeholder="Type your question here..."
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <p className="response-message">{message}</p>}
        </div>
    );
}
