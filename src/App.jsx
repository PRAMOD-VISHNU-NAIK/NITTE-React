import { useState } from "react";
import './App.css';

import Product from './components/Product';
import Cart from './components/cart';
import Home from './pages/Home';

export default function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  const products = [
    { id: 1, name: "iPhone 13", price: 999, image: "i2.avif" },
    { id: 2, name: "Book: React Basics", price: 29, image: "i1.jpg" },
    { id: 3, name: "Wireless Headphones", price: 199, image: "i4.jpg" }
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
    
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {

    setCart(cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0) // Only keep items with quantity greater than 0
    );
  };
  return (
    <div>
      <nav>
        <button className="pramod" onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("products")}>Products</button>
        <button onClick={() => setPage("cart")}>Cart ({cart.length})</button>
      </nav>

      {page === "home" && <Home setPage={setPage} />}
      {page === "products" && <div>{products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}</div>}
      {page === "cart" && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}
