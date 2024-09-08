import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Logo from "./Logo";
import { UserContext } from "../Context/userContext";
import LogOut from "./Logout";

export default function NavBar() {
  const { userData } = useContext(UserContext);

  return (
    <>
      {userData!==null ? (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Logo />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span><i className="fa fa-bars" aria-hidden="true"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll m-auto"
                style={{ "--bs-scroll-height": "fit-content" }}
              >
                <li className="nav-item">
                  <Link className="nav-link" to='/home'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/products'>Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/brands'>Brands</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/categories'>Categories</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/cart'>Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/wishList'>WishList</Link>
                </li>
              </ul>
              <LogOut />
            </div>
          </div>
        </nav>
      ) : (
        <div className="container-fluid w-100 bg-light p-2 d-flex justify-content-between" id="topBar">
          <div>
            <Logo />
          </div>
          <div className="">
            <Link to='/' className="signUp text-dark p-2">Register</Link>
            <Link to='/login' className="login text-dark p-2">Login</Link>
          </div>
        </div>
      )}
    </>
  );
}
