import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const NotionDataReader = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("loggedIn") === "true") {
    navigate("/")
  }
  const [data, setData] = useState(null);
  const fetchDataFromNotion = () => {
    const payload = {
    };

    axios.post('http://localhost:3001/api/people', payload)
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

  const Email = () => {
    const data1 = data.results.map(people => people)
  return <Login Email={data1} />;
};

  if (!data || !Array.isArray(data?.results)) {
    return <p>Laddar data eller ingen data att visa...</p>;
  }
      return (
        <div>
          <Email/>
          
        </div>
      );
};
export default NotionDataReader;