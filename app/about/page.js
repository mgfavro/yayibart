'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-light tracking-widest text-gray-900">YAYIBART</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">HOME</Link>
              <Link href="/gallery" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">BROWSE THE GALLERY</Link>
              <Link href="/about" className="text-sm tracking-widest text-gray-900 border-b border-gray-900 pb-1">ABOUT</Link>
              <Link href="/contact" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">CONTACT</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
