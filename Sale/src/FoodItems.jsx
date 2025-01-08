import React from 'react'

const FoodItems = ({name,price,image,id}) => {



  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
    <div className="text-xl font-semibold text-center mb-4 text-gray-700">Food Items</div>
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">{name}</h2>
    <h3 className="text-xl font-semibold text-center text-green-600">${price}</h3>
</div>


  )
}

export default FoodItems