import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CommentForm.css';




const CommentSection = () => {
    const [comment, setComment] = useState('');
    const [data, setData] = useState(null);

    const fetchProjectData = () => {
        const payload = {

        };

        axios.post('http://localhost:3001/api/timereports', payload) //Hämta timereports
            .then(response => {
                setData(response.data);
                console.log('Data hämtad från project:', response.data);
            })
            .catch(error => {
                console.error('Fel vid hämtning från Notion:', error);
            });
    };


    useEffect(() => {
        fetchProjectData();
    }, []);

    const ShowTimeReport = () => {

        let timeReportName;

        let timeReportsArray = []
        if (data && Array.isArray(data.results)) {
            timeReportsArray = data.results.map((timeReport) => {
                timeReportName = timeReport.properties.Person.relation[0].id
                return timeReportName

            })
        }

    }

    const ShowPersonTimeReport = () => {

        const arnold = "bee4ee56-2a19-4303-a08f-fce956f85bf3"
        let selectPerson;


        if (data.results.find(timeReport => timeReport.properties.Person.relation[0].id === arnold)) {

            selectPerson = arnold

            console.log(selectPerson)

        }
    }


    /* let userComment = props.Comment;
    let userID;

    //Skriva ut datan man får hem från fetchprojektdata och sen använda för loop för att gå igenom datan med hjälp av postman och annat.


    for (var c of userComment) {
        if (c.properties.Comment.rich_text[0]?.plain_text === comment) {
            userID = c.id
            console.log(userID)

            for (var c of userComment) {
                if (c.id === userID) {
                    console.log(p.properties.comment.title[0]?.plain_text)
                    localStorage.setItem("userComment", p.properties.comment.title[0]?.plain_text)
                    navigate("/UserPage")
                    return
                }
            }
        }
    } */


    const UpdateComment = () => {
        const payload = {
            "Comment": {
                "rich_text": [
                    {
                        "text": {
                            "content": comment,
                        },
                    }
                ]
            }
        };

        axios.post('http://localhost:3001/api/update_timereports_comment', payload) //Uppdatera kommentar
            .then(function (response) {
                console.log(response)
            })
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };



    return (
        <div className="commentSection">
            <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Skriv en kommentar..."
            />
            <button onClick={UpdateComment}>Kommentera</button>
            <ShowTimeReport />
            <ShowPersonTimeReport />



        </div>
    );
};

export default CommentSection;