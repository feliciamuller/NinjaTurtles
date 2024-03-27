import React, { useEffect } from 'react';

function Home(props) {

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