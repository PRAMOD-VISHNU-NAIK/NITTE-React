const Home = ({setPage}) => (
    <div><br></br>
      <h1>Welcome to Our Store</h1>
      <p>Find the best products at amazing prices</p>
      <button className="one"onClick={() => setPage("products")}>Shop Now</button>
    </div>
  );
  export default Home;