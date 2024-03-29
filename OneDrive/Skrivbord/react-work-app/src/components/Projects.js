import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowProjects = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("loggedIn") === null) {
    navigate("/")
  }

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
  if (!data || !Array.isArray(data?.results)) {
    return;
  }
//Checks for projects that still got a valid date that haven't expired and shows some info about that project.
  let activeProjects;
  activeProjects = data.results.map((p) => {
    let projectDate = p.properties.Timespan.date?.end
    if (String(projectDate) > today.toLocaleDateString()) {
      
      return (      
      <div>
        {p.properties.Projectname.title[0]?.plain_text} <br />
       Totalt antal timmar: {p.properties.Hours.number}<br /> 
       Totalt arbetade timmar: {p.properties["Worked hours"].rollup.number}<br /> 
       Totalt timmar kvar: {p.properties["Hours left"].formula.number}
       </div>)

    }
    return activeProjects
  })

  return (

    <div className="mainContainer">
      <div className="projectContainer">
        <h3 className="title-text">Alla projekt</h3>
        <article className="projectInfo">
        {data.results.map((p, index) => {
          return (
            <tr key={index}>
              <td>
                {p.properties.Projectname.title[0]?.plain_text}
              </td>
            </tr>
          )
        })}
        </article>
        <h3 className="title-text">Aktiva projekt</h3>
        <article className="projectInfo">
        {activeProjects.map((a, i) => {
          return (
            <tr key={i}>
              <td>
                {a} 
              </td>
              <br/>
            </tr>
          )
        })}
        </article>
      </div>
    </div>

  )
}
export default ShowProjects