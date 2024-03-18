import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowProjects = () => {

    const today = new Date();
    const [data, setData] = useState("");
    const fetchDataFromNotion = () => {
      const payload = {
      };
  
      axios.post('http://localhost:3001/api/project', payload)
        .then(response123 => {
          setData(response123.data);
          console.log('Data hämtad från Notion:', response123.data);
        })
        .catch(error => {
          console.error('Fel vid hämtning från Notion:', error);
        });
    };
  
    useEffect(() => {
      fetchDataFromNotion();
    }, []);


    if (!data || !Array.isArray(data?.results)) {
        return <p>Laddar data eller ingen data att visa...</p>;
      }

    return (
        <div className="mainContainer">
            <h2>All projects</h2>
        {data.results.map((p, index) => { 
        return (
            <tr key={index}>
                <td>
                {p.properties.Projectname.title[0]?.plain_text}
                </td>
            </tr>
        )})}
        {}
        </div>
    )
}
export default ShowProjects