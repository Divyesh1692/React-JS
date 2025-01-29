import React, { useState } from "react";
import { FOODAPI } from "./api";

const Form = ({ initialData = {} }) => {
  const [food, setFood] = useState({
    name: initialData.name || "",
    price: initialData.price || "",
    image: initialData.image || "",
  });

  const createFood = async (food) => {
    try {
      if (initialData?.id) {
        console.log("update food", initialData.id);
        await FOODAPI.patch(`/food/${initialData.id}`, food);
      } else {
        await FOODAPI.post("/food", food);
      }
    } catch (error) {
      console.log("Error saving food:", error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFood({
      ...food,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await createFood(food);
    setFood({ name: "", price: "", image: "" });
  };

  

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-lg mb-8 space-y-4"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="name"
        value={food.name}
        placeholder="Product Name"
        onChange={handleInput}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        name="price"
        value={food.price}
        placeholder="Product Price"
        onChange={handleInput}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="image"
        value={food.image}
        placeholder="Product Image URL"
        onChange={handleInput}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      >
        Add Product
      </button>
    </form>
  );
};

export default Form;
