import React from "react";
import { Link } from 'react-router-dom'
const Menu = () => {
    let logOut;
    const onButtonClick = () => {
        localStorage.clear()
        window.location.reload()
    }
    let login = <Link to="/Login" className="navLink">Log in</Link>;
    let projects;
    
    if (localStorage.getItem("loggedIn") === "true") {
        login = ""
        logOut = <button onClick={onButtonClick}>Log Out</button>
        projects = <Link to="/Projects" className="navLink">Projects</Link>;
      }
    return (
        <div className="navbar">
            <div className="menuContainer">
                <h2 className="headerName">NINJAS PORTAL</h2>
                <ul className="navLinks">
                    <li>
                        <Link to="/" className="navLink">Home</Link>
                    </li>
                    <li>
                        {login}
                    </li>
                    <li>
                        {projects}
                        <Link to ="/TimeReport" className="navLink">TimeReport</Link>
                    </li>
                </ul>
                {logOut}
                {/* Här ska inloggings markör vara */}
            </div>
        </div>
    )
}
export default Menu;