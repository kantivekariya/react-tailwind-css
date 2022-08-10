import React from "react";

const Banner = () => {
  return (
    <div className="p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg-text-7xl font-bold">
            The <span className="text-[#3FC1CB]">Fast</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg-text-7xl font-bold">
            <span className="text-[#3FC1CB]">Foods</span> Delivered
          </h1>
        </div>
        <img
        className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
