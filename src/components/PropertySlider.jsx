import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const PropertySlider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const properties = [
    {
      name: "Sample Property 1",
      developer: "By Auctech, 1090, Gomti Nagar",
      area: "Area 2(3): 2906 sqft",
      price: "1.03 Cr onwards",
      features: [
        "Nearby River Front",
        "Upcoming Lucknow Expressway Road"
      ],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop"
    },
    {
      name: "Sample Property 2",
      developer: "By ABC Developers, Indra Nagar, Lucknow",
      area: "Area 2(3): 2500 sqft",
      price: "95 Lakh onwards",
      features: [
        "Near IT parks and corporate offices",
        "Well connected metro connectivity"
      ],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
  };
  
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
         <div className="flex justify-center mb-3">
          <span className="h-1 w-12 bg-gradient-to-r from-purple-500 to-green-400 rounded-full"></span>
        </div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Top Properties and Upcoming Projects - Bridge House
        </h2>
        <p className="text-gray-500 mt-2">
          Explore Our Curated Selection of Premium Properties for Unmatched Luxury
        </p>
        
      </div>
        <div className="relative">
          {/* Main Slider Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white">
            <div className="flex h-96">
              {/* Left Content Panel */}
              <div className="w-1/2 bg-gradient-to-br from-teal-600 via-teal-400 to-teal-200 text-white p-14 flex flex-col justify-center relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 leading-tight">
                    {properties[currentSlide].name}
                  </h2>
                  
                  <p className="text-white/90 text-base mb-6 font-medium">
                    {properties[currentSlide].developer}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-white/90 mb-2">
                      {properties[currentSlide].area}
                    </p>
                    <p className="text-xl font-bold">
                      {properties[currentSlide].price}
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {properties[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-white/95 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                    See Details
                  </button>
                </div>
              </div>
              
              {/* Right Image Panel */}
              <div className="w-1/2 relative">
                <img 
                  src={properties[currentSlide].image}
                  alt={properties[currentSlide].name}
                  className="w-full h-full object-cover"
                />
                
                {/* Small building icon overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white/80 rounded"><img width="48" height="48" src="https://img.icons8.com/color/48/verified-account--v1.png" alt="verified-account--v1"/></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-gray-800 rounded-full p-3 transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-gray-800 rounded-full p-3 transition-all duration-200 z-10"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-pink-400 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertySlider;