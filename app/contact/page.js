'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Mail, Instagram, MapPin } from 'lucide-react';

export default function ContactPage() {
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
            
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">HOME</Link>
              <Link href="/gallery" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">BROWSE THE GALLERY</Link>
              <Link href="/about" className="text-sm tracking-widest text-gray-600 hover:text-gray-900 transition">ABOUT</Link>
              <Link href="/contact" className="text-sm tracking-widest text-gray-900 border-b border-gray-900 pb-1">CONTACT</Link>
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
              <Link href="/gallery" className="block text-sm tracking-widest text-gray-600">BROWSE THE GALLERY</Link>
              <Link href="/about" className="block text-sm tracking-widest text-gray-600">ABOUT</Link>
              <Link href="/contact" className="block text-sm tracking-widest text-gray-900">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-extralight text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Interested in commissioning work or learning more? Let's connect.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm tracking-widest text-gray-500 mb-2">EMAIL</h3>
                  <p className="text-gray-900 font-light">hello@yayibart.com</p>
                  <p className="text-sm text-gray-600 mt-1 font-light">Response within 48 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Instagram className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm tracking-widest text-gray-500 mb-2">INSTAGRAM</h3>
                  <p className="text-gray-900 font-light">@yayibart</p>
                  <p className="text-sm text-gray-600 mt-1 font-light">Follow for latest works</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm tracking-widest text-gray-500 mb-2">STUDIO</h3>
                  <p className="text-gray-900 font-light">By appointment only</p>
                  <p className="text-sm text-gray-600 mt-1 font-light">Location provided upon request</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-light text-gray-900 mb-4">Commissions</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Custom co
