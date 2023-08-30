import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VITE_API_URL } from "../App";
const CreatePage = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [numReviews, setNumReviews] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const saveProduct = async(e) => {
    e.preventDefault();
    if (
      name === "" ||
      slug === "" ||
      category === "" ||
      brand === "" ||
      rating === "" ||
      numReviews === "" ||
      description === "" ||
      quantity === "" ||
      price === "" ||
      image === ""
    ) {
      alert("Please fill out all input completely");
      return;
    } try {
      setIsLoading(true);
      
      await axios.post(`${VITE_API_URL}/api/products/`, {
        name: name,
        slug: slug,
        category: category,
        brand: brand,
        rating: rating,
        numReviews: numReviews,
        description: description,
        quantity: quantity,
        price: price,
        image: image,
      });
      setIsLoading(false);
      navigate("/");
      console.log("submitted");
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className=" ">
      <h2 className="block text-center">create a product</h2>
      <form onSubmit={saveProduct}>
        <div className="space-y-2">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.slug)}
            ></input>
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Rating</label>
            <input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Number of Reviews</label>
            <input
              type="text"
              value={numReviews}
              onChange={(e) => setNumReviews(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </div>
          <div>
            { !isLoading && (<button>Save</button>)}
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
