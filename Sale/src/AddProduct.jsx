import { useEffect, useState } from "react";
import FoodItems from "./FoodItems";
import Timer from "./timer";
import Products from "./Productgrid";
import { API, FOODAPI } from "./api.js";

const Sale = () => {
  const foodTimer = { h: 0, m: 30, s: 0 };
  const productTimer = { h: 1, m: 0, s: 0 };

  const [foodList, setFoodList] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch Food Items
  const getFood = async () => {
    FOODAPI.get("/food")
      .then((res) => {
        setFoodList(res.data);
      })
      .catch((error) => console.error("Error fetching food:", error));
  };

  // Fetch Products
  const getProducts = async () => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  // Handle Deletion of a Food Item
  const handleDelete = async (id) => {
    try {
      await FOODAPI.delete(`/food/${id}`);
      setFoodList((prevList) => prevList.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Couldn't delete:", error);
    }
  };

  // Fetch Data on Mount
  useEffect(() => {
    getProducts();
    getFood();
    
  }, []);

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      {foodList.length > 0 && <Timer {...foodTimer} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foodList.map((food) => (
          <FoodItems key={food.id} {...food} onDelete={handleDelete} />
        ))}
      </div>

      {products.length > 0 && <Timer {...productTimer} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Products key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Sale;
