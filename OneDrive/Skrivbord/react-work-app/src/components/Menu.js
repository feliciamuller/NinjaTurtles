import React from "react";
import {Link} from 'react-router-dom'
const Menu = () =>{
    return(
        <div className='navbar'>
            <div className = 'menuContainer'>
            <h2 className = 'headerName'>NINJAS PORTAL</h2>
                <ul className = 'navLinks'>
                    <li>
                    <Link to = "/" className = 'navLink'>Home</Link>
                    </li>
                    <li>
                    <Link to = "/Login" className = 'navLink'>Log in</Link>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}
export default Menu;