import React from "react";

import emptyList from '../img/wishlist.svg'

export default function EmptyList(){
    return(
        <div 
            className="container d-flex flex-column justify-content-center align-items-center  w-100 m-auto p-4"
        >
            <img src={emptyList} alt='image for empty cart' className="w-50 m-auto p-2"/>
            <h3>Your <span className="text-success">WishList</span> Is Empty!</h3>
        </div>
    )
}