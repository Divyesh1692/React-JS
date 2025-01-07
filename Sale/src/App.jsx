import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ProductGrid from './Productgrid';



function App() {
  const [customProducts, setCustomProducts] = useState([]);

  const addProductHandler = (product) => {
    setCustomProducts([...customProducts, product]);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Sale Page</h1>
      <AddProduct onAddProduct={addProductHandler} />
      <ProductGrid category="product" />
      <ProductGrid category="food" />
    </div>
  );
}

export default App;
