import { useFetch } from "../hooks/useFetch";
import ProductsList from "../components/ProductsList";
function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products");
  return (
    <div>
      <div className="align-content">
        <h1 className="text-3xl text-center mb-4">All products</h1>
        {isPending && <h3 className="text-3xl my-2 text-center">Loading...</h3>}
        <ProductsList products={products} />
      </div>
    </div>
  );
}

export default Home;
