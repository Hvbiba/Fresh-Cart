import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ProductStoreContext = React.createContext();

export const ProductStoreProvider = ({ children }) => {
  const [getProducts, setGetProducts] = useState([]);

  async function fetchProducts(){
      try {
        const response = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
        setGetProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductStoreContext.Provider value={{ getProducts, setGetProducts }}>
      {children}
    </ProductStoreContext.Provider>
  );
};

export default ProductStoreContext;
