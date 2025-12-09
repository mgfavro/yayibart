'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const artworks = [
    {
      title: "Sunset Dreams",
      medium: "Acrylic on Canvas",
      size: "24 x 36 inches",
      year: "2024",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop"
    },
    {
      title: "Ocean Whispers",
      medium: "Oil on Canvas",
      size: "30 x 40 inches",
      year: "2024",
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=800&fit=crop"
    },
    {
      title: "Urban Poetry",
      medium: "Mixed Media",
      size: "18 x 24 inches",
      year: "2023",
      image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=800&fit=crop"
    },
    {
      title: "Golden Hour",
      medium: "Watercolor",
      size: "20 x 30 inches",
      year: "2024",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=800&fit=crop"
    },
    {
      title: "Midnight Reflections",
      medium: "Acrylic on Canvas",
      size: "36 x 48 inches",
      year: "2023",
      image: "https://images.unsplash.com/photo-1578926078433-e09e9c9a95c0?w=800&h=800&fit=crop"
    },
    {
      title: "Spring Awakening",
      medium: "Oil on Canvas",
      size: "24 x 36 inches",
      year: "2024",
      image: "https://images.unsplash.com/photo-1535993617751-85f1c6e65c6f?w=800&h=800&fit=crop"
    },
    {
      title: "Abstract Thoughts",
      medium: "Mixed Media",
      size: "30 x 30 inches",
      year: "2023",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=800&fit=crop"
    },
    {
      title: "Serenity",
      medium: "Acrylic on Canvas",
      size: "20 x 24 inches",
      year: "2024",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop"
    },
    {
      title: "City Lights",
      medium: "Oil on Canvas",
      size: "36 x 36 inches",
      year: "2023",
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=800&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-light tracking-widest text-gray-900">YAYIBART</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">HOME</Link>
              <Link href="/gallery" className="text-sm tracking-widest text-gray-900 border-b border-gray-900 pb-1">BROWSE THE GALLERY</Link>
              <Link href="/about" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">ABOUT</Link>
              <Link href="/contact" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">CONTACT</Link>
            </div>

            <button 
              className="md:hidden text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-6 space-y-4">
              <Link href="/" className="block text-sm tracking-widest text-gray-600">HOME</Link>
              <Link href="/gallery" className="block text-sm tracking-widest text-gray-900">BROWSE THE GALLERY</Link>
              <Link href="/about" className="block text-sm tracking-widest text-gray-600">ABOUT</Link>
              <Link href="/contact" className="block text-sm tracking-widest text-gray-600">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6">Gallery</h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            A curated collection of contemporary works
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artworks.map((art, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-white mb-6">
                  <img 
                    src={art.image} 
                    alt={art.title}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-gray-900">{art.title}</h3>
                  <p className="text-sm text-gray-600">{art.medium}</p>
                  <p className="text-sm text-gray-500">{art.size} • {art.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm tracking-widest text-gray-900 mb-2">YAYIBART</p>
          <p className="text-sm text-gray-500">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
