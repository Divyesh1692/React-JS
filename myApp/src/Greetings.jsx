import React from "react";

const Greeting = ({ name }) => {
  console.log(name);

  return (
    <div className="flex items-center justify-center  ">
      <h1 className="text-2xl font-bold text-gray-800 ">
        {name ? `Hello ${name}` : "Hello, Welcome!"}
      </h1>
    </div>
  );
};

export default Greeting;
