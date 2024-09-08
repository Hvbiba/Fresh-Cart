import React, { useContext, useState, useEffect } from "react";
import { WishesContext } from "../Context/wishesContext";
import EmptyList from "./EmptyList";

export default function WishList() {
    const [isEmpty, setEmpty] = useState(true);
    const [wishesList, setWishesList] = useState([]);
    const { getWishesList , Delete } = useContext(WishesContext);

    useEffect(() => {
        getWishesList()
        const savedList = JSON.parse(localStorage.getItem('wishes')) || [];
        setWishesList(savedList);
        if (savedList.length > 0) {
            setEmpty(false);
        } else {
            setEmpty(true); 
        }
    }, [getWishesList]);

    return (
        <>
            {isEmpty? <EmptyList /> : (
                <div className="container p-4" id="wishes-cards">
                {
                    wishesList.map((item) => (
                        <div key={item._id} className="card wish-item  d-flex">
                            <i className="fa fa-thumbs-down p-2 fs-4 text-danger" aria-hidden="true" onClick={()=>Delete(item._id)}></i>
                            <img src={item.imageCover} className="card-img-top"/>
                            <div className="card-body">
                                <h6 className="card-title text-success">{item.title?item.title.split(' ').slice(0, 8).join(' '):null}</h6>
                                <p class="card-text">{item.description?item.description.split(' ').slice(0, 8).join(' '):null}..</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            )}
        </>
    );
}
