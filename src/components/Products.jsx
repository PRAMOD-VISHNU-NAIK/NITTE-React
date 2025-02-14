import React from "react";
import {products} from '../data/products';
import './Products.css';
const Products = ({addToCart}) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">Rs. {product.price}</p>
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
