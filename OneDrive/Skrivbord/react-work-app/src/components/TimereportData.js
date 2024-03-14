import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TimeReport from './TimeReport';

const TimereportData = () => {

  const [data, setData] = useState(null);

  const fetchTimereport = () => {
    const payload = {
    };

    axios.post('http://localhost:3001/api/timereports/update', payload)
      .then(response => {
        setData(response.data);
        console.log('Data hämtad från Notion:', response.data);
      })
      .catch(error => {
        console.error('Fel vid hämtning från Notion:', error);
      });
  };
  useEffect(() => {
    fetchTimereport();
  }, []);

  if (!data || !Array.isArray(data?.results)) {
    return <p>Laddar data eller ingen data att visa...</p>;
  }
      return (
        <div>
        </div>
      );
          };
export default TimereportData;