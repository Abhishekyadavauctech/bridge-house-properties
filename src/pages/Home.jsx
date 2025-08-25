import React, { useEffect } from "react";
import RealEstateBanner from "../components/RealEstateBanner";
import StoryCircle from "../components/StoryCircle";
import FeaturedPropertyType from "../components/FeaturedPropertyType";
import FeaturedPropertyTypes from "../components/FeaturedPropertyTypes";
import ProjectSlider from "../components/ProjectSlider"; 
import PropertySlider from "../components/PropertySlider";
import RentalListingApp from "../components/RentalListingApp";
import PropertyDetailPage from "../components/PropertyDetailPage";
import PropertyListings from "../components/PropertyListings";


const Home = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      
    }, []);
  return (
    <>
     
     <RealEstateBanner />
     {/* <StoryCircle /> */}
      <FeaturedPropertyType />
      {/* <FeaturedPropertyTypes /> */}
      {/* <ProjectSlider /> */}
      <PropertySlider />
      <RentalListingApp />
      <PropertyDetailPage />
      <PropertyListings />
    </>
  );
};

export default Home;
