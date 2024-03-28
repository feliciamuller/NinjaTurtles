import React from "react";
import { Link } from 'react-router-dom'
import '../App.css'
const Menu = () => {
    let logOut;
    const onButtonClick = () => {
        localStorage.clear()
        window.location.reload()
    }
    let login = <Link to="/Login" className="navLink">Log in</Link>;
    let projects;
    let fetchtime;
    let loggedInUser
    let timereports;
    let projectHours;

    if (localStorage.getItem("loggedIn") === "true") {
        login = ""
        logOut = <button className="logOut-button" onClick={onButtonClick}>LOGGA UT</button>
        projects = <Link to="/Projects" className="navLink">Projects</Link>;

        loggedInUser = <div className="userName"> {localStorage.getItem("userName")}</div>
        fetchtime = <Link to="/FetchTime" className="navLink">FetchTime</Link>

        timereports = <Link to="/TimeReport" className="navLink">TimeReport</Link>
        projectHours = <Link to="/ProjectHours" className="navLink">ProjectHours</Link>
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
