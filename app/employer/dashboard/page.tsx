'use client';

import { useState } from 'react';
import { FaBriefcase, FaUsers, FaEye, FaPlus, FaChartLine, FaEdit, FaTrash, FaClock } from 'react-icons/fa';
import Link from 'next/link';

const sampleJobs = [
  {
    _id: '1',
    title: 'Senior Software Engineer',
    type: 'Full-time',
    location: 'San Francisco, USA',
    salary: '$120k - $180k',
    applications: 45,
    views: 320,
    posted: '2025-11-18',
    status: 'active'
  },
  {
    _id: '2',
    title: 'Product Manager',
    type: 'Full-time',
    location: 'London, UK',
    salary: '£70k - £90k',
    applications: 32,
    views: 256,
    posted: '2025-11-15',
    status: 'active'
  },
  {
    _id: '3',
    title: 'UX Designer',
    type: 'Contract',
    location: 'Remote',
    salary: '$80k - $100k',
    applications: 28,
    views: 189,
    posted: '2025-11-19',
    status: 'active'
  },
];

export default function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    requirements: ''
  });

  const stats = {
    totalJobs: 12,
    activeJobs: 8,
    totalApplications: 156,
    totalViews: 2340
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Posting job:', formData);
    setShowPostJobModal(false);
    setFormData({
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      salary: '',
      description: '',
      requirements: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Employer Dashboard</h1>
              <p className="text-primary-100">Manage your job postings and applications</p>
            </div>
            <button
              onClick={() => setShowPostJobModal(true)}
              className="bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all flex items-center gap-2 font-semibold shadow-lg"
            >
              <FaPlus />
              Post New Job
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-primary-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Jobs</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalJobs}</p>
              </div>
              <div className="bg-primary-100 p-4 rounded-full">
                <FaBriefcase className="text-primary-600 text-2xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Active Jobs</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.activeJobs}</p>
              </div>
              <div className="bg-green-100 p-4 rounded-full">
                <FaChartLine className="text-green-600 text-2xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Applications</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalApplications}</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-full">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Views</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalViews}</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-full">
                <FaEye className="text-purple-600 text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md mb-8">
          <div className="border-b border-gray-200">
            <div className="flex gap-4 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-4 font-semibold transition-all ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                My Jobs
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`py-4 px-4 font-semibold transition-all ${
                  activeTab === 'applications'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Applications
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                {sampleJobs.map((job) => (
                  <div
                    key={job._id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <FaBriefcase className="text-primary-500" />
                                {job.type}
                              </span>
                              <span>{job.location}</span>
                              <span className="text-green-600 font-semibold">{job.salary}</span>
                            </div>
                          </div>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                            Active
                          </span>
                        </div>

                        <div className="flex gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <FaUsers className="text-blue-500" />
                            <span className="text-gray-700">
                              <span className="font-semibold">{job.applications}</span> Applications
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaEye className="text-purple-500" />
                            <span className="text-gray-700">
                              <span className="font-semibold">{job.views}</span> Views
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaClock className="text-gray-500" />
                            <span className="text-gray-600">
                              Posted {new Date(job.posted).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all flex items-center justify-center gap-2">
                          <FaUsers />
                          View Applications
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                          <FaEdit />
                          Edit
                        </button>
                        <button className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all flex items-center justify-center gap-2">
                          <FaTrash />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="text-center py-12">
                <FaUsers className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No Applications Yet
                </h3>
                <p className="text-gray-500">
                  Applications from job seekers will appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showPostJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            className="fixed inset-0"
            onClick={() => setShowPostJobModal(false)}
          ></div>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 relative z-10">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">Post New Job</h2>
              <p className="text-gray-600 mt-1">Fill in the details below</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="e.g., Senior Software Engineer"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="e.g., San Francisco, USA"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Type *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Salary Range
                    </label>
                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="e.g., $80k - $120k"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="input-field"
                    rows={5}
                    placeholder="Describe the role, responsibilities, and what you're looking for..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Requirements
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    className="input-field"
                    rows={4}
                    placeholder="List the required skills, experience, qualifications..."
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowPostJobModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 font-semibold transition-all shadow-lg"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
