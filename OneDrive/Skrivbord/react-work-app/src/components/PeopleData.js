import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PeopleData = () => {

  const [data, setData] = useState([]);
  const fetchPeopleData = () => {
    const payload = {

    };

    axios.post('http://localhost:3001/api/people', payload)
      .then(response => {
        setData(response.data);
        console.log('Data hämtad från Notion:', response.data);
      })
      .catch(error => {
        console.error('Fel vid hämtning från Notion:', error);
      });
  };

  useEffect(() => {
    fetchPeopleData();
  }, []);

let namesArray = [];

if (data && Array.isArray(data.results)) {
    namesArray = data.results.map(name => name.properties.Name.title[0]?.plain_text);
  }

  if (!data || !Array.isArray(data?.results)) {
    return <p>Laddar data eller ingen data att visa...</p>;
  }
      return (
        <div>
            {namesArray}
        </div>
      );

};
export default PeopleData;