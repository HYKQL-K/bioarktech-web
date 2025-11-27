'use client';

import React, { useState } from 'react';
import { Product } from '../context/StoreContext';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedVariant = product.variants && product.variants.length > 0 ? product.variants[selectedVariantIndex] : null;
  const selectedImage = product.images && product.images.length > 0 ? product.images[selectedImageIndex] : product.image || '';

  const handleVariantChange = (index: number) => {
    setSelectedVariantIndex(index);
  };

  const handleImageChange = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleAddToCart = () => {
    console.log('Adding to cart:', {
      productId: product.id,
      productName: product.name,
      variant: selectedVariant,
    });
    // Add to cart logic would go here
    if (selectedVariant) {
      alert(`Added ${product.name} (${selectedVariant.size}) to cart!`);
    } else {
      alert(`Added ${product.name} to cart!`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
      
      {/* Status Tags */}
      <div className="flex gap-2 mb-6">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          Genome Editing
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          In Stock
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="mb-4">
            <img
              src={selectedImage || '/next.svg'}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`flex-shrink-0 w-20 h-20 border-2 rounded-md overflow-hidden ${selectedImageIndex === index
                    ? 'border-blue-500'
                    : 'border-gray-300 hover:border-blue-300'
                  }`}
                >
                  <img
                    src={image || '/next.svg'}
                    alt={`${product.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          {/* Specification (Variant Selector) */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Specification</h3>
              <div className="flex gap-3 flex-wrap">
                {product.variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => handleVariantChange(index)}
                    className={`px-4 py-2 rounded-full border-2 transition-all duration-200 ${selectedVariantIndex === index
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : 'border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Price and Catalog # */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Price:</span>
              <span className="text-2xl font-bold">${(selectedVariant ? selectedVariant.price : product.price).toFixed(2)}</span>
            </div>
            {selectedVariant && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Catalog #:</span>
                <span className="font-medium">{selectedVariant.sku}</span>
              </div>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};