import React from "react";

const Products = ({ title, price, image, id }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-2xl">
      <div className="text-xl font-semibold text-center mb-4">Products</div>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
      <h3 className="text-xl font-semibold text-center text-green-600">
        ${price}
      </h3>
    </div>
  );
};

export default Products;
