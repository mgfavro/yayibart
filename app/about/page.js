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
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 space-y-4">
              <Link href="/" className="block text-sm tracking-widest text-gray-600">HOME</Link>
              <Link href="/gallery" className="block text-sm tracking-widest text-gray-600">BROWSE THE GALLERY</Link>
              <Link href="/about" className="block text-sm tracking-widest text-gray-900">ABOUT</Link>
              <Link href="/contact" className="block text-sm tracking-widest text-gray-600">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6">About the Artist</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Creating art that speaks to the soul and challenges perception
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=700&h=700&fit=crop"
                alt="Artist at work"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-extralight text-gray-900">The Journey</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-light">
                <p>
                  Yayibart is a contemporary artist whose work explores the delicate balance between chaos and harmony, 
                  creating pieces that invite viewers into a world of color, texture, and emotion.
                </p>
                <p>
                  With a background in fine arts and a passion for experimentation, each piece is a unique exploration 
                  of materials and techniques, blending traditional methods with modern sensibilities.
                </p>
                <p>
                  The work has been featured in galleries across the country and continues to evolve as new inspirations 
                  emerge from the world around us.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 md:order-2">
              <h2 className="text-3xl font-extralight text-gray-900">The Process</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed font-light">
                <p>
                  Every piece begins with a moment of inspiration—a fleeting emotion, a play of light, or the texture 
                  of a weathered surface. These moments are captured and transformed through layers of paint, texture, 
                  and intention.
                </p>
                <p>
                  Working primarily with acrylics, oils, and mixed media, the creative process is both intuitive and 
                  deliberate. Each layer builds upon the last, creating depth and complexity that rewards close observation.
                </p>
                <p>
                  The studio is a space of experimentation, where mistakes become opportunities and spontaneity leads 
                  to unexpected beauty.
                </p>
              </div>
            </div>
            <div className="md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&h=700&fit=crop"
                alt="Art process"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="text-3xl lg:text-4xl font-extralight text-gray-900 leading-relaxed">
            "Art should comfort the disturbed and disturb the comfortable"
          </blockquote>
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
