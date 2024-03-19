import React, { useState, useEffect } from "react";
import axios from "axios";

const Update = () => {
    const payload = {
        "Name": {
            "id": "title",
            "type": "title",
            "title": [
                {
                    "type": "text",
                    "text": {
                        "content": "Sten Hård",
                        "link": null
                    }
                }
            ]
        }

    };

    axios.post('http://localhost:3001/api/create_people', payload)
        .then(function (response) {
            console.log(response)
        })
};
const UpdateComment = () => {
    const payload = {
        "Comment": {
            "rich_text": [
                {
                    "text": {
                        "content": "Arnold!! svartis",
                    },
                }
            ]
        }
    };

    axios.post('http://localhost:3001/api/update_timereports_comment', payload)
      .then(function (response){
          console.log(response)
      })
  };
const ButtonUpdate = () =>
{return (
    <>
    <div className="mainContainer">
    {/* <button onClick={Update}>Knapp för att skapa en person!</button> */}
    <button onClick={UpdateComment}>Knapp för uppdatera en kommentar!</button>
    </div>
    </>
)}

export default ButtonUpdate