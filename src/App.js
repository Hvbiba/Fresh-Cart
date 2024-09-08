import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Brands from './Components/Brands';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Category from './Components/Category';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import LogIn from './Components/Login';
import Product from './Components/Product';
import ProtectedRoute from'./Components/protectedRoute';
import WishList from "./Components/WishList";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        
        {/* Protected routes */}
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/brands' element={<ProtectedRoute><Brands /></ProtectedRoute>} />
        <Route path='/products' element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path='/categories' element={<ProtectedRoute><Category /></ProtectedRoute>} />
        <Route path='/product/:id' element={<ProtectedRoute><Product /></ProtectedRoute>} />
        <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path='/wishList' element={<ProtectedRoute><WishList/></ProtectedRoute>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
