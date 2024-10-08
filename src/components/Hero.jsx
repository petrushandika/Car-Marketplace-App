import React from "react";
import Search from "./Search";
import Car from "../assets/tesla.jpeg";

function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-5 py-10 h-[425px] md:h-[450px] lg:p-10 lg:py-20 gap-6 lg:h-[650px] w-full bg-[#eef0fc]">
        <h2 className="text-lg">Find cars for sale and for rent near you</h2>
        <h2 className="text-[30px] md:text-[45px] lg:text-[60px] font-bold">
          Find Your Dream Car
        </h2>
        <Search />

        <img
          src={Car}
          alt="car"
          className="w-[75%]"
        />
      </div>
    </div>
  );
}

export default Hero;
