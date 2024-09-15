import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import db from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import Service from "../../components/shared/Service";
import CarItem from "../../components/CarItem";
import { MdDelete } from "react-icons/md";

function MyListing() {
  const { user } = useUser();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    if (user) {
      GetUserCarListing();
    }
  }, [user]);

  const GetUserCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CarListing.id));

    console.log("result", result);

    const resp = Service.FormatResult(result);
    console.log("x", resp);
    setCarList(resp);
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl">My Listing</h2>
        <Link to={"/add-listing"}>
          <Button>+ Add New Listing</Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5">
        {carList.map((item, index) => (
          <div key={index}>
            <CarItem car={item} />
            <div className="p-2 bg-gray-50 rounded-lg flex justify-between gap-3">
              <Button
                variant="outline"
                className="w-full"
              >
                Edit
              </Button>
              <Button variant="destructive">
                <MdDelete />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyListing;
