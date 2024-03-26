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
    let fetchtime;
    let loggedInUser //EZ
    let timereports;

    if (localStorage.getItem("loggedIn") === "true") {
        login = ""
        logOut = <button onClick={onButtonClick}>Log Out</button>
        projects = <Link to="/Projects" className="navLink">Projects</Link>;
        loggedInUser = <div> {localStorage.getItem("userName")}</div> //EZ
        fetchtime = <Link to ="/FetchTime" className="navlink">FetchTime</Link>

        timereports = <Link to ="/TimeReport" className="navLink">TimeReport</Link>
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
                 

                </ul>
                {logOut}
                {/* Här ska inloggings markör vara */}
                {loggedInUser}
            
            </div>
        </div>
    )
}
export default Menu;