import { IoIosPricetag } from "react-icons/io";
import { Link } from "react-router-dom";
function ProductsList({ products }) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {products &&
        products.products.map((product) => {
          return (
            <li key={product.id} className="card  bg-base-100 shadow-xl">
              <figure className="border-b-2 border-orange-300">
                <img
                  className="w-full h-52 object-cover"
                  src={product.thumbnail}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{product.title}</h2>
                <p className=" line-clamp-3">{product.description}</p>
                <ul className=" ">
                  <li className=" p-5">
                    <b>Type</b>:{product.category}
                  </li>
                  <li className=" p-5">
                    <b>Rating</b> :{product.rating}
                  </li>
                </ul>
                <div className="flex items-center">
                  <p className=" flex items-center gap-2  p-5">
                    <IoIosPricetag />
                    <b>Price:</b> {product.price}$
                  </p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary mt-5"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductsList;
