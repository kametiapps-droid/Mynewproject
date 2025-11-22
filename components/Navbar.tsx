'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBriefcase, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <FaBriefcase className="text-primary-600 text-2xl" />
            <span className="text-xl font-bold text-gray-800">Global Job Point</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-10">
            {/* Left Menu Items */}
            <div className="flex items-center space-x-6">
              <Link href="/jobs" className="text-gray-700 hover:text-primary-600 transition font-medium">
                Find Jobs
              </Link>
              <Link href="/seeker/dashboard" className="text-gray-700 hover:text-primary-600 transition font-medium">
                My Dashboard
              </Link>
              <Link href="/employer/dashboard" className="text-gray-700 hover:text-primary-600 transition font-medium">
                For Employers
              </Link>
              <Link href="/admin/dashboard" className="text-gray-700 hover:text-primary-600 transition font-medium">
                Admin
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary-600 transition font-medium">
                Blog
              </Link>
            </div>

            {/* Right Sign Up Button */}
            <Link 
              href="/login" 
              className="bg-gradient-to-r from-primary-600 to-blue-700 text-white px-8 py-2.5 rounded-full hover:from-primary-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600 z-50 relative"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Overlay */}
        {isOpen && (
          <>
            {/* Dark Overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            ></div>
            
            {/* Menu Content */}
            <div className="fixed top-16 left-0 right-0 bg-white shadow-2xl z-40 md:hidden animate-slide-down">
              <div className="flex flex-col p-4 space-y-4">
                <Link 
                  href="/jobs" 
                  className="text-gray-700 hover:text-primary-600 transition py-2 px-4 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Find Jobs
                </Link>
                <Link 
                  href="/seeker/dashboard" 
                  className="text-gray-700 hover:text-primary-600 transition py-2 px-4 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  My Dashboard
                </Link>
                <Link 
                  href="/employer/dashboard" 
                  className="text-gray-700 hover:text-primary-600 transition py-2 px-4 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  For Employers
                </Link>
                <Link 
                  href="/blog" 
                  className="text-gray-700 hover:text-primary-600 transition py-2 px-4 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/login" 
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition text-center font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
