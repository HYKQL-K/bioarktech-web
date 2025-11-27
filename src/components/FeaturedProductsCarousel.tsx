'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Product } from '@/types';
import Link from 'next/link';

interface FeaturedProductsCarouselProps {
  products: Product[];
}

export default function FeaturedProductsCarousel({ products }: FeaturedProductsCarouselProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="h-full">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-[450px] flex flex-col mx-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">${product.price}</span>
                  <Link href={`/product/${product.id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
