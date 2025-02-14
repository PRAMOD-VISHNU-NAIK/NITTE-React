import React from "react";
import "./Cart.css";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <h2 className="cart-item-name">{item.name}</h2>
              <p className="cart-item-price">Rs. {Number(item.price)}</p>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.id, item.qty - 1)} disabled={item.qty === 1}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQuantity(item.id, item.qty + 1)}>+</button>
              </div>
              <p className="cart-item-total">Total: Rs. {item.price * item.qty}</p>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <h3 className="cart-total">Grand Total: Rs. {totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
