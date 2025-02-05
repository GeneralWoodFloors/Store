import React from "react";
import "../styles/Home.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (<div className="container">
    <section className="hero">
      <h1 className="hero-heading">Welcome to GeneralWoodFloors</h1>
      <p className="hero-text">
        Providing exceptional services to make your vision come to life.
      </p>
    <Link to={'/register'}>
      <button className="hero-button">Sign up!</button>
    </Link>
    </section>
  </div>
  );
};

export default Home;
