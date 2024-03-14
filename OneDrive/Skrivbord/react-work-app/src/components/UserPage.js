import React, {useState} from "react";
import axios from "axios";

const UserPage = () => {
    const userName = localStorage.getItem("userName");
    return userName
}

export default UserPage