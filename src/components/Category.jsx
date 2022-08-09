import React from "react";
import { categories } from "../data/data";

const Category = () => {
  return (
    <div>
      <h1>Top Rated Menu Items</h1>
      <div>
        {categories.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
