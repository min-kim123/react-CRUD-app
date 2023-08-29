import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

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
        `http://localhost:8000/api/products${id}`
      );
      setProduct({
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
    } catch (error) {}
  };

  const updateProduct = async () => {
    try {
      await axios.put(`http://localhost:8000/api/products${id}`, product);
      alert("Product updated");
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

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
                value={product.Slug}
                onChange={(e) =>
                  setProduct({ ...product, Slug: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label>Category</label>
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
              <label>Brand</label>
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
              <label>Rating</label>
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
              <label>NumReviews</label>
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
                value={product.name}
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
                value={product.name}
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
                value={product.name}
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
