import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';

const NotionDataReader = () => {

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
    const data1 = data.results.map (project => 
      project.properties.Email.rich_text[0]?.plain_text
  )
  const data2 = data.results.map (project => 
    project.properties.Password.rich_text[0]?.plain_text
)
  return <Login emailadresses={data1} emailPassword={data2} />;
};

  if (!data || !Array.isArray(data?.results)) {
    return <p>Laddar data eller ingen data att visa...</p>;
  }
      return (
        <div>
          <Email />
        </div>
      );
          };
export default NotionDataReader;