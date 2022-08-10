import React from "react";
import { useState } from "react";
import { data } from "../data/data";

/* Category button array */
const categoryFilterBtn = ["All", "Burger", "Pizza", "Salad", "Chicken"];

/* Price list array */
const itemsPrice = ["$", "$$", "$$$", "$$$$"];

const Food = () => {
  const [foods, setFoods] = useState(data);

  /* Filter By Category */
  const filterByCategory = (category) => {
    setFoods(data.filter((item) => item.category === category.toLowerCase()));
  };

  /* Filter By Price */
  const filterByPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <div className="px-4 py-12">
      <h1 className="text-black-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter By Category */}
        <div>
          <p className="font-bold text-gray-700">Filter By Category</p>
          <div className="flex justify-between flex-wrap">
            {categoryFilterBtn.map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  item === "All" ? setFoods(data) : filterByCategory(item)
                }
                className="m-1 border-[#3FC1CB] text-[#3FC1CB] hover:bg-[#3FC1CB] hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Filter By Prices */}
        <div>
          <p className="font-bold text-gray-700">Filter By Prices</p>
          <div className="flex justify-between max-w-[390px] w-full">
            {itemsPrice.map((item, index) => (
              <button
                key={index}
                onClick={() => filterByPrice(item)}
                className="m-1 border-[#3FC1CB] text-[#3FC1CB] hover:bg-[#3FC1CB] hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Foods Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 cursor-pointer">
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
                <span className="bg-[#3FC1CB] text-white p-1 rounded-full">
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
