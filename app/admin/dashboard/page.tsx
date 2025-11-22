'use client';

import { useState } from 'react';
import { FaBriefcase, FaUsers, FaBuilding, FaChartLine, FaEdit, FaTrash, FaBan, FaCheckCircle, FaEye, FaCalendar } from 'react-icons/fa';

const stats = {
  totalJobs: 156,
  activeJobs: 98,
  totalUsers: 2340,
  totalEmployers: 145,
  totalSeekers: 2195,
  totalApplications: 5678,
  revenue: '$12,450'
};

const recentJobs = [
  { _id: '1', title: 'Senior Software Engineer', company: 'TechCorp Inc.', employer: 'John Doe', status: 'active', applications: 45, posted: '2025-11-20' },
  { _id: '2', title: 'Product Manager', company: 'Innovation Labs', employer: 'Jane Smith', status: 'active', applications: 32, posted: '2025-11-18' },
  { _id: '3', title: 'UX Designer', company: 'Creative Studio', employer: 'Mike Johnson', status: 'pending', applications: 0, posted: '2025-11-21' },
  { _id: '4', title: 'Data Scientist', company: 'Analytics Pro', employer: 'Sarah Wilson', status: 'active', applications: 28, posted: '2025-11-17' },
];

const recentUsers = [
  { _id: '1', name: 'Alice Brown', email: 'alice@example.com', type: 'seeker', joined: '2025-11-20', status: 'active' },
  { _id: '2', name: 'Bob Williams', email: 'bob@company.com', type: 'employer', joined: '2025-11-19', status: 'active' },
  { _id: '3', name: 'Carol Davis', email: 'carol@example.com', type: 'seeker', joined: '2025-11-18', status: 'active' },
  { _id: '4', name: 'David Miller', email: 'david@startup.com', type: 'employer', joined: '2025-11-17', status: 'pending' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-300">Manage jobs, users, and platform analytics</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Jobs</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalJobs}</p>
                <p className="text-xs text-green-600 mt-1">↑ {stats.activeJobs} Active</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-full">
                <FaBriefcase className="text-blue-600 text-2xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Users</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalUsers}</p>
                <p className="text-xs text-gray-600 mt-1">{stats.totalSeekers} Seekers</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-full">
                <FaUsers className="text-purple-600 text-2xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Employers</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalEmployers}</p>
                <p className="text-xs text-green-600 mt-1">↑ 12 This Month</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-full">
                <FaBuilding className="text-orange-600 text-2xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Applications</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{stats.totalApplications}</p>
                <p className="text-xs text-green-600 mt-1">↑ 234 This Week</p>
              </div>
              <div className="bg-green-100 p-4 rounded-full">
                <FaChartLine className="text-green-600 text-2xl" />
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
                    ? 'border-b-2 border-gray-800 text-gray-800'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('jobs')}
                className={`py-4 px-4 font-semibold transition-all ${
                  activeTab === 'jobs'
                    ? 'border-b-2 border-gray-800 text-gray-800'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Manage Jobs
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`py-4 px-4 font-semibold transition-all ${
                  activeTab === 'users'
                    ? 'border-b-2 border-gray-800 text-gray-800'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Manage Users
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-4 font-semibold transition-all ${
                  activeTab === 'analytics'
                    ? 'border-b-2 border-gray-800 text-gray-800'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Analytics
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Jobs</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Job Title</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Company</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Employer</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Applications</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentJobs.map((job) => (
                          <tr key={job._id} className="hover:bg-gray-50">
                            <td className="px-4 py-4 text-sm font-medium text-gray-800">{job.title}</td>
                            <td className="px-4 py-4 text-sm text-gray-600">{job.company}</td>
                            <td className="px-4 py-4 text-sm text-gray-600">{job.employer}</td>
                            <td className="px-4 py-4 text-sm text-gray-600">{job.applications}</td>
                            <td className="px-4 py-4 text-sm">
                              {job.status === 'active' ? (
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Active</span>
                              ) : (
                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">Pending</span>
                              )}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              <div className="flex gap-2">
                                <button className="text-blue-600 hover:text-blue-800">
                                  <FaEye />
                                </button>
                                <button className="text-green-600 hover:text-green-800">
                                  <FaEdit />
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                  <FaTrash />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Users</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Joined</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentUsers.map((user) => (
                          <tr key={user._id} className="hover:bg-gray-50">
                            <td className="px-4 py-4 text-sm font-medium text-gray-800">{user.name}</td>
                            <td className="px-4 py-4 text-sm text-gray-600">{user.email}</td>
                            <td className="px-4 py-4 text-sm">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                user.type === 'employer' 
                                  ? 'bg-orange-100 text-orange-700' 
                                  : 'bg-blue-100 text-blue-700'
                              }`}>
                                {user.type === 'employer' ? 'Employer' : 'Seeker'}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-600">
                              {new Date(user.joined).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {user.status === 'active' ? (
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Active</span>
                              ) : (
                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">Pending</span>
                              )}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              <div className="flex gap-2">
                                <button className="text-blue-600 hover:text-blue-800">
                                  <FaEye />
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                  <FaBan />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'jobs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">All Jobs</h3>
                  <div className="flex gap-3">
                    <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
                      <option>All Status</option>
                      <option>Active</option>
                      <option>Pending</option>
                      <option>Closed</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    />
                  </div>
                </div>
                <div className="text-center py-12 text-gray-500">
                  Jobs management interface - Full CRUD operations available
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">All Users</h3>
                  <div className="flex gap-3">
                    <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
                      <option>All Types</option>
                      <option>Employers</option>
                      <option>Seekers</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    />
                  </div>
                </div>
                <div className="text-center py-12 text-gray-500">
                  User management interface - View, edit, ban/unban users
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800">Platform Analytics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FaCalendar className="text-blue-600 text-2xl" />
                      <h4 className="font-semibold text-gray-800">This Month</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">New Jobs:</span>
                        <span className="font-semibold">42</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">New Users:</span>
                        <span className="font-semibold">156</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Applications:</span>
                        <span className="font-semibold">892</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FaCheckCircle className="text-green-600 text-2xl" />
                      <h4 className="font-semibold text-gray-800">Success Rate</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Job Fill Rate:</span>
                        <span className="font-semibold">68%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">User Satisfaction:</span>
                        <span className="font-semibold">4.6/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Platform Growth:</span>
                        <span className="font-semibold">+23%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FaChartLine className="text-purple-600 text-2xl" />
                      <h4 className="font-semibold text-gray-800">Revenue</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">This Month:</span>
                        <span className="font-semibold">{stats.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Month:</span>
                        <span className="font-semibold">$10,230</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Growth:</span>
                        <span className="font-semibold text-green-600">+21.7%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
