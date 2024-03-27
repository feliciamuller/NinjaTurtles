import { updatePage } from '@notionhq/client/build/src/api-endpoints';
import React, { useEffect } from 'react';

function Home (props) {

  let message;
  
  if(localStorage.getItem("projektledareFunctions") === "true") {
    message = "Projektledare"
  }
  if(localStorage.getItem("chefFunctions") === "true") {
    message = "Chef"
  }

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <h2>Welcome {localStorage.getItem("userName")} <br/> {message}</h2>
      </div>
      <h3>This is the home page.</h3>
    </div>
  )
}

export default Home;