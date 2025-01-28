import { useEffect, useState } from "react";
import FoodItems from "./FoodItems";
import Timer from "./timer";
import Products from "./Productgrid";
import { API, FOODAPI } from "./api.js";

const Sale = ({ initialData = {} }) => {
  let foodTimer = {
    h: 0,
    m: 30,
    s: 0,
  };

  let productTimer = {
    h: 1,
    m: 0,
    s: 0,
  };

  const [food, setFood] = useState({
    name: initialData.name ? initialData.name : "",
    price: initialData.price ? initialData.price : "",
    image: initialData.image ? initialData.image : "",
  });

  let [list, setList] = useState([]);
  const getFood = async () => {
    try {
      let res = await FOODAPI.get("/food");
      console.log(res.data);
      setList(res.data);
    } catch (error) {
      console.log("Couldn't get", error);
    }
  };

  const createFood = async (food) => {
    if (initialData?.id) {
      console.log("update food", initialData.id);
      await API.patch(`/food/${initialData.id}`, course);
    } else {
      let res = await FOODAPI.post("/food", food);
    }
  };

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let res = await API.get("/products");
    setProducts(res.data);
    console.log(res.data);
  };

  const handleDelete = async (id) => {
    try {
      await FOODAPI.delete(`/food/${id}`);
    } catch (error) {
      console.log("Couldn't delete", error);
    }
  };

  useEffect(() => {
    getProducts();
    getFood();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createFood(food);
    setFood({
      name: "",
      price: "",
      image: "",
    });
  };

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <form className="bg-white p-6 rounded-lg shadow-lg mb-8 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleInput}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          onChange={handleInput}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="image"
          placeholder="Product Image URL"
          onChange={handleInput}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Add Product
        </button>
      </form>

      {list.length > 0 && <Timer {...foodTimer} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {list.map((e) => (
          <FoodItems key={e.id} {...e} onDelete={handleDelete} />
        ))}
      </div>

      {products.length > 0 && <Timer {...productTimer} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((e) => (
          <Products key={e.id} {...e} />
        ))}
      </div>
    </div>
  );
};

export default Sale;
