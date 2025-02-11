import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
// import image4 from "../assets/image4.jpg"; // Optional 4th image

const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="hero-heading">Welcome to General Wood Floors</h1>
        <p className="hero-text">
          Providing exceptional services to make your vision come to life.
        </p>
        <Link to={'/register'}>
          <button className="hero-button">Sign up!</button>
        </Link>
      </section>

      {/* Image Gallery Section */}
      <div className="home-container">
        <section className="home-gallery">
          <img src={image1} alt="Project 1" className="home-gallery-image"/>
          <img src={image2} alt="Project 2" className="home-gallery-image"/>
          <img src={image3} alt="Project 3" className="home-gallery-image"/>
          {/* <img src={image4} alt="Project 4" className="gallery-image"/> */}
        </section>
      </div>
    </div>
  );
};

export default Home;
