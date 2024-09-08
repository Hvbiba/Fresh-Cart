import React from "react";
import logo from '../img/freshcart-logo.svg'
export default function Logo(){
    return(
        <div className="container  p-0 m-0" id="logo" style={{width:"150px"}}>
            <img src={logo} alt="fresh cart logo" className="w-100" />
        </div>
    )
}