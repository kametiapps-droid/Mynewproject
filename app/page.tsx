'use client';

import Link from 'next/link';
import { FaSearch, FaCode, FaChartLine, FaPaintBrush, FaBullhorn, FaLaptopMedical, FaBook, FaBuilding, FaGraduationCap, FaBriefcase, FaFilter, FaTimes, FaHardHat, FaIndustry, FaTruck, FaWarehouse, FaTools, FaHammer } from 'react-icons/fa';
import JobCard from '@/components/JobCard';
import BlogCard from '@/components/BlogCard';
import { useState, useEffect } from 'react';

const sampleJobs = [
  {
    _id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, USA',
    type: 'Full-time',
    salary: '$120k - $180k',
    description: 'We are looking for an experienced software engineer to join our growing team...',
    posted: '2025-11-18',
  },
  {
    _id: '2',
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'London, UK',
    type: 'Full-time',
    salary: '£70k - £90k',
    description: 'Join our product team to drive the vision and strategy for our next-gen platform...',
    posted: '2025-11-15',
  },
  {
    _id: '3',
    title: 'UX Designer',
    company: 'Creative Studio',
    location: 'Remote',
    type: 'Contract',
    salary: '$80k - $100k',
    description: 'Create beautiful and intuitive user experiences for web and mobile applications...',
    posted: '2025-11-19',
  },
];

const sampleBlogs = [
  {
    _id: '1',
    title: 'Top 10 Interview Tips for 2025',
    slug: 'top-10-interview-tips-2025',
    excerpt: 'Ace your next job interview with these proven strategies and expert advice...',
    author: 'Global Job Point',
    published: '2025-11-17',
  },
  {
    _id: '2',
    title: 'How to Build a Winning Resume',
    slug: 'how-to-build-winning-resume',
    excerpt: 'Learn the secrets to creating a resume that gets you noticed by recruiters...',
    author: 'Global Job Point',
    published: '2025-11-13',
  },
];

const categories = [
  { id: 1, name: 'IT & Tech', icon: FaCode },
  { id: 2, name: 'Finance', icon: FaChartLine },
  { id: 3, name: 'Design', icon: FaPaintBrush },
  { id: 4, name: 'Marketing', icon: FaBullhorn },
  { id: 5, name: 'Healthcare', icon: FaLaptopMedical },
  { id: 6, name: 'Education', icon: FaBook },
  { id: 7, name: 'Business', icon: FaBuilding },
  { id: 8, name: 'Training', icon: FaGraduationCap },
  { id: 9, name: 'Construction', icon: FaHardHat },
  { id: 10, name: 'Manufacturing', icon: FaIndustry },
  { id: 11, name: 'Warehouse', icon: FaWarehouse },
  { id: 12, name: 'Delivery & Logistics', icon: FaTruck },
  { id: 13, name: 'Maintenance', icon: FaTools },
  { id: 14, name: 'General Labor', icon: FaHammer },
];

