import { Product } from '@/types';
import Link from 'next/link';

interface GeneEditingSectionProps {
  products: Product[];
}

export default function GeneEditingSection({ products }: GeneEditingSectionProps) {
  // Filter products that should be shown in the gene editing section
  const geneEditingProducts = products.filter(product => product.showInGeneEditing);

  return (
    <div id="gene-editing" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Gene Editing Products</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive portfolio of advanced products for gene editing and CRISPR workflows
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {geneEditingProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-100 rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
            >
              {/* Product Image Placeholder */}
              <div className="h-36 flex items-center justify-center bg-blue-50 mb-4 rounded-lg">
                <div className="text-blue-800">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              </div>
              <Link href={`/product/${product.id}`} className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-full transition-colors">
                View Details
              </Link>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full transition-colors text-sm font-medium">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}
