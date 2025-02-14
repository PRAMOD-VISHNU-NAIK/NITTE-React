import React from "react";
import './Home.css'
const Home = ({setPage}) => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Store</h1>
      <p>Find the best products at amazing prices</p>
      <button className="shop-button" onClick={() => setPage("products")}>
        Shop Now
      </button>
    </div>
  );
};

export default Home;
