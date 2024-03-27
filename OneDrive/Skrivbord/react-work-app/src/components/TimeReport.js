import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

const TimeReport = () => {
      const navigate = useNavigate();
    if (localStorage.getItem("loggedIn") === null) {
      navigate("/")
    }
  
    const [hours, setHours] = useState(null);
    const [textComment, setTextComment] = useState(null);
    const [projectName, setProjectName] = useState(null);
    const [projectData, setProjectData] = useState(null);
    const [projectId, setProjectId] = useState(null);
    const [peopleData, setPeopleData] = useState(null);
    const [peopleId, setPeopleId] = useState(null);
    const [dateInput, setDateInput] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [activityComment, setActivityComment] = useState(null);
    const hoursInput = parseFloat(hours);
 


    const addToDatabase = () => {
        const payload = {
            "Hours": {
                "id": "%3BA_%5C",
                "type": "number",
                "number": hoursInput
            },
            "Comment": {
                "rich_text": [
                    {
                        "text": {
                            "content": textComment
                        }
                    }
                ]
            },
            "Project": {
                "id": "%5CoXy",
                "type": "relation",
                "relation": [
                    {
                        "id": projectId
                    },
                ],
                "has_more": false
            },
            "Person": {
                "id": "cL%5DY",
                "type": "relation",
                "relation": [
                    {
                        "id": peopleId
                    }
                ],
                "has_more": false
            },
            "Date": {
                "id": "HjkB",
                "type": "date",
                "date": {
                    "start": dateInput,
                    "end": null,
                    "time_zone": null
                }
            },
            "Activity": {
                "id": "title",
                "type": "title",
                "title": [
                    {
                        "type": "text",
                        "text": {
                            "content": activityComment,
                            "link": null
                        },
                        "annotations": {
                            "bold": false,
                            "italic": false,
                            "strikethrough": false,
                            "underline": false,
                            "code": false,
                            "color": "default"
                        },
                        "plain_text": activityComment,
                        "href": null
                    }
                ]
            }
        };

        axios.post('http://localhost:3001/api/create_timereports', payload)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error('Error while adding to database:', error, projectId);
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

    const fetchPeopleData = () => {
        const payload = {

        };

        axios.post('http://localhost:3001/api/people', payload)
            .then(response => {
                setPeopleData(response.data);
                setPeopleId(JSON.parse(localStorage.getItem("userID")))
                console.log('Data hämtad från people:', response.data);
            })
            .catch(error => {
                console.error('Fel vid hämtning från Notion:', error);
            });
    };

    useEffect(() => {
        fetchProjectData();
        fetchPeopleData();
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

        if(projectName === ""){
            setProjectName(null);
        }
        else {
            const selectedProject = projectData.results.find(project => project.properties.Projectname.title[0]?.plain_text === projectName);
            setProjectName(projectName);
            setProjectId(selectedProject.id);
        }  
    };


    const submitAddToDatabase = () =>{
        setFormSubmitted(true);

        if (projectName === null || dateInput === null){ 
            return false;
        }
        else {
            addToDatabase();
            setSubmitSuccess(true);
            return true;
        }
}
    return (
        <div className="mainContainer">




            <div className="report-form">
                <div className="title-form">
                    Time report
                </div> <br />
                <div className="projectDropdown">
                    <label>Projekt</label><br />
                    <select onChange={handleSelect}>
                        {ShowProject().map((project) => (
                            <option key={project} value={project}>
                                {project}
                            </option>
                        ))}
                    </select><br />
                    
                    <br /><label>Datum</label><br />
                    <input type="date"
                        value={dateInput}
                        onChange={(ev) => setDateInput(ev.target.value)}

                    /></div>
                <div className="inputContainer">
                    <br /><label>Antal Timmar</label> <input
                        value={hours}
                        placeholder="Rapportera timmar"
                        onChange={(ev) => setHours(ev.target.value)}//ändrar state på hours
                    />
                </div>
                <br />
                      
                       <div className="inputContainer">
                <input
                    value={activityComment}
                    placeholder="Ange aktivitet"
                    onChange={(ev) => setActivityComment(ev.target.value)}
                />
            </div>

                <div className="inputContainer">
                    <label>Kommentar</label>
                    <input
                        value={textComment}
                        placeholder="Skriv en kommentar"
                        onChange={(ev) => setTextComment(ev.target.value)}//ändrar state på textcomment
                    />

                    <br />

                </div>
                <br /><button className="submit-button" onClick={submitAddToDatabase}>Submit</button>

  {formSubmitted && (projectName === null || dateInput === null) && (
                <Alert severity="error">Du måste välja projekt och datum.</Alert>
            )}
            {submitSuccess && (
                <Alert severity="success">Tidrapporten har registrerats!</Alert>
            )} 
            </div>
        </div >


    );
}
export default TimeReport;