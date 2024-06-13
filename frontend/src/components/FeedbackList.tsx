// src/components/FeedbackList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList: React.FC = () => {
    const [feedbacks, setFeedbacks] = useState<{ name: string, feedback: string }[]>([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            const response = await axios.get('http://localhost:8000/feedback');
            setFeedbacks(response.data);
        };

        fetchFeedbacks();
    }, []);

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Feedback Entries</h2>
            <ul style={listStyle}>
                {feedbacks.map((fb, index) => (
                    <li key={index} style={listItemStyle}>
                        <p style={feedbackTextStyle}><strong>{fb.name}:</strong> {fb.feedback}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
};

const headerStyle: React.CSSProperties = {
    marginBottom: '15px',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center'
};

const listStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: '0',
    width: '100%'
};

const listItemStyle: React.CSSProperties = {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff'
};

const feedbackTextStyle: React.CSSProperties = {
    margin: '0'
};

export default FeedbackList;
