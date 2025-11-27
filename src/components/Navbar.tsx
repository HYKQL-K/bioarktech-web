'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="bg-blue-600 text-white font-bold text-xl px-2">BioArk</div>
            <div className="text-gray-800 font-bold text-xl">Tech</div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#products" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Products</Link>
          <Link href="#services" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Services</Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">About</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">Contact</Link>
        </div>
        
        {/* Contact Button */}
        <div className="flex items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-200 text-sm font-medium hover:scale-105 hover:shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
