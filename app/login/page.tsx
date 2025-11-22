'use client';

import { useState } from 'react';
import { FaBriefcase, FaBuilding, FaEnvelope, FaLock, FaPhone, FaGlobe, FaUserTie, FaChartLine, FaUsers, FaCheckCircle, FaUser, FaGraduationCap, FaRocket, FaBell, FaFileAlt, FaUserGraduate } from 'react-icons/fa';

export default function UnifiedLoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'employer' | 'seeker'>('employer');

  const isEmployer = userType === 'employer';

  return (
    <div className={`min-h-screen ${isEmployer ? 'bg-gradient-to-br from-blue-50 via-white to-indigo-50' : 'bg-gradient-to-br from-purple-50 via-white to-pink-50'}`}>
      {/* Hero Section */}
      <div className={`${isEmployer ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-purple-600 to-pink-600'} py-8 px-4`}>
        <div className="max-w-7xl mx-auto text-center">
          {isEmployer ? (
            <FaUserTie className="text-white text-6xl mx-auto mb-4 animate-bounce" />
          ) : (
            <FaUserGraduate className="text-white text-6xl mx-auto mb-4 animate-bounce" />
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {isEmployer ? 'Employer Portal' : 'Job Seeker Portal'}
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            {isEmployer 
              ? 'Find the perfect talent for your team from our global network of professionals'
              : 'Discover your dream job and connect with top employers worldwide'
            }
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Benefits */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 sticky top-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {isEmployer ? 'Why Choose Us?' : 'Why Join Us?'}
              </h2>
              
              {isEmployer ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-lg text-2xl flex-shrink-0">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Unlimited Job Postings</h3>
                      <p className="text-gray-600">Post as many jobs as you need with no restrictions or hidden fees</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-lg text-2xl flex-shrink-0">
                      <FaUsers />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Global Talent Pool</h3>
                      <p className="text-gray-600">Access millions of qualified candidates from around the world</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-lg text-2xl flex-shrink-0">
                      <FaChartLine />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Easy Management</h3>
                      <p className="text-gray-600">Manage applications and track candidates from one dashboard</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-lg text-2xl flex-shrink-0">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Quick Approval</h3>
                      <p className="text-gray-600">Get your job listings live within minutes</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-3 rounded-lg text-2xl flex-shrink-0">
                      <FaRocket />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Apply Instantly</h3>
                      <p className="text-gray-600">One-click applications with your saved profile and resume</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-3 rounded-lg text-2xl flex-shrink-0">
                      <FaBell />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Smart Job Alerts</h3>
                      <p className="text-gray-600">Get notified about opportunities matching your skills</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-3 rounded-lg text-2xl flex-shrink-0">
                      <FaFileAlt />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Career Resources</h3>
                      <p className="text-gray-600">Access resume tips, interview guides, and career advice</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-3 rounded-lg text-2xl flex-shrink-0">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Track Applications</h3>
                      <p className="text-gray-600">Monitor your application status in real-time</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                {isEmployer ? (
                  <>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">10K+</div>
                      <div className="text-sm text-gray-600 mt-1">Employers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600">50K+</div>
                      <div className="text-sm text-gray-600 mt-1">Jobs Posted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">1M+</div>
                      <div className="text-sm text-gray-600 mt-1">Candidates</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">1M+</div>
                      <div className="text-sm text-gray-600 mt-1">Job Seekers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600">50K+</div>
                      <div className="text-sm text-gray-600 mt-1">Jobs Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">95%</div>
                      <div className="text-sm text-gray-600 mt-1">Success Rate</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* User Type Selector */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200">
                <p className="text-center text-sm text-gray-600 mb-3 font-semibold">I am a:</p>
                <div className="flex gap-3 max-w-md mx-auto">
                  <button
                    onClick={() => setUserType('employer')}
                    className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      isEmployer
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    <FaUserTie />
                    Employer
                  </button>
                  <button
                    onClick={() => setUserType('seeker')}
                    className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                      !isEmployer
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-600 hover:text-gray-800 hover:bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    <FaUserGraduate />
                    Job Seeker
                  </button>
                </div>
              </div>

              {/* Tab Header */}
              <div className="flex bg-gray-50 border-b border-gray-200">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-5 text-center font-bold text-lg transition-all duration-300 relative ${
                    isLogin 
                      ? `${isEmployer ? 'text-blue-600' : 'text-purple-600'} bg-white` 
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Login
                  {isLogin && (
                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${isEmployer ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-purple-600 to-pink-600'}`}></div>
                  )}
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-5 text-center font-bold text-lg transition-all duration-300 relative ${
                    !isLogin 
                      ? `${isEmployer ? 'text-blue-600' : 'text-purple-600'} bg-white` 
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Sign Up
                  {!isLogin && (
                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${isEmployer ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-purple-600 to-pink-600'}`}></div>
                  )}
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    {isLogin ? 'Welcome Back!' : isEmployer ? 'Join as Employer' : 'Start Your Journey'}
                  </h2>
                  <p className="text-gray-600">
                    {isLogin 
                      ? isEmployer 
                        ? 'Sign in to manage your job postings' 
                        : 'Sign in to explore job opportunities'
                      : isEmployer
                        ? 'Start hiring top talent today'
                        : 'Create your profile and get hired'
                    }
                  </p>
                </div>

                <form className="space-y-5">
                  {!isLogin && isEmployer && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                          <div className="relative">
                            <FaUserTie className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              placeholder="John Doe"
                              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Company Name *</label>
                          <div className="relative">
                            <FaBuilding className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              placeholder="Your Company"
                              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                          <div className="relative">
                            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="tel"
                              placeholder="+1 234 567 8900"
                              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Website</label>
                          <div className="relative">
                            <FaGlobe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="url"
                              placeholder="company.com"
                              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {!isLogin && !isEmployer && (
                    <>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                        <div className="relative">
                          <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                          <div className="relative">
                            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="tel"
                              placeholder="+1 234 567 8900"
                              className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Experience</label>
                          <div className="relative">
                            <FaBriefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <select className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none bg-white">
                              <option>0-1 years</option>
                              <option>1-3 years</option>
                              <option>3-5 years</option>
                              <option>5-10 years</option>
                              <option>10+ years</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Highest Education</label>
                        <div className="relative">
                          <FaGraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <select className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none bg-white">
                            <option>High School</option>
                            <option>Associate Degree</option>
                            <option>Bachelor&apos;s Degree</option>
                            <option>Master&apos;s Degree</option>
                            <option>Doctorate/PhD</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Skills (comma separated)</label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="e.g., JavaScript, React, Node.js"
                            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        placeholder={isEmployer ? "employer@company.com" : "jobseeker@email.com"}
                        className={`w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${isEmployer ? 'focus:ring-blue-500' : 'focus:ring-purple-500'} focus:border-transparent transition-all`}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Password *</label>
                    <div className="relative">
                      <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        className={`w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${isEmployer ? 'focus:ring-blue-500' : 'focus:ring-purple-500'} focus:border-transparent transition-all`}
                        required
                      />
                    </div>
                  </div>

                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Confirm Password *</label>
                      <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="password"
                          placeholder="••••••••"
                          className={`w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 ${isEmployer ? 'focus:ring-blue-500' : 'focus:ring-purple-500'} focus:border-transparent transition-all`}
                          required
                        />
                      </div>
                    </div>
                  )}

                  {!isLogin && (
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        className={`mt-1 w-4 h-4 ${isEmployer ? 'text-blue-600 focus:ring-blue-500' : 'text-purple-600 focus:ring-purple-500'} border-gray-300 rounded`}
                        required
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the <a href="#" className={`${isEmployer ? 'text-blue-600 hover:text-blue-700' : 'text-purple-600 hover:text-purple-700'} font-semibold`}>Terms & Conditions</a> and <a href="#" className={`${isEmployer ? 'text-blue-600 hover:text-blue-700' : 'text-purple-600 hover:text-purple-700'} font-semibold`}>Privacy Policy</a>
                      </label>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`w-full ${isEmployer ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'} text-white py-4 rounded-xl transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                  >
                    {isLogin ? 'Sign In to Dashboard' : isEmployer ? 'Create Employer Account' : 'Create Job Seeker Account'}
                  </button>

                  {isLogin && (
                    <div className="flex items-center justify-between pt-2">
                      <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className={`rounded border-gray-300 ${isEmployer ? 'text-blue-600 focus:ring-blue-500' : 'text-purple-600 focus:ring-purple-500'}`} />
                        Remember me
                      </label>
                      <a href="#" className={`text-sm ${isEmployer ? 'text-blue-600 hover:text-blue-700' : 'text-purple-600 hover:text-purple-700'} font-semibold`}>
                        Forgot password?
                      </a>
                    </div>
                  )}

                  {isLogin && (
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">Or continue with</span>
                      </div>
                    </div>
                  )}

                  {isLogin && (
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google
                      </button>
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold"
                      >
                        <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
