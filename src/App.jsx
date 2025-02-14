import { useState } from "react";
import "./app.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([{
    id: 1,
    name: "iPhone 13",
    price: 999,
    image: "cam.jpg",
    qty: 1
  }]);
  const [page, setPage] = useState("home");

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
  
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };
  
  
  console.log("cart", cart);

  const updateQuantity = (id, newQty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, newQty) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <button className="nav-button" onClick={() => setPage("home")}>
          Home
        </button>
        <button className="nav-button" onClick={() => setPage("products")}>
          Products
        </button>
        <button
          className="nav-button cart-button"
          onClick={() => setPage("cart")}
        >
          Cart ({cart.length})
        </button>
      </nav>

      <div className="content">
        {page === "home" && <Home setPage={setPage} />}
        {page === "products" && <Products addToCart={addToCart} />}
        {page === "cart" && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        )}
      </div>
    </div>
  );
}
