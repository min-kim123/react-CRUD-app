import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Link } from "react-router-dom";

const Homepage = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async() => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:8000/api/products/");
      console.log(response.data);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error){
      console.log(error);
    }
  }

  useEffect(()=> {
    getProducts();
  }, []);


  return (
    <div>
      <div>
        <Link to="/create/" className="mt-4 shadow-md bg-blue-700">
          Create a Product
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {isLoading ? (
          "Loading"
        ) : (
          <>
            {products.length > 0 ? (
              <>
                {products.map((product, index) => {
                  return (
                    <Product
                      key={index}
                      product={product}
                      getProducts={getProducts}
                    />
                  );
                })}
              </>
            ) : (
              <div className="mt-4 bg-gray-800 text-white font-serif p-4">
                There is no product
              </div>
            )}
          </>
        )}
      </div>


    </div>
  );
};

export default Homepage;
