import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
   
       <Link to="/">
            <h1 className='Header-logo'><i 
      className="fas fa-sign-hanging">
      </i></h1>
       </Link>
      <h1
      style={{color: "var(--light-shades)"}} 
      >Fullstack360</h1>
      <form onSubmit="console.log('You clicked submit.'); return false">
      <FaSignInAlt />
      
      </form>
    </div>
  );
}

export default Header;