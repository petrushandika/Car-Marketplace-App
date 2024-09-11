import React, { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import db from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { desc, eq } from "drizzle-orm";

function MyListing() {
  const { user } = useUser();

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

    console.log(result);
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-4xl">My Listing</h2>
        <Link to={"/add-listing"}>
          <Button>+ Add New Listing</Button>
        </Link>
      </div>
    </div>
  );
}

export default MyListing;
