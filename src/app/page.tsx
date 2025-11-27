'use client';

import Navbar from '@/components/Navbar';
import CustomFeaturedCarousel from '@/components/CustomFeaturedCarousel';
import GeneEditingSection from '@/components/GeneEditingSection';
import ServicesSection from '@/components/ServicesSection';
import { useStore } from '../context/StoreContext';

export default function Home() {
  const { products, services } = useStore();
  const featuredProducts = products.filter(product => product.isFeatured);
  const geneEditingProducts = products.filter(product => product.showInGeneEditing);
  const serviceSectionServices = services.filter(service => service.showInServiceSection);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Genetic Innovation</h1>
            <p className="text-2xl text-white mb-8">Innovative seed on board</p>
            <p className="text-white/80 mb-8 max-w-xl">
              Advanced delivery solutions for genome editing, accelerating research from discovery to therapy
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Explore Now
            </button>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-white">4.9/5</div>
              <div className="text-white/80 mt-2">Customer Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-white">300+</div>
              <div className="text-white/80 mt-2">Research Partners</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-white">99%</div>
              <div className="text-white/80 mt-2">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section id="products" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
          <CustomFeaturedCarousel products={featuredProducts} />
        </div>
      </section>
      
      {/* Gene Editing Section */}
      <GeneEditingSection products={geneEditingProducts} />
      
      {/* Services Section */}
      <ServicesSection services={serviceSectionServices} />
      
      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About BioArk Tech</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              BioArk Tech is a leading provider of innovative solutions for genetic research and gene editing. Our mission is to accelerate scientific discovery and advance the field of biotechnology through cutting-edge products and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We are committed to developing and delivering the most advanced products and services for genetic research.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                We maintain the highest standards of quality in all our products and services to ensure reliable results.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600 text-sm">
                Our team of experts is dedicated to providing exceptional support to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BioArkTech</h3>
              <p className="text-gray-400">Innovative solutions for genetic research</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gene Editing</li>
                <li>Reagents</li>
                <li>Kits</li>
                <li>Equipment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Custom Editing</li>
                <li>Analysis</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@bioarktech.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BioArkTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
