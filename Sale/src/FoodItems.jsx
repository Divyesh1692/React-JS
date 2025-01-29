import React, { useState } from "react";
import Form from "./Form";
import { Modal } from "@mui/material";



const FoodItems = ({ name, price, image, id, onDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      <div className="text-xl font-semibold text-center mb-4 text-gray-700">
        Food Items
      </div>
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        {name}
      </h2>
      <h3 className="text-xl font-semibold text-center text-green-600">
        ${price}
      </h3>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => onDelete(id)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
        >
          Delete
        </button>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Edit
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Form initialData={{ name, price, image, id }} />
      </Modal>
    </div>
  );
};

export default FoodItems;
