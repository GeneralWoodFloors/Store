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
      <section className="Showcase">
        <div className="home-container">
          <div className="image-review">
            <img src={image1} alt="Project 1" className="home-gallery-image" />
            <div className="review">
              <p>"Great experience from start to finish! The floors were installed perfectly, and the service was top-notch."</p>
            </div>
          </div>

          <div className="image-review">
            <img src={image2} alt="Project 2" className="home-gallery-image" />
            <div className="review">
              <p>"Absolutely love our new floors! The quality of work and professionalism made the entire process smooth and stress-free."</p>
            </div>
          </div>

          <div className="image-review">
            <img src={image3} alt="Project 3" className="home-gallery-image" />
            <div className="review">
              <p>"Top-notch wood floor work! The team was efficient, precise, and delivered stunning results that transformed our space."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
