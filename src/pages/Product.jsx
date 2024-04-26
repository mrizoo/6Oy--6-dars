import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products/" + id);
  return (
    <>
      {product && (
        <div className="align-content">
          <h1 className="text-3xl mb-5"> Product - {product.title}</h1>
          <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
            {product.images.map((image) => {
              return (
                <div key={image} className="carousel-item">
                  <img
                    src={image}
                    className="rounded-box max-h-60 lg:max-h-96 h-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
