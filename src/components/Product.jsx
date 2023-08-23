import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Product = ({product}) => {
  return(
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img src={product.image} className="w-full h-28 object-cover"/>
      <div className="px-4 pt-2 pb-4">
        <h2 className="text font-semibold">{product.name} </h2>
        <h2 >Quantity: {product.quantity} </h2>
        <h2 className="text">Price: ${product.price} </h2>
        <div>
          <Link className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer"to={`/edit`}>Edit</Link>
          <Link className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer"to={`/edit`}>Delete</Link>

        </div>
      </div>
    </div>
  )
}

export default Product;


