import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    //initial values
    name: "",
    quantity: "",
    price: "",
    image: "",
  });

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );
      setProduct({
        //replace original values instead of changing them
        name: response.data.name,
        slug: response.data.slug,
        category: response.data.category,
        brand: response.data.brand,
        rating: response.data.rating,
        numReviews: response.data.numReviews,
        description: response.data.description,
        quantity: response.data.quantity,
        price: response.data.price,
        image: response.data.image,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`http://localhost:8000/api/products/${id}`, product);
      alert("Product updated");
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h2>Update Product</h2>
      {isLoading ? (
        "Loading"
      ) : (
        <form onSubmit={updateProduct}>
          <div className="space-y-2">
            <div>
              <label>Name</label>
              <input
                type="text"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label>Slug</label>
              <input
                type="text"
                value={product.slug}
                onChange={(e) =>
                  setProduct({ ...product, slug: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label>Category</label>
              <input
                type="text"
                value={product.category}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label>Brand</label>
              <input
                type="text"
                value={product.brand}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label>Rating</label>
              <input
                type="text"
                value={product.rating}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label>NumReviews</label>
              <input
                type="text"
                value={product.numReviews}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label>Quantity</label>
              <input
                type="text"
                value={product.quantity}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="text"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label>Image</label>
              <input
                type="text"
                value={product.image}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>

            <div>
              <button>Submit</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditPage;
