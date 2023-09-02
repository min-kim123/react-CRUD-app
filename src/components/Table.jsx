/* eslint-disable react/prop-types */

import TableProduct from "./TableProduct";

const Table = ({ products, getProducts }) => {
  return (
    <>
      <div className="mt-6 overflow-auto">
        <table className="table-auto mx-auto bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2">id</th>
              <th className="text-left px-4 py-2">Name</th>
              <th className="w-20 px-4 py-2">Image</th>
              <th className="text-left px-4 py-2">Slug</th>
              <th className="text-left px-4 py-2">Category</th>
              <th className="text-left px-4 py-2">Brand</th>
              <th className="text-left px-4 py-2">Rating</th>
              <th className="text-left px-4 py-2">#Reviews</th>
              <th className="text-left px-4 py-2">Description</th>
              <th className="text-left px-4 py-2">Quantity</th>
              <th className="text-left px-4 py-2">Price</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <>
                  <TableProduct
                    key={index}
                    product={product}
                    getProducts={getProducts}
                  />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
