import { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="mt-5">
        {isLoading ? (
          "Loading"
        ) : (
          <>
          {products.length > 0 ? (
            <>{
            products.map(product, index) =>
            
            </>
          )}
        }
          </>
        )
        }
      </div>
    </div>
  )
}

export default Homepage;
