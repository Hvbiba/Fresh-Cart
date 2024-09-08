import React, { useContext, useEffect, useState } from "react";
import { ProductStoreContext } from "../Context/productContext"; 
import { useNavigate } from "react-router-dom";
import LoadingIcon from "./Loading";
import { CartContext } from "../Context/cartContext";
import AddAlert from "./addAlert";
import { WishesContext } from "../Context/wishesContext";

export default function AllProducts(){
    const { getProducts } = useContext(ProductStoreContext);
    const [isLoad , setLoad] = useState(true);
    const {addToCart , IsAdded} = useContext(CartContext)
    const {getWishesList , addToWishes} = useContext(WishesContext)

    useEffect(() => {
        if(getProducts.length > 0){
            setLoad(false);
        }
    }, [getProducts]);
       
    useEffect(() => {
        getWishesList();
    }, [getWishesList]);

    const navigate = useNavigate();
    function displayProduct(id){
        navigate(`/product/${id}`)
    }
    return (
        <>
            {isLoad ? (
               <LoadingIcon />
            ) : (
                <>
                    {IsAdded && (
                        <AddAlert />
                    )}
                    <div className="container my-3 p-1 mb-3" id="getProducts">
                        {getProducts.map((product) => (
                            <div className="card" key={product.id} >
                                <i className="fa fa-heart p-2 fs-5 text-success" id='like-icon' aria-hidden="true"  onClick={() => addToWishes(product.id)}                                ></i>
                                <img src={product.imageCover} alt={product.title} onClick={() => displayProduct(product.id)}/>
                                <div className="card-body">
                                    <h6 className="card-text text-success">{product.category.name}</h6>
                                    <h6 className="card-title text-secondary">{product.title.split(' ').slice(0, 2).join(' ')}</h6>
                                    <p className="card-text text-danger">EGP {product.price}</p>
                                </div>
                                <button type="button" 
                                    className="btn btn-success w-75 text-center" 
                                    id="add-btn" 
                                    onClick={()=>addToCart(product.id)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
    
}