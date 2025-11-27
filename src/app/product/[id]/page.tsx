'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProductDetail } from '@/components/ProductDetail';
import { products } from '@/lib/mockData';

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<typeof products[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const foundProduct = products.find(p => p.id === params.id);
      setProduct(foundProduct || null);
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return <div className="max-w-6xl mx-auto p-8">Loading...</div>;
  }

  if (!product) {
    return <div className="max-w-6xl mx-auto p-8">Product Not Found</div>;
  }

  return <ProductDetail product={product} />;
};

export default ProductPage;