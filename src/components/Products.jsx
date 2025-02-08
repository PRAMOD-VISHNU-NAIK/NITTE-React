const Products = ({ products, addToCart }) => (
    <div>
      <h1 className="text-xl font-bold">Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)} className="bg-blue-500 p-2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );