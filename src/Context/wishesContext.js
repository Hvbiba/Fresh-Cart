import axios from "axios";
import React, { useContext, useState } from "react";

export const WishesContext = React.createContext();

export default function WishesContextProvider({children}){
    const [WishList , setList] = useState(null);
    let headers = {
        token: localStorage.getItem('userToken')
    }

    async function addToWishes(productId) {
        try {
            const { data } = await axios.post(
                'https://ecommerce.routemisr.com/api/v1/wishlist',
                { productId }, 
                { headers }    
            );
            
        } catch (error) {
            console.error(error.message); 
        }
    }
    async function getWishesList(){
        try{
            const {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist' 
                ,   { headers })
            if(data.status === 'success'){
                setList(data)
                localStorage.setItem('wishes' , JSON.stringify(data.data))
            }
            }catch(error){
                console.error(error)
            }
    }
    async function Delete(productId){
        try{
        const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}` 
            ,{ headers })
            setList(data)
            
            localStorage.setItem('wishes' , JSON.stringify(data.data))
        }catch(error){
            console.error(error)
        }
        
    }
    return<WishesContext.Provider value={{WishList , setList , getWishesList , addToWishes ,Delete}}>
        {children}
    </WishesContext.Provider>
}

