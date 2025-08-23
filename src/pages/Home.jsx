import React, { useEffect } from "react";
import RealEstateBanner from "../components/RealEstateBanner";
import StoryCircle from "../components/StoryCircle";
import FeaturedPropertyType from "../components/FeaturedPropertyType";
import FeaturedPropertyTypes from "../components/FeaturedPropertyTypes";


const Home = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      
    }, []);
  return (
    <>
     
     <RealEstateBanner />
     {/* <StoryCircle /> */}
      <FeaturedPropertyType />
      <FeaturedPropertyTypes />
    </>
  );
};

export default Home;
