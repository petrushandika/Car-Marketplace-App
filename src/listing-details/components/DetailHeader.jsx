import React from "react";
import { HiCalendarDays } from "react-icons/hi2";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiGasPump, GiGearStickPattern } from "react-icons/gi";

function DetailHeader({ carDetail }) {
  return (
    <div>
      {carDetail?.listingTitle ? (
        <div>
          <h1 className="font-bold text-3xl">{carDetail?.listingTitle}</h1>
          <p>{carDetail?.tagLine}</p>

          <div className="grid grid-cols-2 lg:flex md:flex gap-2 mt-3">
            <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <HiCalendarDays className="w-7 h-7 text-primary" />
              <h2 className="text-primary text-sm">{carDetail?.year}</h2>
            </div>
            <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <GiGasPump className="w-7 h-7 text-primary" />
              <h2 className="text-primary text-sm">
                {carDetail?.mileage} Miles
              </h2>
            </div>
            <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <GiGearStickPattern className="w-7 h-7 text-primary" />
              <h2 className="text-primary text-sm">
                {carDetail?.transmission}
              </h2>
            </div>
            <div className="flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <BsSpeedometer2 className="w-7 h-7 text-primary" />
              <h2 className="text-primary text-sm">{carDetail?.fuelType}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
}

export default DetailHeader;
