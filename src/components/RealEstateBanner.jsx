import React, { useState } from 'react';
import { Search, Home, Building } from 'lucide-react';
import bannerBg from "../assets/bridge-bg.png";


const RealEstateBanner = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [formData, setFormData] = useState({
    keyword: '',
    propertyType: '',
    address: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatPrice = (value) => {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue) {
      return '$' + parseInt(numericValue).toLocaleString();
    }
    return value;
  };

  const handlePriceChange = (field, value) => {
    const formattedValue = formatPrice(value);
    handleInputChange(field, formattedValue);
  };

  const handleSearch = () => {
    const searchParams = {
      type: activeTab,
      ...formData
    };
    
    alert(`Searching for ${searchParams.type} properties...\n\nKeyword: ${searchParams.keyword || 'Any'}\nType: ${searchParams.propertyType || 'Any'}\nLocation: ${searchParams.address || 'Any'}\nPrice Range: ${searchParams.minPrice || '$0'} - ${searchParams.maxPrice || '$∞'}`);
    
    console.log('Search Parameters:', searchParams);
  };

  const keywordOptions = [
    { value: '', label: 'Select' },
    { value: 'luxury-villa', label: 'Luxury Villa' },
    { value: 'modern-apartment', label: 'Modern Apartment' },
    { value: 'family-house', label: 'Family House' },
    { value: 'studio', label: 'Studio' },
    { value: 'penthouse', label: 'Penthouse' }
  ];

  const propertyTypeOptions = [
    { value: '', label: 'Select' },
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
    { value: 'condo', label: 'Condo' },
    { value: 'townhouse', label: 'Townhouse' }
  ];

  return (
    <div className="relative items-center justify-center w-full  flex items-center px-8 overflow-hidden py-30   " style={{
    backgroundImage: `url(${bannerBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  >
     
      {/* Main Content */}
      <div className="sm:w-full lg:w-[80%]  xl:w-[80%] 2xl:w-[70%] z-10">
        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-5">
          {activeTab === 'buy' ? (
            <>Find Your Best Dream House<br />for Rental, Buy & Sell...</>
          ) : (
            <>Find Your Perfect Rental<br />Property Today...</>
          )}
        </h1>
        
        <p className="text-slate-600 text-base mb-10 leading-relaxed">
          Properties for buy / rent in in your location. We have more than 3000+ listings for you to choose
        </p>

        {/* Tab Buttons */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => handleTabSwitch('buy')}
            className={`flex items-center gap-2 px-4 py-3 font-medium text-sm rounded-lg transition-all duration-300 ${
              activeTab === 'buy'
                ? 'bg-teal-500 text-white shadow-lg'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <Home size={18} />
            Buy Property
          </button>
          <button
            onClick={() => handleTabSwitch('rent')}
            className={`flex items-center gap-2 px-4 py-3 font-medium text-sm rounded-lg transition-all duration-300 ${
              activeTab === 'rent'
                ? 'bg-teal-500 text-white shadow-lg'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <Building size={18} />
            Rent Property
          </button>
          <button
            onClick={() => handleTabSwitch('plot')}
            className={`flex items-center gap-2 px-4 py-3 font-medium text-sm rounded-lg transition-all duration-300 ${
              activeTab === 'plot'
                ? 'bg-teal-500 text-white shadow-lg'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <Building size={18} />
            Plot
          </button>
          <button
            onClick={() => handleTabSwitch('commercial')}
            className={`flex items-center gap-2 px-4 py-3 font-medium text-sm rounded-lg transition-all duration-300 ${
              activeTab === 'commercial'
                ? 'bg-teal-500 text-white shadow-lg'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <Building size={18} />
            Commercial  
          </button>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-xl p-8 shadow-xl grid grid-cols-6 gap-5 items-end">
          {/* Keyword */}
          <div className="flex flex-col">
            <label className="text-sm text-slate-600 mb-2 font-medium">Keyword</label>
            <select
              value={formData.keyword}
              onChange={(e) => handleInputChange('keyword', e.target.value)}
              className="px-4 py-3 border-2 border-slate-200 rounded-lg text-sm bg-white text-slate-700 transition-colors focus:outline-none focus:border-teal-500 cursor-pointer"
            >
              {keywordOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          {/* Property Type */}
          <div className="flex flex-col">
            <label className="text-sm text-slate-600 mb-2 font-medium">Property Type</label>
            <select
              value={formData.propertyType}
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
              className="px-4 py-3 border-2 border-slate-200 rounded-lg text-sm bg-white text-slate-700 transition-colors focus:outline-none focus:border-teal-500 cursor-pointer"
            >
              {propertyTypeOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label className="text-sm text-slate-600 mb-2 font-medium">Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Enter location..."
              className="px-4 py-3 border-2 border-slate-200 rounded-lg text-sm text-slate-700 transition-colors focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Min Price */}
          <div className="flex flex-col">
            <label className="text-sm text-slate-600 mb-2 font-medium">Min Price</label>
            <input
              type="text"
              value={formData.minPrice}
              onChange={(e) => handlePriceChange('minPrice', e.target.value)}
              placeholder="$"
              className="px-4 py-3 border-2 border-slate-200 rounded-lg text-sm text-slate-700 transition-colors focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Max Price */}
          <div className="flex flex-col">
            <label className="text-sm text-slate-600 mb-2 font-medium">Max Price</label>
            <input
              type="text"
              value={formData.maxPrice}
              onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
              placeholder="$"
              className="px-4 py-3 border-2 border-slate-200 rounded-lg text-sm text-slate-700 transition-colors focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-teal-500 text-white px-2 py-3 rounded-lg hover:bg-teal-600 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <Search size={20} />
          </button>
        </div>
      </div>

     
      {/* Responsive Design - Mobile/Tablet */}
      <style jsx>{`
        @media (max-width: 1200px) {
          .grid-cols-6 {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .px-20 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .text-5xl {
            font-size: 2rem;
          }
          
          .grid-cols-6 {
            grid-template-columns: 1fr;
          }
          
          .p-8 {
            padding: 1.5rem;
          }
          
          .gap-5 {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RealEstateBanner;