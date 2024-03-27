import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'
const Menu = () => {
    let logOut;
    const onButtonClick = () => {
        localStorage.clear()
        window.location.reload()
    }
    let login = <Link to="/Logga_in" className="navLink">Log in</Link>;
    let projects;
    let fetchtime;
    let loggedInUser //EZ
    let timereports;
    let projectHours;

    if (localStorage.getItem("loggedIn") === "true") {
        login = ""
        logOut = <button className="logOut-button" onClick={onButtonClick}>LOGOUT</button>
        projects = <Link to="/Visa_Projekt" className="navLink">Projects</Link>;

        loggedInUser = <div> {localStorage.getItem("userName")}</div> //EZ
        timereports = <Link to ="/Rapportera_tid" className="navLink">TimeReport</Link>

        if (localStorage.getItem("bossFunctions") === "true") {fetchtime = <Link to ="Visa_Tidrapporter" className="navlink">FetchTime</Link>}

        if (localStorage.getItem("projectleaderFunctions") === "true") {projectHours = <Link to ="/Uppdatera_Projekttid" className = "navLink">ProjectHours</Link>}

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
                    </li>
                    <li>
                        {timereports}
                    </li>
                    <li>
                        {fetchtime}
                    </li>
                    <li>
                        {projectHours}
                    </li>
                </ul>
                {logOut}
                {/* Här ska inloggings markör vara */}
                {loggedInUser}
            
            </div>
        </div>
    )
}
export default Menu; 
