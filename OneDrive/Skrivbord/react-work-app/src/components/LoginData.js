import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const NotionDataReader = () => {

  //checks if someone is loggedin so you can't try to get to the loggin page if you are.
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

  // sends a props to Login component with some data.
  const Email = () => {
    const data1 = data.results.map(people => people)
  return <Login Email={data1} />;
};

  if (!data || !Array.isArray(data?.results)) {
    return ;
  }
      return (
        <div>
          <Email/>
          
        </div>
      );
};
export default NotionDataReader;