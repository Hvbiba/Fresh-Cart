import React, { useEffect, useState } from "react";
import axios from 'axios';

// create context 
export const CategoryContext = React.createContext();

// create component
export default function CategoryContextProvider({ children }){
    const [categories, setCategories] = useState([]);

    async function fetchCategories(){
        try{
            const response = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
            setCategories(response.data.data);
        }
        catch (error){
            
        }
    }

    useEffect(()=>{
        fetchCategories();
    },[]);

    return (
        <CategoryContext.Provider value={{categories, setCategories}}>
            {children}
        </CategoryContext.Provider>
    );
}
