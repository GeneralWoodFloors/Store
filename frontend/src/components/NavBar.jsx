import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; 
const API_BASE_URL = import.meta.env.VITE_API_URL; // Get URL from env file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="link">
          GeneralWoodFloors
        </Link>
      </div>
      <div className="links">
        {/* <Link to="/" className="link">Home</Link> */}
        {/* <Link to="/about" className="link">About</Link> */}
        <Link to="/gallery" className="link">Gallery</Link>
        <Link to="/booking" className="link">Booking</Link>
        {/* <Link to="/payment" className="link">Payment</Link>  */}
        <Link to="/contact" className="link">Contact</Link>
        <Link to="/user" className="link">Profile</Link>
        {/* <a href={`${API_BASE_URL}admin`} className="link" target="_blank" rel="noopener noreferrer">Admin</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
