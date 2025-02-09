import { useState } from "react";
import './app.css'
import Cart from './components/Cart';
import Products from './components/Products';
import Home from './pages/Home';



export default function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  const products = [
    { id: 1, name: "iPhone 13", price: 999, image: "/iphone13.jpg" },
    { id: 2, name: "Book: React Basics", price: 29, image: "/reactbook.png" },
    { id: 3, name: "Wireless Headphones", price: 199, image: "/headphones.jpg" }
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (id) => {
    setCart((prevCart) => 
      prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  return (
    <div>
      <nav>
        <button className="riya" onClick={() => setPage("home")}>Home</button>
        <button className="riya"onClick={() => setPage("products")}>Products</button>
        <button className="riya" onClick={() => setPage("cart")}>Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</button>
      </nav>

      {page === "home" && <Home setPage={setPage} />}
      {page === "products" && <Products products={products} addToCart={addToCart} />}
      {page === "cart" && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}