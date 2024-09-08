import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const BrandsContext= createContext();

export default function BrandsContextProvider({children}){
    const [brands , setBrands] = useState([]);
    async function fetchBrands(){
        try{
            const res = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');
            setBrands(res.data.data);
        }
        catch(error){
            
        }
    }

    useEffect(()=>{
        fetchBrands();
    },[])

    return <BrandsContext.Provider value={{brands  , setBrands}} >
        {children}
    </BrandsContext.Provider>
}