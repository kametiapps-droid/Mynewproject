'use client';

import { useState } from 'react';
import { FaBriefcase, FaHeart, FaFileAlt, FaCheckCircle, FaEye, FaClock, FaMapMarkerAlt, FaStar, FaEdit, FaDownload, FaUpload } from 'react-icons/fa';
import Link from 'next/link';

const appliedJobs = [
  {
    _id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, USA',
    type: 'Full-time',
    salary: '$120k - $180k',
    appliedDate: '2025-11-19',
    status: 'under_review'
  },
  {
    _id: '2',
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'London, UK',
    type: 'Full-time',
    salary: '£70k - £90k',
    appliedDate: '2025-11-17',
    status: 'interview_scheduled'
  },
  {
    _id: '3',
    title: 'Frontend Developer',
    company: 'Digital Solutions',
    location: 'Remote',
    type: 'Contract',
    salary: '$60k - $80k',
    appliedDate: '2025-11-15',
    status: 'rejected'
  },
];

const savedJobs = [
  {
    _id: '4',
    title: 'UX Designer',
    company: 'Creative Studio',
    location: 'Remote',
    type: 'Contract',
    salary: '$80k - $100k',
    posted: '3 days ago'
  },
  {
    _id: '5',
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'New York, USA',
    type: 'Full-time',
    salary: '$100k - $140k',
    posted: '1 week ago'
  },
];

const recommendedJobs = [
  {
    _id: '6',
    title: 'Full Stack Developer',
    company: 'StartUp Inc',
    location: 'Berlin, Germany',
    type: 'Full-time',
    salary: '€70k - €90k',
    match: 95
  },
  {
    _id: '7',
    title: 'React Developer',
    company: 'Web Agency',
    location: 'Remote',
    type: 'Part-time',
    salary: '$50k - $70k',
    match: 88
  },
];

export default function SeekerDashboard() {
  const [activeTab, setActiveTab] = useState('applied');

  const stats = {
    appliedJobs: 12,
    savedJobs: 8,
    profileViews: 156,
    profileCompletion: 75
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'under_review':
        return <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Under Review</span>;
      case 'interview_scheduled':
        return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Interview Scheduled</span>;
      case 'rejected':
        return <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">Not Selected</span>;
      default:
        return <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Pending</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Job Seeker Dashboard</h1>
              <p className="text-primary-100">Track your applications and find your dream job</p>
            </div>
            <Link
              href="/jobs"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all flex items-center gap-2 font-semibold shadow-lg"
            >
              <FaBriefcase />
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Applied Jobs</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.appliedJobs}</p>
              </div>
              <div className="bg-primary-100 p-4 rounded-full">
                <FaBriefcase className="text-primary-600 text-2xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Saved Jobs</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.savedJobs}</p>
              </div>
              <div className="bg-pink-100 p-4 rounded-full">
                <FaHeart className="text-pink-600 text-2xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Profile Views</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.profileViews}</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-full">
                <FaEye className="text-purple-600 text-2xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Profile Complete</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.profileCompletion}%</p>
              </div>
              <div className="bg-green-100 p-4 rounded-full">
                <FaCheckCircle className="text-green-600 text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md">
              <div className="border-b border-gray-200">
                <div className="flex gap-4 px-6">
                  <button
                    onClick={() => setActiveTab('applied')}
                    className={`py-4 px-4 font-semibold transition-all ${
                      activeTab === 'applied'
                        ? 'border-b-2 border-primary-600 text-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Applied Jobs
                  </button>
                  <button
                    onClick={() => setActiveTab('saved')}
                    className={`py-4 px-4 font-semibold transition-all ${
                      activeTab === 'saved'
                        ? 'border-b-2 border-primary-600 text-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Saved Jobs
                  </button>
                  <button
                    onClick={() => setActiveTab('recommended')}
                    className={`py-4 px-4 font-semibold transition-all ${
                      activeTab === 'recommended'
                        ? 'border-b-2 border-primary-600 text-primary-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Recommended
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'applied' && (
                  <div className="space-y-4">
                    {appliedJobs.map((job) => (
                      <div
                        key={job._id}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                              {job.title}
                            </h3>
                            <p className="text-gray-600 font-semibold">{job.company}</p>
                          </div>
                          {getStatusBadge(job.status)}
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-primary-500" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaBriefcase className="text-primary-500" />
                            {job.type}
                          </span>
                          <span className="text-green-600 font-semibold">{job.salary}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FaClock />
                          Applied on {new Date(job.appliedDate).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'saved' && (
                  <div className="space-y-4">
                    {savedJobs.map((job) => (
                      <div
                        key={job._id}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                              {job.title}
                            </h3>
                            <p className="text-gray-600 font-semibold">{job.company}</p>
                          </div>
                          <button className="text-pink-500 hover:text-pink-600 text-xl">
                            <FaHeart />
                          </button>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-primary-500" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaBriefcase className="text-primary-500" />
                            {job.type}
                          </span>
                          <span className="text-green-600 font-semibold">{job.salary}</span>
                        </div>

                        <div className="flex gap-2">
                          <Link
                            href={`/jobs/${job._id}`}
                            className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all text-center font-semibold"
                          >
                            Apply Now
                          </Link>
                          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-semibold">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'recommended' && (
                  <div className="space-y-4">
                    {recommendedJobs.map((job) => (
                      <div
                        key={job._id}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                              {job.title}
                            </h3>
                            <p className="text-gray-600 font-semibold">{job.company}</p>
                          </div>
                          <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                            <FaStar />
                            {job.match}% Match
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-primary-500" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaBriefcase className="text-primary-500" />
                            {job.type}
                          </span>
                          <span className="text-green-600 font-semibold">{job.salary}</span>
                        </div>

                        <div className="flex gap-2">
                          <Link
                            href={`/jobs/${job._id}`}
                            className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all text-center font-semibold"
                          >
                            View Details
                          </Link>
                          <button className="px-4 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-all">
                            <FaHeart />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Profile Completion</h3>
                <span className="text-2xl font-bold text-primary-600">{stats.profileCompletion}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-primary-700 h-3 rounded-full transition-all"
                  style={{ width: `${stats.profileCompletion}%` }}
                ></div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">Basic Information</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">Work Experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">Education</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                  <span className="text-gray-500">Skills & Certifications</span>
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all font-semibold flex items-center justify-center gap-2">
                <FaEdit />
                Complete Profile
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Your Resume</h3>
              
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
                <FaFileAlt className="text-4xl text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-2">Resume.pdf</p>
                <p className="text-xs text-gray-500">Uploaded 2 weeks ago</p>
              </div>

              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-all font-semibold flex items-center justify-center gap-2">
                  <FaUpload />
                  Update Resume
                </button>
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-semibold flex items-center justify-center gap-2">
                  <FaDownload />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
