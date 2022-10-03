import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar()
{
    return(
   <div id="Navbar-content">
   <nav className="navbar navbar-expand-lg bg-light"  >
     <div className="container-fluid"  >
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/register">Register</Link>
        </li>
        <li className="nav-item">
         <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
        <Link to="/calculator">Calculator</Link>
        </li>
        <li className="nav-item">
            <Link to="/about">About</Link>
        </li>
      </ul>
  </div>
</nav>
   
   </div>


       
                
        
    )
}
export default Navbar;


