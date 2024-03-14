import { useState, useEffect } from "react";
import axios from "axios";
import TimereportData from "./TimereportData";

// require('dotenv').config();

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: 'secret_SZ9u34GnDDzYfZaESBhfK9F8GifUIzp10ZbzQUY8qVM' });

//MAN BEHÖVER HANTERA AXIOS OCH MATCHA ENDPOINTEN MED SERVERN FÖR ATT SKICKA MED DATA, BEHÖVER OCKSÅ LÄGGA INDATAN NÅNSTANS?
//DATA KAN MAN LÄGGA IN I PAYLOAD
 const TimeReport = () => {
    const [data, setData] = useState(null);

    const fetchTimereport = () => {
        //i payload kan man mata in datan
      const payload = {
        "Hours": {
            "number": 6
        }
      };
  
      axios.post('http://localhost:3001/api/timereports/update', payload)
        .then(function(response) {
          setData(response.data);
          console.log('Data hämtad från Notion:', response.data);
        })
        .catch(error => {
          console.error('Fel vid hämtning från Notion:', error);
        });
    };
    useEffect(() => {
    }, []);

    return(
        <div>
             <div className= "mainContainer">
            <h1>Hej</h1>
            <div>
      <button onClick={fetchTimereport()}>Kör addToDatabase</button>
    </div>
            </div>
        </div>
    //     <div className= "mainContainer">
    //     <div className="titleContainer">
    //       <h2>Time reporting</h2>
    //     </div>
    //     <div className="inputContainer">
    //       <input
    //         value={project}
    //         placeholder="Projectname"
    //         onChange={(ev) => setProject(ev.target.value)}
    //         className="inputBox"
    //       />
    //       <label className="errorLabel">{emailError}</label>
    //     </div>
    //     <br />
    //     <div className="inputContainer">
    //       <input
    //         value={hours}
    //         placeholder="Amount of hours"
    //         onChange={(ev) => setHours(ev.target.value)}
    //         className={'inputBox'}
    //       />
    //     </div>
    //     <br/>
    //     <div className="inputContainer">
    //       <input
    //         value={name}
    //         placeholder="Vem är du?"//här behöver en props från peopledata användas
    //         onChange={(ev) => setName(ev.target.value)}
    //         className={'inputBox'}
    //       />
    //     </div>
    //   </div>
    )
}

export default TimeReport;