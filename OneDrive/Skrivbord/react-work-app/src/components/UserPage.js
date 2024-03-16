import React, {useState} from "react";
import axios from "axios";

const UserPage = () => {
    const [userName, setUserName] = useState("")

    const onButtonClick = () => {
        setUserName(localStorage.getItem("userName"))
    }
    return (
        <>
                <button onClick={onButtonClick}></button>
        </>
    )
}

export default UserPage