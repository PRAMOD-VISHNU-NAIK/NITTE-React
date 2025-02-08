import { useState } from "react";
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
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-600 p-4 text-white flex justify-between font-semibold">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("products")}>Products</button>
        <button onClick={() => setPage("cart")}>Cart ({cart.length})</button>
      </nav>

      {page === "home" && <Home setPage={setPage} />}
      {page === "products" && <Products products={products} addToCart={addToCart} />}
      {page === "cart" && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}

// src/pages/Home.tsx
const Home = ({ setPage }) => (
  <div className="text-center p-10">
    <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
    <p className="text-gray-700 mt-2">Find the best products at amazing prices</p>
    <button onClick={() => setPage("products")} className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md">
      Shop Now
    </button>
  </div>
);

// src/components/Products.tsx
const Products = ({ products, addToCart }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-md bg-white">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
          <h2 className="text-lg font-bold mt-2">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button onClick={() => addToCart(product)} className="mt-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-md w-full">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
);

// src/components/Cart.tsx
const Cart = ({ cart, removeFromCart }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Cart</h1>
    {cart.length === 0 ? (
      <p className="text-gray-700">Your cart is empty</p>
    ) : (
      cart.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg bg-white shadow-md flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md">
            Remove
          </button>
        </div>
      ))
    )}
  </div>
);
