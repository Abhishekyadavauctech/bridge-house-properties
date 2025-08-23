import React from 'react';
import { ArrowUpRight, Building, Home, TreePine, Building2, Copy } from 'lucide-react';

export default function FeaturedPropertyTypes() {
  const propertyTypes = [
    {
      id: 1,
      title: 'Houses',
      count: '288 Property',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'Offices',
      count: '300 Property',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'Villas',
      count: '250 Property',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 4,
      title: 'Apartments',
      count: '230 Property',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&crop=center'
    },
    {
      id: 5,
      title: 'Duplexes',
      count: '320 Property',
      icon: Copy,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop&crop=center'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-12 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Featured Property Type
        </h2>
        <p className="text-gray-600 text-lg">
          Explore Our Curated Selection of Premium Properties for Unmatched Luxury
        </p>
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {propertyTypes.map((property) => {
          const IconComponent = property.icon;
          return (
            <div
              key={property.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                
                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-gray-700" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {property.count}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}