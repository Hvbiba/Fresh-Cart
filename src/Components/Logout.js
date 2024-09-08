import React, { useContext } from "react";
import { UserContext } from "../Context/userContext";
import { Link, useNavigate } from "react-router-dom";

export default function LogOut(){
    const {userData , setUserData} = useContext(UserContext);
    const navigate = useNavigate();
    function logOut(){
        localStorage.removeItem("userToken");
        setUserData(null)
        navigate('/login');
    }
    return(
        <div className="d-flex justify-content-between ">
            <a href='#' className="logOut text-dark" onClick={()=>logOut()}> 
                Log Out  <i class="fa fa-sign-out" aria-hidden="true"></i>
            </a>
        </div>
    );

}