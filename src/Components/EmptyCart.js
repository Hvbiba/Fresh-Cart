import React from "react";

import emptyCart from '../img/empty_cart.svg'

export default function Empty(){
    return(
        <div 
            className="container d-flex flex-column justify-content-center align-items-center  w-100 m-auto p-3"
        >
            <img src={emptyCart} alt='image for empty cart' className="w-50 m-auto p-2"/>
            <h3>Your <span className="text-success">Cart</span> Is Empty!</h3>
        </div>
    )
}