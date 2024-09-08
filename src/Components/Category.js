import React, { useContext } from "react";
import { useState , useEffect } from "react";
import {CategoryContext} from '../Context/categoryContext'; 
import LoadingIcon from "./Loading";
export default function Category(){
    const {categories} = useContext(CategoryContext)
    const [isLoad , setLoad] = useState(true)
    useEffect(() => {
        
        if(categories.length >0){
            setLoad(false)
        }
    }, [categories]);
    return(
    <>
    {isLoad?( <LoadingIcon />):
    (
        <div className="container p-4 my-2" id="display-categories">
        {
            categories.map((e) =>(
            <div className="card p-2 my-1" key={e.id}>
                <img src={e.image} alt={e.name} />
                <div className="card-body text-center">
                    <h6 className="card-text text-success">{e.name}</h6>
                </div>
            </div>
            ))
        }
        </div>
    )

    }
    </>
    )
}