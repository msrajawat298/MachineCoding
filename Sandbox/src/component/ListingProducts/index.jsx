"use client";

import { useEffect, useState } from "react";
import axios from "axios";

function Filter({ setFilter }) {
  return (
    <input
      type="text"
      placeholder="Search by name or category"
      className="form-control w-full border p-2 mb-5 rounded"
      onChange={(e) => setFilter(e.target.value.toLowerCase())}
    />
  );
}

function ProductList({ filter }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err));
  }, []);

  const filteredProducts = products.filter(
    (product) => 
      product.title.toLowerCase().includes(filter) || 
      product.category.toLowerCase().includes(filter)
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredProducts.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h3 className="font-bold">{product.title}</h3>
          <p className="text-gray-600">{product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [filter, setFilter] = useState("");

  return (
    <div className="p-6 max-w-lg mx-auto">
      <Filter setFilter={setFilter} />
      <ProductList filter={filter} />
    </div>
  );
}
