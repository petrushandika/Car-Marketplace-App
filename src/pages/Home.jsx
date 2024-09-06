import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import MostSearchedCar from "../components/MostSearchedCar";

function HomePage() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Category */}
      <Category />
      {/* Most Searched Car */}
      <MostSearchedCar />
    </div>
  );
}

export default HomePage;
