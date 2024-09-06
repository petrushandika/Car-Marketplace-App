import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import MostSearchedCar from "../components/MostSearchedCar";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";

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
      {/* Info Section */}
      <InfoSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
