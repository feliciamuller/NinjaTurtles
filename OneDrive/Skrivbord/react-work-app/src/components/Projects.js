import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowProjects = () => {

    let today = new Date();
    let nextId = 0;
    const [data, setData] = useState("");
    const [projectNames, setProjectNames] = useState([])
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
    const ShowProjects = () => {

            data.results.map((p) => {  
            const projectDate = p.properties.Timespan.date?.end
            const projectName = p.properties.Projectname.title[0]?.plain_text
            if (String(projectDate) > today.toLocaleDateString()) {
              console.log(projectName)
            }
          }
        )

      }
    console.log(projectNames)
    if (!data || !Array.isArray(data?.results)) {
        return <p>Laddar data eller ingen data att visa...</p>;
      }

    return (
        <div className="mainContainer">
            <h2>All projects</h2>
        {data.results.map((p, index) => { 
        return (
          <tbody>
            <tr key={index}>
                <td>
                {p.properties.Projectname.title[0]?.plain_text}
                {p.properties.Timespan.date?.end}
                </td>
            </tr>
            </tbody>
        )})}
        <button onClick={ShowProjects}>List Active Projects</button>
        </div>
    )
}
export default ShowProjects