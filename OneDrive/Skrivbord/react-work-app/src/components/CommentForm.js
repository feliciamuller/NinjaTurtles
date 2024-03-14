import React, { useState, useEffect } from 'react';
import './CommentForm.css';
//import updateDatabase from '../../server/update';

const CommentSection = () => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = async () => {
        try {
            // Skicka kommentaren till backend
            const response = await fetch('/api/timereports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment }),
            });

            if (response.ok) {
                console.log('Kommentar skickad:', comment);
            } else {
                console.error('Fel vid skickande av kommentar:', response.statusText);
            }
        } catch (error) {
            console.error('Fel vid skickande av kommentar:', error);
        }
    };

    useEffect(() => {
        handleCommentSubmit();
    }, [comment]);

    return (
        <div className="commentSection">
            <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Skriv en kommentar..."
            />
            <button onClick={handleCommentSubmit}>Kommentera</button>
            updateDatabase()



        </div>
    );
};

export default CommentSection;