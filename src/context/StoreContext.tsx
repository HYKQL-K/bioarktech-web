'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Product = {
  id: string;
  name: string;
          // e.g., "BioArkLipo..."
  description: string;
  category: string;
      // e.g., "Gene Editing"
  
  // Image Management
  images: string[];
      // Array of URLs. 0 is main, 1..n are thumbnails.

  // CMS Control Flags (For Homepage Layout)
  isFeatured: boolean;
         // If true -> Show in Homepage Carousel
  showInGeneEditing: boolean;
  // If true -> Show in Gene Editing Grid
  showInReagent: boolean;
      // If true -> Show in Reagent Section (Disabled for now)
  
  // The Complex Variant Logic (From Video)
  variants: {
    id: string;
    sku: string;
         // e.g., "BAL100468"
    label: string;
       // e.g., "0.1 mL"
    price: number;
       // e.g., 35.00
    stockStatus: string;
 // e.g., "In Stock"
  }[];
}

export type Service = {
  id: string;
  title: string;
  showInServiceSection: boolean;
};

type StoreContextType = {
  products: Product[];
  services: Service[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  updateService: (id: string, updates: Partial<Service>) => void;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

// Mock initial data
const initialProducts: Product[] = [
  {
    id: '1',
    name: 'BioArkLipo® In Vitro Transfection Kit (Ver. II)',
    description: 'This is a high-quality transfection kit for in vitro use.',
    category: 'Gene Editing',
    images: ['/next.svg'],
    isFeatured: true,
    showInGeneEditing: true,
    showInReagent: false,
    variants: [
      { id: 'v1', sku: 'BAL100468', label: '0.1 mL', price: 35.00, stockStatus: 'In Stock' },
      { id: 'v2', sku: 'BAL100469', label: '0.5 mL', price: 150.00, stockStatus: 'In Stock' },
      { id: 'v3', sku: 'BAL100470', label: '1.0 mL', price: 320.00, stockStatus: 'In Stock' },
      { id: 'v4', sku: 'BAL100471', label: '6 x 1.0 mL', price: 1600.00, stockStatus: 'In Stock' },
    ],
  },
];

const initialServices: Service[] = [
  {
    id: '1',
    title: 'Example Service',
    showInServiceSection: true,
  },
];

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [services, setServices] = useState<Service[]>(initialServices);

  // Load data from LocalStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    const savedServices = localStorage.getItem('services');
    if (savedProducts) setProducts(JSON.parse(savedProducts));
    if (savedServices) setServices(JSON.parse(savedServices));
  }, []);

  // Save data to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now().toString() };
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, ...updates } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  const updateService = (id: string, updates: Partial<Service>) => {
    setServices(prevServices =>
      prevServices.map(service =>
        service.id === id ? { ...service, ...updates } : service
      )
    );
  };

  const value = {
    products,
    services,
    addProduct,
    updateProduct,
    deleteProduct,
    updateService,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
