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
  let activeProjects;

  activeProjects = data.results.map((p) => {
    let projectDate = p.properties.Timespan.date?.end
    if (String(projectDate) > today.toLocaleDateString()) {
      let Projects = p.properties.Projectname.title[0]?.plain_text
      return Projects

    }
    return activeProjects
  })

  return (

    <div className="mainContainer">
      <div className="projectContainer">
        <section className="title-text">
        <h3>Alla projekt</h3>
        </section>
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
        <section className = "title-text">
        <h3>Aktiva projekt</h3>
        </section>
        <article className="projectInfo">
        {activeProjects.map((a, i) => {
          return (
            <tr key={i}>
              <td>
                {a}
              </td>
            </tr>
          )
        })}
        </article>
      </div>
    </div>

  )
}
export default ShowProjects