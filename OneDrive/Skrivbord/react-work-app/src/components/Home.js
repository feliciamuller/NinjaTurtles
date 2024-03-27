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
      <div className="welcome-title">
        <h2>Welcome {localStorage.getItem("userName")}</h2>
        <h3>This is the home page</h3>

      </div>
    </div>
  )
}

export default Home;