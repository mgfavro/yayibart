'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Instagram, Mail } from 'lucide-react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredArt = [
    {
      title: "Sunset Dreams",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop",
      artist: "Yayibart"
    },
    {
      title: "Ocean Whispers",
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=800&fit=crop",
      artist: "Yayibart"
    },
    {
      title: "Urban Poetry",
      image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&h=800&fit=crop",
      artist: "Yayibart"
    },
    {
      title: "Golden Hour",
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=800&fit=crop",
      artist: "Yayibart"
    }
  ];

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
              <Link href="/" className="text-sm tracking-widest text-gray-900 border-b border-gray-900 pb-1">HOME</Link>
              <Link href="/gallery" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">BROWSE THE GALLERY</Link>
              <Link href="/about" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">ABOUT</Link>
              <Link href="/contact" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">CONTACT</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 space-y-4">
              <Link href="/" className="block text-sm tracking-widest text-gray-900">HOME</Link>
              <Link href="/gallery" className="block text-sm tracking-widest text-gray-600">BROWSE THE GALLERY</Link>
              <Link href="/about" className="block text-sm tracking-widest text-gray-600">ABOUT</Link>
              <Link href="/contact" className="block text-sm tracking-widest text-gray-600">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl lg:text-8xl font-extralight text-gray-900 mb-8 leading-tight">
              Contemporary<br />Art Gallery
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
              Exploring the intersection of color, form, and emotion through modern artistic expression
            </p>
            <Link 
              href="/gallery" 
              className="inline-block border-2 border-gray-900 text-gray-900 px-10 py-4 text-sm tracking-widest hover:bg-gray-900 hover:text-white transition"
            >
              VIEW COLLECTION
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-4">Featured Works</h2>
            <p className="text-gray-600 font-light">A selection of recent pieces</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredArt.map((art, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-white mb-4">
                  <img 
                    src={art.image} 
                    alt={art.title}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-1">{art.title}</h3>
                <p className="text-sm text-gray-500 tracking-wide">{art.artist}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/gallery"
              className="inline-block border border-gray-300 text-gray-900 px-10 py-3 text-sm tracking-widest hover:border-gray-900 transition"
            >
              SEE ALL WORKS
            </Link>
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="text-3xl lg:text-4xl font-extralight text-gray-900 leading-relaxed mb-8">
            "Art is not what you see, but what you make others see"
          </blockquote>
          <p className="text-gray-600 tracking-wider">— Edgar Degas</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-extralight mb-6">Stay Connected</h2>
          <p className="text-gray-400 mb-10 font-light">Follow for latest works and exhibitions</p>
          <div className="flex justify-center space-x-8">
            <a href="#" className="hover:text-gray-400 transition">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm tracking-widest text-gray-900 mb-2">YAYIBART</p>
          <p className="text-sm text-gray-500">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
