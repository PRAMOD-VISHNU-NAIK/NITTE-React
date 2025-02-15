

function Cart({ cart, removeFromCart })
{
    return(
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
    )
}

export default Cart;