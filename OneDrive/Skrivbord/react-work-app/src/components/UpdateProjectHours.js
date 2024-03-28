
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";


const UpdateProjectHours = () =>{

    const navigate = useNavigate();
    if (localStorage.getItem("loggedIn") === null) {
        navigate("/")
      }


    const [projectHours, setProjectHours] = useState(null);
    const [data, setData] = useState(null);
    const [projectData, setProjectData] = useState(null);
    const [projectName, setProjectName] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const hoursInput = parseFloat(projectHours);

    const updateMyFirstProject = () => {
        const payload = {
            "Hours": {
                "id": "GP%5DW",
                "type": "number",
                "number": hoursInput
            },
        }
        axios.post('http://localhost:3001/api/update_project_myfirstproject', payload)
            .then(response => {
                setData(response.data);
                console.log('Data hämtad från My first project:', response.data);
            })
            .catch(error => {
                console.error('Fel vid hämtning från Notion:', error);
            });
    }

    const updateAnotherProject = () => {
        const payload = {
            "Hours": {
                "id": "GP%5DW",
                "type": "number",
                "number": hoursInput
            },
        }
        axios.post('http://localhost:3001/api/update_project_anotherproject', payload)
            .then(response => {
                setData(response.data);
                console.log('Data hämtad från Another project:', response.data);
            })
            .catch(error => {
                console.error('Fel vid hämtning från Notion:', error);
            });
    }

    const updateTheBestProject = () => {
        const payload = {
            "Hours": {
                "id": "GP%5DW",
                "type": "number",
                "number": hoursInput
            },
        }
        axios.post('http://localhost:3001/api/update_project_thebestproject', payload)
            .then(response => {
                setData(response.data);
                console.log('Data hämtad från The best project:', response.data);
            })
            .catch(error => {
                console.error('Fel vid hämtning från Notion:', error);
            });
    }

    const updateANewProject = () => {
        const payload = {
            "Hours": {
                "id": "GP%5DW",
                "type": "number",
                "number": hoursInput
            },
        }
        axios.post('http://localhost:3001/api/update_project_anewproject', payload)
            .then(response => {
                setData(response.data);
                console.log('Data hämtad från A new project:', response.data);
            })
            .catch(error => {
                console.error('Fel vid hämtning från Notion:', error);
            });
    }
    const fetchProjectData = () => {
        const payload = {

        };

        axios.post('http://localhost:3001/api/project', payload)
            .then(response => {
                setProjectData(response.data);
                console.log('Data hämtad från project:', response.data);
            })
            .catch(error => {
                console.error('Fel vid hämtning från Notion:', error);
            });
    };

    useEffect(() => {
        fetchProjectData();
    }, []);

    const ShowProject = () => {
        let projectArray = [];

        if (projectData && Array.isArray(projectData.results)) {
            projectArray = projectData.results.map((project) => {
                const projectName = project.properties.Projectname.title[0]?.plain_text;
                return projectName;
            })
        }
        return projectArray;
    }

    const handleSelect = (e) => {
        const projectName = e.target.value;

        if (projectName === "") {
            setProjectName("notValid");
        }
        else {
            setProjectName(projectName);
        }
    };

    const submitAddToDatabase = () => {
        if (projectName === "My first project") {
            updateMyFirstProject();
            setSubmitSuccess(true);
        }
        else if (projectName === "Another project") {
            updateAnotherProject();
            setSubmitSuccess(true);
        }
        else if (projectName === "The best project") {
            updateTheBestProject();
            setSubmitSuccess(true);
        }
        else if (projectName === "A new project!") {
            updateANewProject();
            setSubmitSuccess(true);
        }
    }

    return (
        <div className="mainContainer">
            <div className="projectContainer">
            <div className="title-text">
                <h3>Uppdatera timmar på ett projekt</h3>
            </div>
            <div className="inputContainer">
                <label>Projekt</label>
                <select onChange={handleSelect}>
                    <option value="">Välj ett projekt du vill uppdatera tiden på</option>
                    {ShowProject().map((project) => (
                        <option key={project} value={project}>
                            {project}
                        </option>
                    ))}
                </select>
                </div>
                <div className="inputContainer">
                    <label>Ange timmar</label>
                    <input
                        value={projectHours}
                        placeholder="Antal timmar"
                        onChange={(ev) => setProjectHours(ev.target.value)}
                    />
                </div>
                <div className="inputContainer">
                <button className="submit-button" onClick={submitAddToDatabase}>SKICKA</button>
                </div>
            {submitAddToDatabase && (projectName === "notValid") && (
                <Alert severity="error">Du måste välja ett projekt</Alert>
            )}
            {submitSuccess && <Alert severity="success">Ändringen har gått igenom!</Alert>}
           </div> 
        </div>
    )
}
export default UpdateProjectHours;