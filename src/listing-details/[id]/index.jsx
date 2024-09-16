import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import DetailHeader from "../components/DetailHeader";
import { useParams } from "react-router-dom";
import db from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "../../components/shared/Service";
import ImageGallery from "../components/ImageGallery";
import Description from "../components/Description";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Specification from "../components/Specification";
import OwnersDetail from "../components/OwnersDetail";
import FinancialCalculator from "../components/FinancialCalculator";
import MostSearchedCar from "../../components/MostSearchedCar";
import Footer from "../../components/Footer";

function ListingDetail() {
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState();

  useEffect(() => {
    GetCarDetail();
  }, []);

  const GetCarDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));

    const resp = Service.FormatResult(result);
    console.log(resp);

    setCarDetail(resp[0]);
  };

  return (
    <div>
      <Header />

      <div className="p-5 lg:p-10 md:px-20">
        <DetailHeader carDetail={carDetail} />

        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5">
          <div className="md:col-span-2">
            <ImageGallery carDetail={carDetail} />
            <Description carDetail={carDetail} />
            <Features features={carDetail?.features} />
            <FinancialCalculator carDetail={carDetail} />
          </div>
          <div>
            <Pricing carDetail={carDetail} />
            <Specification carDetail={carDetail} />
            <OwnersDetail carDetail={carDetail} />
          </div>
        </div>
        <MostSearchedCar />
      </div>
      <Footer />
    </div>
  );
}

export default ListingDetail;
