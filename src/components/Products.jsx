const Products = ({ products, addToCart }) => (
    <div>
      {products.map((product) => (
        <div key={product.id} className="image">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button className="two"onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
  export default Products;