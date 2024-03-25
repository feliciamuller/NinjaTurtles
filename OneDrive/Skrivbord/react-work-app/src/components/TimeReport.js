import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TimeReport = () => {

    const navigate = useNavigate();
    if (localStorage.getItem("loggedIn") === null) {
      navigate("/")
    }

    const [hours, setHours] = useState('');
    const [textComment, setTextComment] = useState('');
    const [projectName, setProjectName] = useState('');
    const [peopleName, setPeopleName] = useState('');
    const [projectData, setProjectData] = useState('');
    const [projectId, setProjectId] = useState('');//jag får inte detta värde att ändra på sig
    const [peopleData, setPeopleData] = useState(null);
    const [data, setData] = useState(null);
    const [peopleId, setPeopleId] = useState(null)

    const hoursInput = parseFloat(hours);
    // const peopleId = "06e9bb3d-0884-41cb-9207-dc7f2fe1a4be"
    // const projectId = "7c93b28e-6245-4e96-a192-aa79be6d6ac9"

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

            //BEHÖVER LÄGGA IN DATUM OCH ACTIVITY 

        };

        axios.post('http://localhost:3001/api/create_timereports', payload)
            .then(function (response){
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

    const ShowProject = () =>{
        let projectArray = [];
    
        if (projectData && Array.isArray(projectData.results)) {
            projectArray = projectData.results.map((project) => {
                const projectName = project.properties.Projectname.title[0]?.plain_text;
                return projectName;
            })
        }

        return projectArray;
    }

    const ShowPeople = () =>{
        let peopleArray = [];
    
        if (peopleData && Array.isArray(peopleData.results)) {
            peopleArray = peopleData.results.map((project) => {
                const peopleName = project.properties.Name.title[0]?.plain_text;
                return peopleName;
            })
        }

        return peopleArray;
    }

    const handleSelect = (e) => {
        const projectName = e.target.value;
        setProjectName(projectName);
        console.log(projectName)

        const selectedProject = projectData.results.find(project => project.properties.Projectname.title[0]?.plain_text === projectName);
        setProjectId(selectedProject.id);
        console.log(selectedProject.id)
    };

    const handleSelectPeople = (e) => {
        const peopleName = e.target.value;
        setPeopleName(peopleName)
        console.log(peopleName)

        const selectedPerson = peopleData.results.find(people => people.properties.Name.title[0]?.plain_text === peopleName)
        setPeopleId(selectedPerson.id)

    };

    const submitAddToDatabase = () =>{
        addToDatabase();
}

    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <h2>Time report</h2>
            </div>

            <div className="inputContainer">
                <input
                    value={hours}
                    placeholder="Hur många timmar vill du rapportera?"
                    onChange={(ev) => setHours(ev.target.value)}//ändrar state på hours
                />
            </div>
            <br />

            <div className="inputContainer">
                <input
                    value={textComment}
                    placeholder="Skriv en kommentar"
                    onChange={(ev) => setTextComment(ev.target.value)}//ändrar state på textcomment
                />
            </div>
            <br />

            <div className="projectDropdown">
                <label>Välj ett projekt</label>
                <select onChange={handleSelect}>
                    {ShowProject().map((project) => (
                        <option key = {project} value={project}>
                            {project}
                        </option>
                    ))}
                </select>
                <label>Vem är du?</label>
                <select onChange={handleSelectPeople}>
                    {ShowPeople().map((people) => (
                        <option key = {people} value={people}>
                            {people}
                        </option>
                    ))}
                </select>

            </div>
            <button onClick={submitAddToDatabase}>Submit</button>
        </div>
    );
}

export default TimeReport;