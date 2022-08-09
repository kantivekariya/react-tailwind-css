import React from "react";
import { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  /* Filter */
  const filterByCategory = (category) => {
    setFoods(data.filter((item) => item.category === category.toLowerCase()));
  };

  const filterByPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterByCategory("Burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterByCategory("Pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterByCategory("Salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterByCategory("Chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700">Filter Prices</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterByPrice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterByPrice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterByPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterByPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              $$$$
            </button>
            <button
              onClick={() => filterByPrice("$$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              $$$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
