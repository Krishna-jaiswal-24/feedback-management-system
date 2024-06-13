// src/components/FeedbackForm.tsx
import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm: React.FC = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/feedback', { name, feedback });
        setName('');
        setFeedback('');
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <div style={formGroupStyle}>
                <label style={labelStyle}>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={inputStyle}
                />
            </div>
            <div style={formGroupStyle}>
                <label style={labelStyle}>Feedback:</label>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                    style={textareaStyle}
                ></textarea>
            </div>
            <button type="submit" style={buttonStyle}>Submit Feedback</button>
        </form>
    );
};

const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
};

const formGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    width: '100%'
};

const labelStyle: React.CSSProperties = {
    marginBottom: '5px',
    fontWeight: 'bold'
};

const inputStyle: React.CSSProperties = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%'
};

const textareaStyle: React.CSSProperties = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    height: '100px'
};

const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
};

export default FeedbackForm;
