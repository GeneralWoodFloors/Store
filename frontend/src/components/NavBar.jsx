import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="link">
          GeneralWoodFloors
        </Link>
      </div>
      <div className="links">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About Us</Link>
        <Link to="/gallery" className="link">Gallery</Link>
        {/* <Link to="/booking" className="link">Booking</Link> */}
        {/* <Link to="/payment" className="link">Payment</Link> */} 
      </div>
    </nav>
  );
};

export default Navbar;
