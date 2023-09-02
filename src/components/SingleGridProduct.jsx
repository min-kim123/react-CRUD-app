import axios from "axios";
import { Link } from "react-router-dom";
import { VITE_API_URL } from "../App";

/* eslint-disable react/prop-types */
const Product = ({ product, getProducts }) => {
  
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${VITE_API_URL}/api/products/${id}`);
      alert("Product deleted");
      getProducts();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img src={product.image} className="w-full h-28 object-cover" />
      <div className="px-4 pt-2 pb-4">
        <h2 className="text font-semibold">{product.name} </h2>
        <h2>Quantity: {product.quantity} </h2>
        <h2 className="text">Price: ${product.price} </h2>
        <div>
          <Link
            to={`/edit/${product._id}`}
            className="inline-block w-full text-center shadow-md text-sm bg-blue-500 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteProduct(product._id)}
            className="inline-block w-full text-center shadow-md text-sm bg-red-600 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;