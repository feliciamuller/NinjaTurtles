import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Definiera en funktionell React-komponent som heter NotionDataReader.
const NotionDataReader = () => {
  // Använd useState-hook för att skapa ett state 'data', som inledningsvis är null.
  const [data, setData] = useState(null);

  // Definiera en funktion för att hämta data från Notion via din API-tjänst.
  const fetchDataFromNotion = () => {
    const payload = {
      // Här skulle du lägga till payload-data, lämna tomt om du bara hämtar data.
    };

    // Använd axios för att göra ett POST-anrop till din API-tjänst med payload.
    axios.post('http://localhost:3001/api/notion', payload)
      .then(response => {
        // När anropet lyckas, uppdatera 'data'-state med svaret från API:t.
        setData(response.data);
        console.log('Data hämtad från Notion:', response.data);
      })
      .catch(error => {
        // Logga ett felmeddelande om anropet misslyckas.
        console.error('Fel vid hämtning från Notion:', error);
      });
  };

  // Använd useEffect-hook för att hämta data när komponenten monteras.
  // Den tomma beroendearrayen [] gör att detta endast körs en gång.
  useEffect(() => {
    fetchDataFromNotion();
  }, []);

  // Rendera ett meddelande medan data laddas eller om ingen data finns att visa.
  if (!data || !Array.isArray(data?.results)) {
    return <p>Laddar data eller ingen data att visa...</p>;
  }

      return (
        <div>
          {data.results.map((page, index) => {
              return (
                <tr key={index}>
                    <td>{page.properties.Projectname.title[0]?.plain_text}</td>
                  </tr>
                  );
            })}
        </div>
      );
    };

export default NotionDataReader;