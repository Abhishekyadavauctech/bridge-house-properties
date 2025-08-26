import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
} from "lucide-react";

const PropertySliderTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3); // default for desktop

  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      title: "Modern Luxury Villa",
      price: "₹850,000",
      location: "Beverly Hills, CA",
      beds: 4,
      baths: 3,
      area: "2,500 sq ft",
      type: "Villa",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      title: "Downtown Penthouse",
      price: "₹1,200,000",
      location: "Manhattan, NY",
      beds: 3,
      baths: 2,
      area: "1,800 sq ft",
      type: "Penthouse",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      title: "Cozy Family Home",
      price: "₹450,000",
      location: "Austin, TX",
      beds: 3,
      baths: 2,
      area: "1,600 sq ft",
      type: "House",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Oceanfront Condo",
      price: "₹750,000",
      location: "Miami Beach, FL",
      beds: 2,
      baths: 2,
      area: "1,200 sq ft",
      type: "Condo",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
      title: "Mountain Retreat",
      price: "₹680,000",
      location: "Aspen, CO",
      beds: 3,
      baths: 3,
      area: "2,200 sq ft",
      type: "Cabin",
    },
  ];

  // Handle responsiveness
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // Tablet
      } else {
        setItemsToShow(3); // Desktop
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const maxIndex = Math.max(0, properties.length - itemsToShow);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {property.type}
        </div>
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white group-hover:text-red-500">
          <Heart size={18} />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <span className="text-xl font-bold text-green-600">
            {property.price}
          </span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-2 text-red-500" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex justify-between p-4 items-center text-gray-700 mb-4">
          <div className="flex items-center">
            <Bed size={16} className="mr-1 text-blue-500" />
            <span className="text-sm mr-4">{property.beds}</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1 text-teal-500" />
            <span className="text-sm mr-4">{property.baths}</span>
          </div>
          <div className="flex items-center">
            <Square size={16} className="mr-1 text-purple-500" />
            <span className="text-sm">{property.area}</span>
          </div>
        </div>

        <button className="w-full bg-teal-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-1">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Properties
          </span>
        </h1>
        <p className="text-base text-gray-600">
          Discover your dream home from our premium collection
        </p>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              width: `${(properties.length / itemsToShow) * 100}%`,
            }}
          >
            {properties.map((property) => (
              <div
                key={property.id}
                className="px-2 sm:px-4"
                style={{ width: `${100 / properties.length}%` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-100 hover:scale-110 group"
        >
          <ChevronLeft
            size={20}
            className="text-gray-700 group-hover:text-blue-600"
          />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-100 hover:scale-110 group"
        >
          <ChevronRight
            size={20}
            className="text-gray-700 group-hover:text-blue-600"
          />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-blue-600 to-purple-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertySliderTwo;
