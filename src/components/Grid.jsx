import GridProduct from "./GridProduct";

/* eslint-disable react/prop-types */
const Grid = ({ products, getProducts }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {products.map((product, index) => {
        return (
          <>
            <GridProduct
              key={index}
              product={product}
              getProducts={getProducts}
            />
          </>
        );
      })}
    </div>
  );
};

export default Grid;
