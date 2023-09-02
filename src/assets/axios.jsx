const deleteProduct = async (id) => {
  try {
    await axios.delete(`${VITE_API_URL}/api/products/${id}`);
    alert("Product deleted");
    getProducts();
  } catch (error) {
    alert(error);
  }
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