import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {ProductStoreProvider} from './Context/productContext'; 
import CategoryContextProvider from './Context/categoryContext';
import BrandsContextProvider from './Context/brandContext';
import UserContextProvider from './Context/userContext'
import CartContextProvider from './Context/cartContext';
import WishesContextProvider from './Context/wishesContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
document.querySelectorAll('img').forEach((img) => {
  img.setAttribute("loading", "lazy");
});
root.render(
  <React.StrictMode>
    <ProductStoreProvider>
      <CategoryContextProvider>
          <BrandsContextProvider>
              <UserContextProvider>
                  <CartContextProvider>
                      <WishesContextProvider>
                            <App />
                      </WishesContextProvider>
                  </CartContextProvider>
              </UserContextProvider>
          </BrandsContextProvider>
      </CategoryContextProvider>
    </ProductStoreProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
