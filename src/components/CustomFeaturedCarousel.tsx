'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/types';

interface CustomFeaturedCarouselProps {
  products: Product[];
}

export default function CustomFeaturedCarousel({ products }: CustomFeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4; // Display 4 items per slide
  const carouselRef = useRef<HTMLDivElement>(null);

  // Get visible products for the current view
  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  );

  const handleNext = () => {
    if (currentIndex + itemsPerSlide < products.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Loop back to the beginning
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      // Loop to the end
      setCurrentIndex(Math.max(0, products.length - itemsPerSlide));
    }
  };

  return (
    <div className="relative" ref={carouselRef}>
      {/* Carousel Container */}
      <div className="flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
          aria-label="Previous product"
        >
          <ChevronLeft className="w-6 h-6 text-blue-800" />
        </button>

        {/* Product Items */}
        <div className="w-full px-16 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-[450px] flex flex-col"
              >
                {/* Product Image Placeholder */}
                <div className="h-40 flex items-center justify-center bg-blue-50 mb-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="text-blue-800 font-semibold">{product.name.slice(0, 2)}</div>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <div className="text-gray-600 text-sm line-clamp-3">
                    {product.description.substring(0, 80)}...
                  </div>
                </div>
                <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
          aria-label="Next product"
        >
          <ChevronRight className="w-6 h-6 text-blue-800" />
        </button>
      </div>
    </div>
  );
}
