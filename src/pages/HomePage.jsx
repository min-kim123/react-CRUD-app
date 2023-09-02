import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/SingleGridProduct";

import { VITE_API_URL } from "../App";
import TableProduct from "../components/TableProduct";
import ProductTable from "../components/ProductTable";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedView, setSelectedView] = useState("table-view");
  let isTableView = true;

  const VIEWS = {
    "table-view": <TableProduct products={products} />,
  };

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${VITE_API_URL}/api/products`);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts();
    setIsLoading(false);
  }, []);

  return (
    <div>
      <label>
        <select
          name="view"
          defaultValue="apple"
          className="block my-3 py-2 bg-blue-400 rounded-sm text-white font-bold"
          onChange={(e) => setSelectedView(e.target.value)}
        >
          <option value="table-view">Table View</option>
          <option>Grid View</option>
        </select>
      </label>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {isLoading ? (
          "Loading"
        ) : (
          <>
            {isTableView ? "l" : "a"}
            {products.length > 0 /*if there are any products */ ? (
              <>
                {products.map((product, index) => {
                  return (
                    <>
                      <Product
                        key={index}
                        product={product}
                        getProducts={getProducts}
                      />
                    </>
                  );
                })}
                {products.map((product, index) => {
                  return (
                    <>
                      <ProductTable
                        key={index}
                        product={product}
                        getProducts={getProducts}
                      />
                    </>
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
      {VIEWS[selectedView]}
      <TableProduct products={[products, getProducts]} />
    </div>
  );
};

export default Homepage;