export default function Home() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (isFiltersOpen || isCategoryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFiltersOpen, isCategoryOpen]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-4 md:py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">
              Find Your Dream Job Today
            </h1>
            <p className="text-sm md:text-base mb-4 md:mb-5 text-primary-50 max-w-2xl mx-auto">
              Connect with top employers worldwide and take the next step in your career
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-2xl p-3 md:p-4">
                <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                  <div className="flex-1 flex items-center gap-2 md:gap-3 bg-gray-50 rounded-lg px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 focus-within:border-primary-400 focus-within:bg-white transition-all">
                    <FaSearch className="text-gray-400 text-sm md:text-base" />
                    <input
                      type="text"
                      placeholder="Job title, keyword..."
                      className="flex-1 bg-transparent text-gray-800 focus:outline-none text-sm md:text-base"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-2 md:gap-3 bg-gray-50 rounded-lg px-3 py-2.5 md:px-4 md:py-3 border border-gray-200 focus-within:border-primary-400 focus-within:bg-white transition-all">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="City, country..."
                      className="flex-1 bg-transparent text-gray-800 focus:outline-none text-sm md:text-base"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base whitespace-nowrap">
                    <FaSearch className="text-sm md:text-base" />
                    <span>Search Jobs</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Category Section */}
      <section className="py-4 bg-white border-b-2 border-gray-100 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Side - Info */}
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Showing:</span>
              <span>All Jobs</span>
            </div>

            {/* Center - Filter Buttons */}
            <div className="flex items-center gap-3 mx-auto md:mx-0">
              {/* Filters Button */}
              <button 
                onClick={() => setIsFiltersOpen(true)}
                className="flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-primary-50 hover:to-primary-100 hover:text-primary-700 border-2 border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-md"
              >
                <FaFilter className="text-sm" />
                <span>{selectedJobType || 'Job Type'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Category Button */}
              <button 
                onClick={() => setIsCategoryOpen(true)}
                className="flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-primary-50 hover:to-primary-100 hover:text-primary-700 border-2 border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-md"
              >
                <FaBriefcase className="text-sm" />
                <span>{selectedCategory || 'Categories'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>

            {/* Right Side - Sort */}
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-gray-600 font-semibold">Sort by:</span>
              <select className="text-sm border-2 border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 hover:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer">
                <option>Most Recent</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
                <option>Company A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Modal */}
      {isFiltersOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:items-center justify-center p-0 md:p-4 overflow-hidden">
          <div 
            className="fixed inset-0" 
            onClick={() => setIsFiltersOpen(false)}
          ></div>
          <div className="bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl shadow-2xl max-h-[80vh] overflow-hidden animate-slide-up relative z-10">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">Job Type</h3>
                <button 
                  onClick={() => setIsFiltersOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-3 overflow-y-auto max-h-[60vh]">
              {['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship', 'Remote'].map((type) => (
                <label
                  key={type}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-all border-2 border-transparent hover:border-primary-200"
                  onClick={() => setSelectedJobType(type)}
                >
                  <span className="text-base font-medium text-gray-700">{type}</span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedJobType === type 
                      ? 'border-primary-600 bg-primary-600' 
                      : 'border-gray-300'
                  }`}>
                    {selectedJobType === type && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                </label>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button 
                onClick={() => {
                  setSelectedJobType('');
                  setIsFiltersOpen(false);
                }}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-semibold transition-all"
              >
                Clear
              </button>
              <button 
                onClick={() => setIsFiltersOpen(false)}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 font-semibold transition-all shadow-lg"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Category Modal */}
      {isCategoryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:items-center justify-center p-0 md:p-4 overflow-hidden">
          <div 
            className="fixed inset-0" 
            onClick={() => setIsCategoryOpen(false)}
          ></div>
          <div className="bg-white w-full md:max-w-md md:rounded-2xl rounded-t-3xl shadow-2xl max-h-[80vh] overflow-hidden animate-slide-up relative z-10">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">Browse by Category</h3>
                <button 
                  onClick={() => setIsCategoryOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-3 overflow-y-auto max-h-[60vh]">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <label
                    key={cat.id}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-all border-2 border-transparent hover:border-primary-200"
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Icon className="text-primary-600 text-lg" />
                      </div>
                      <span className="text-base font-medium text-gray-700">{cat.name}</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedCategory === cat.name 
                        ? 'border-primary-600 bg-primary-600' 
                        : 'border-gray-300'
                    }`}>
                      {selectedCategory === cat.name && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button 
                onClick={() => {
                  setSelectedCategory('');
                  setIsCategoryOpen(false);
                }}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-semibold transition-all"
              >
                Clear
              </button>
              <button 
                onClick={() => setIsCategoryOpen(false)}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 font-semibold transition-all shadow-lg"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Latest Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Latest Job Openings</h2>
            <p className="section-subtitle">
              Discover opportunities from top companies around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sampleJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/jobs" className="btn-primary inline-block">
              View All Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">For Employers</h2>
              <p className="text-lg text-gray-700 mb-6">
                Post your job openings and connect with talented professionals from around the world. 
                Our platform makes it easy to find the perfect candidate for your team.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span className="text-gray-700">Post unlimited job listings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span className="text-gray-700">Access to global talent pool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 text-xl">✓</span>
                  <span className="text-gray-700">Advanced candidate filtering</span>
                </li>
              </ul>
              <Link href="/employer" className="btn-primary">
                Post a Job
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg p-8 text-white h-64 flex items-center justify-center">
              <FaBriefcase className="text-8xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Career Resources & Tips</h2>
            <p className="section-subtitle">
              Expert advice to help you succeed in your career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {sampleBlogs.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog" className="btn-secondary">
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of job seekers who have found their dream careers through Global Job Point
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/seeker" className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold">
              Create Your CV
            </Link>
            <Link href="/jobs" className="bg-primary-700 text-white px-8 py-4 rounded-lg hover:bg-primary-800 transition-all font-semibold border-2 border-white">
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
