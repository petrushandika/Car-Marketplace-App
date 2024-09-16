import React from "react";
import Data from "../components/shared/Data";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">Browse By Type</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
        {Data.Category.map((category) => (
          <Link
            key={category.id}
            to={"/search/" + category.name}
          >
            <div className="border rounded-md p-3 items-center flex flex-col hover:shadow-md cursor-pointer">
              <img
                src={category.icon}
                alt={category.name}
                className="w-9"
              />
              <h2>{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
