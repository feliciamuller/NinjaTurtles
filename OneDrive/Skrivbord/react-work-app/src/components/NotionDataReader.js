import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';

const NotionDataReader = () => {

  const [data, setData] = useState(null);
  const fetchDataFromNotion = () => {
    const payload = {

    };

    axios.post('http://localhost:3001/api/notion', payload)
      .then(response => {
        setData(response.data);
        console.log('Data hämtad från Notion:', response.data);
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
      <tr>
      <td>
      {project.properties.Email.rich_text[0]?.plain_text}

      </td>
      </tr>
  )
  return data1;
};
  if (!data || !Array.isArray(data?.results)) {
    return <p>Laddar data eller ingen data att visa...</p>;
  }
      return (
        <div>
          <td>
          <Email />
          </td>

          {data.results.map((project, index) => {
              return (
                <tr key={index}>
                    <td>{project.properties.Email.rich_text[0]?.plain_text ?? "Inga namn att visa"}</td>
                    
                </tr>
                );
            })
            }       
        </div>
      );
    };

export default NotionDataReader;