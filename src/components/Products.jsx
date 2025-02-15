

const Products = ({ products, addToCart }) =>{
    return(
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
    )
}

export default Products;