import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'
const Menu = () => {
    let logOut;
    const onButtonClick = () => {
        localStorage.clear()
        window.location.reload()
    }
    let login = <Link to="/Logga_in" className="navLink">Logga in</Link>;
    let projects;
    let fetchtime;
    let loggedInUser
    let timereports;
    let projectHours;

    if (localStorage.getItem("loggedIn") === "true") {
        login = ""
        logOut = <button className="logOut-button" onClick={onButtonClick}>LOGGA UT</button>
        projects = <Link to="/Projects" className="navLink">Projekt</Link>;

        logOut = <button className="logOut-button" onClick={onButtonClick}>LOGGA UT</button>
        projects = <Link to="/Visa_Projekt" className="navLink">Projekt</Link>;

        loggedInUser = <div className="loggedInUserName"> {localStorage.getItem("userName")}</div>
        timereports = <Link to ="/Rapportera_tid" className="navLink">Tidrapportera</Link>

        if (localStorage.getItem("bossFunctions") === "true") {fetchtime = <Link to ="Visa_Tidrapporter" className="navLink">Hämta tidrapport</Link>}

        if (localStorage.getItem("projectleaderFunctions") === "true") {projectHours = <Link to ="/Uppdatera_Projekttid" className = "navLink">Uppdatera projekttid</Link>}

      }


    return (
       <div>
        <div className="navbar">
            <div className="menuContainer">
                <h2 className="headerName">NINJAS PORTAL</h2>
                <ul className="navLinks">
                    <li>
                        <Link to="/" className="navLink">Hem</Link>
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
            </div>
            {loggedInUser}
        </div>
        {logOut}
        </div>
    )
}
export default Menu; 
