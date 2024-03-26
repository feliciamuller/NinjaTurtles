import React, { useState, useEffect } from 'react';
import axios from 'axios';


const fetchTimeReports = async (startDate, endDate) => {
   

    const payload = {
        filter: {
            and: [
                {
                    property: "Date",
                    date: {
                        on_or_after: startDate,
                    }
                },
                {
                    property: "Date",
                    date: {
                         on_or_before: endDate
                    }
                }
            ],
            
        },
        sorts: [
            {
                property: "Date",
                direction: "ascending"
            }
        ]
    };

    try {
        const response = await axios.post('http://localhost:3001/api/timereports', payload);
        return response.data;
    } catch (error) {
        console.error("Error fetching time reports:", error);
        return null;
    }
};

const calculateTimeReported = async (startDate, endDate) => {
    const timeReports = await fetchTimeReports(startDate, endDate);

    if (!timeReports) return null;

    let totalTimeReported = {};

    timeReports.results.forEach(report => {
        const hours = report.properties.Hours.number;
        const personId = report.properties.Person.relation[0].id;

        if (totalTimeReported[personId]) {
            totalTimeReported[personId] += hours;
        } else {
            totalTimeReported[personId] = hours;
        }
    });

    return totalTimeReported;
};

const TimeReport = () => {
    const [totalTimeReported, setTotalTimeReported] = useState({});
    const [peopleData, setPeopleData] = useState([]);
    const [startDate, setStartDate] = useState('2024-03-18'); //EZ
    const [endDate, setEndDate] = useState('2024-03-24');  //EZ

    const FetchPeopleData = () => {
        const payload = {

        };
      
        axios.post('http://localhost:3001/api/people', payload)
            .then(response => {
                 console.log(response.data);
                setPeopleData(response.data);
                console.log('Data hämtad från people:', response.data);
            })
            .catch(error => {
                console.error('Fel vid hämtning från Notion:', error);
            });
    }
   
    useEffect(() => {
        calculateTimeReported(startDate, endDate).then(setTotalTimeReported); //EZ
         FetchPeopleData()
    }, [startDate, endDate]); //EZ

    if (!peopleData) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <h2> Fetch Time report</h2>
            </div>
            <form>
                <label>
                    Start Date:
                    <input type="date" value={startDate} onChange={e=> setStartDate(e.target.value)} />
                </label>
                <label>
                    End Date:
                    <input type="date" value={endDate} onChange={e=> setEndDate(e.target.value)}  />
                </label>
            </form>
            {peopleData && peopleData.results && totalTimeReported && peopleData.results.map((people) => {
                const personTimeReport = totalTimeReported[people.id];
                if (personTimeReport) {
                    return (
                        <div key={people.id}>
                            <p>{people.properties.Name.title[0].plain_text}: {personTimeReport} hours</p>
                        </div>
                    );
                }
                return null;
            })}
            <br />
        </div>
    );
};

export default TimeReport;
