import React from "react";
import { FaCheck } from "react-icons/fa6";

function Features({ features }) {
  if (!features || typeof features !== "object") {
    return null;
  }

  return (
    <div className="p-10 border shadow-md rounded-xl my-7">
      <h2 className="font-medium text-2xl">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-8">
        {Object.entries(features).map(([feature, value], index) => (
          <div
            key={index}
            className="flex gap-2 items-center"
          >
            <FaCheck className="text-lg p-1 rounded-full bg-blue-100 text-primary" />
            <h2>{feature}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
