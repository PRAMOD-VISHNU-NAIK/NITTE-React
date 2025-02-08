const Home = ({ setPage }) => (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold">Welcome to Our Store</h1>
      <button onClick={() => setPage("products")} className="text-blue-500 underline">
        Shop Now
      </button>
    </div>
  );