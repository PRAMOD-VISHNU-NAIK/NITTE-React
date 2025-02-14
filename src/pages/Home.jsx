const Home = ({ setPage }) => (
    <div>
      <h1>Welcome to Our Store</h1>
      <p>Find the best products at amazing prices</p>
      <button onClick={() => setPage("products")}>Shop Now</button>
    </div>
  );
  
  export default Home;
  