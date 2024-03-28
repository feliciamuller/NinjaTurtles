import React, { useEffect } from 'react';

function Home(props) {

  let message;
  
  if(localStorage.getItem("projektledareFunctions") === "true") {
    message = "Projektledare"
  }
  if(localStorage.getItem("chefFunctions") === "true") {
    message = "Chef"
  }

  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <h2>Välkommen {localStorage.getItem("userName")}</h2>
      </div>
    </div>
  )
}

export default Home;