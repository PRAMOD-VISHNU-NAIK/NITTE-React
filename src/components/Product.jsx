const Product = ({ product, addToCart }) => (
    <div className="divp">
      <img src={product.image} className="image"
 alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
  
  export default Product;
  
  