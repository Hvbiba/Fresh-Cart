import axios from "axios";
import React, { Children, useContext, useState } from "react";
import { json } from "react-router-dom";

export const CartContext = React.createContext();

export default function CartContextProvider({children}){
    const [cart , setCart] = useState(null); // get cart
    const [IsAdded , setAdd] = useState(null); // add alert 
    // api requires that headers be userToken && productid in object
    let headers = {
        token: localStorage.getItem('userToken')
    }
    async function addToCart(productId) {
        try{
            let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/cart' , 
                {productId} , {headers}
            )
            
            if(data.status === 'success'){
                setAdd(data.message)
                setTimeout(() => setAdd(null), 2000);
            }
        }catch(error){
            console.error(error)
        }
    }
    async function getCart(){
        try{
            let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/cart' , {headers})
            
            if(data.status === 'success'){
                setCart(data)
                localStorage.setItem('Products' , JSON.stringify(data.data.products))
            }
        }catch(error){
            console.error(error)
        }
    }
    async function Delete(productId){
        try{
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {headers})
            
            setCart(data)
            localStorage.setItem('Products' , JSON.stringify(data.data.products))
        }
        catch(error){
            console.error(error)
        }
    }
    return<CartContext.Provider value={{cart , setCart , addToCart , IsAdded , setAdd  , getCart , Delete}}>
        {children}
    </CartContext.Provider>
}

