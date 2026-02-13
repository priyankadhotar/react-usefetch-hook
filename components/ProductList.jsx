import useFetch from "../hooks/useFetch";

const ProductList = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="grid">
        {data &&
          data.slice(0, 12).map((product) => (
            <div className="card" key={product.id}>
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p>₹ {product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
