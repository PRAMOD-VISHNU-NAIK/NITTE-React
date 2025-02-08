import { useState } from "react";
import './app.css'

export default function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  const products = [
    { id: 1, name: "iPhone 13", price: 999, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Book: React Basics", price: 29, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Wireless Headphones", price: 199, image: "https://via.placeholder.com/150" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <nav>
        <button className="pramod" onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("products")}>Products</button>
        <button onClick={() => setPage("cart")}>Cart ({cart.length})</button>
      </nav>

      {page === "home" && <Home setPage={setPage} />}
      {page === "products" && <Products products={products} addToCart={addToCart} />}
      {page === "cart" && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}

// src/Home.tsx
const Home = ({ setPage }) => (
  <div>
    <h1>Welcome to Our Store</h1>
    <p>Find the best products at amazing prices</p>
    <button onClick={() => setPage("products")}>Shop Now</button>
  </div>
);

// src/Products.tsx
const Products = ({ products, addToCart }) => (
  <div>
    {products.map((product) => (
      <div key={product.id}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

// src/Cart.tsx
const Cart = ({ cart, removeFromCart }) => (
  <div>
    <h2>Shopping Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))
    )}
  </div>
);
