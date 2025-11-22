'use client';

import { useState, useEffect } from 'react';
import { FaBriefcase, FaUsers, FaBuilding, FaChartLine, FaEdit, FaTrash, FaBan, FaCheckCircle, FaEye, FaCalendar, FaSpinner } from 'react-icons/fa';

interface Stats {
  totalJobs: number;
  activeJobs: number;
  totalUsers: number;
  totalEmployers: number;
  totalSeekers: number;
  totalApplications: number;
  revenue: string;
}

interface Job {
  _id: string;
  title: string;
  company: string;
  status: string;
  createdAt: string;
  [key: string]: any;
}

interface User {
  _id: string;
  name: string;
  email: string;
  type: string;
  createdAt: string;
  status?: string;
  [key: string]: any;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState<Stats>({
    totalJobs: 0,
    activeJobs: 0,
    totalUsers: 0,
    totalEmployers: 0,
    totalSeekers: 0,
    totalApplications: 0,
    revenue: '$0'
  });
  const [recentJobs, setRecentJobs] = useState<Job[]>([]);
  const [recentUsers, setRecentUsers] = useState<User[]>([]);
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [jobStatusFilter, setJobStatusFilter] = useState('all');
  const [jobSearchTerm, setJobSearchTerm] = useState('');
  const [userTypeFilter, setUserTypeFilter] = useState('all');
  const [userSearchTerm, setUserSearchTerm] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  useEffect(() => {
    if (activeTab === 'jobs') {
      fetchAllJobs();
    }
  }, [activeTab, jobStatusFilter, jobSearchTerm]);

  useEffect(() => {
    if (activeTab === 'users') {
      fetchAllUsers();
    }
  }, [activeTab, userTypeFilter, userSearchTerm]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/stats');
      const result = await response.json();
      
      if (result.success) {
        setStats(result.data.stats);
        setRecentJobs(result.data.recentJobs);
        setRecentUsers(result.data.recentUsers);
      } else {
        setError(result.error || 'Failed to load dashboard data');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const fetchAllJobs = async () => {
    try {
      const params = new URLSearchParams();
      if (jobStatusFilter !== 'all') params.append('status', jobStatusFilter);
      if (jobSearchTerm) params.append('search', jobSearchTerm);

      const response = await fetch(`/api/admin/jobs?${params}`);
      const result = await response.json();
      
      if (result.success) {
        setAllJobs(result.data);
      }
    } catch (err) {
      console.error('Error fetching jobs:', err);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const params = new URLSearchParams();
      if (userTypeFilter !== 'all') params.append('type', userTypeFilter);
      if (userSearchTerm) params.append('search', userSearchTerm);

      const response = await fetch(`/api/admin/users?${params}`);
      const result = await response.json();
      
      if (result.success) {
        setAllUsers(result.data);
      }
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const deleteJob = async (jobId: string) => {
    if (!confirm('Are you sure you want to delete this job?')) return;
    
    try {
      const response = await fetch(`/api/admin/jobs/${jobId}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      
      if (result.success) {
        alert('Job deleted successfully');
        fetchAllJobs();
        fetchDashboardData();
      } else {
        alert(result.error || 'Failed to delete job');
      }
    } catch (err) {
      alert('Failed to delete job');
    }
  };

  const toggleJobStatus = async (jobId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'closed' : 'active';
    
    try {
      const response = await fetch(`/api/admin/jobs/${jobId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const result = await response.json();
      
      if (result.success) {
        alert(`Job status updated to ${newStatus}`);
        fetchAllJobs();
        fetchDashboardData();
      } else {
        alert(result.error || 'Failed to update job status');
      }
    } catch (err) {
      alert('Failed to update job status');
    }
  };

  const toggleUserStatus = async (userId: string, userType: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'banned' : 'active';
    const action = newStatus === 'banned' ? 'ban' : 'unban';
    
    if (!confirm(`Are you sure you want to ${action} this user?`)) return;
    
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: userType, status: newStatus }),
      });
      const result = await response.json();
      
      if (result.success) {
        alert(`User ${action}ned successfully`);
        fetchAllUsers();
        fetchDashboardData();
      } else {
        alert(result.error || `Failed to ${action} user`);
      }
    } catch (err) {
      alert(`Failed to ${action} user`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-red-50 border border-red-200 rounded-lg p-8 max-w-md">
          <p className="text-red-600 font-semibold mb-2">Error Loading Dashboard</p>
          <p className="text-gray-600 text-sm">{error}</p>
          <button 
            onClick={fetchDashboardData}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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
                <p className="text-xs text-green-600 mt-1">Active Platform</p>
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
                <p className="text-xs text-gray-600 mt-1">Total Submitted</p>
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
                  {recentJobs.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No jobs found. Create some jobs to see them here.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Job Title</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Company</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Posted</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {recentJobs.map((job) => (
                            <tr key={job._id} className="hover:bg-gray-50">
                              <td className="px-4 py-4 text-sm font-medium text-gray-800">{job.title}</td>
                              <td className="px-4 py-4 text-sm text-gray-600">{job.company}</td>
                              <td className="px-4 py-4 text-sm">
                                {job.status === 'active' ? (
                                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Active</span>
                                ) : (
                                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Closed</span>
                                )}
                              </td>
                              <td className="px-4 py-4 text-sm text-gray-600">
                                {new Date(job.createdAt).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Users</h3>
                  {recentUsers.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No users found.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Joined</th>
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
                                {new Date(user.joined || user.createdAt).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'jobs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">All Jobs ({allJobs.length})</h3>
                  <div className="flex gap-3">
                    <select 
                      value={jobStatusFilter}
                      onChange={(e) => setJobStatusFilter(e.target.value)}
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="closed">Closed</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={jobSearchTerm}
                      onChange={(e) => setJobSearchTerm(e.target.value)}
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    />
                  </div>
                </div>
                {allJobs.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    No jobs found. {jobSearchTerm || jobStatusFilter !== 'all' ? 'Try adjusting your filters.' : 'Create some jobs to see them here.'}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Job Title</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Company</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Location</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Posted</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {allJobs.map((job) => (
                          <tr key={job._id} className="hover:bg-gray-50">
                            <td className="px-4 py-4 text-sm font-medium text-gray-800">{job.title}</td>
                            <td className="px-4 py-4 text-sm text-gray-600">{job.company}</td>
                            <td className="px-4 py-4 text-sm text-gray-600">{job.location}</td>
                            <td className="px-4 py-4 text-sm">
                              {job.status === 'active' ? (
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Active</span>
                              ) : (
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Closed</span>
                              )}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-600">
                              {new Date(job.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              <div className="flex gap-2">
                                <button 
                                  onClick={() => toggleJobStatus(job._id, job.status)}
                                  className="text-green-600 hover:text-green-800"
                                  title={job.status === 'active' ? 'Close Job' : 'Activate Job'}
                                >
                                  <FaEdit />
                                </button>
                                <button 
                                  onClick={() => deleteJob(job._id)}
                                  className="text-red-600 hover:text-red-800"
                                  title="Delete Job"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'users' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">All Users ({allUsers.length})</h3>
                  <div className="flex gap-3">
                    <select 
                      value={userTypeFilter}
                      onChange={(e) => setUserTypeFilter(e.target.value)}
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    >
                      <option value="all">All Types</option>
                      <option value="employer">Employers</option>
                      <option value="seeker">Seekers</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={userSearchTerm}
                      onChange={(e) => setUserSearchTerm(e.target.value)}
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    />
                  </div>
                </div>
                {allUsers.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    No users found. {userSearchTerm || userTypeFilter !== 'all' ? 'Try adjusting your filters.' : ''}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Joined</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {allUsers.map((user) => (
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
                            <td className="px-4 py-4 text-sm">
                              {user.status === 'banned' ? (
                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">Banned</span>
                              ) : (
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Active</span>
                              )}
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-600">
                              {new Date(user.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              <div className="flex gap-2">
                                <button 
                                  onClick={() => toggleUserStatus(user._id, user.type, user.status || 'active')}
                                  className={user.status === 'banned' ? 'text-green-600 hover:text-green-800' : 'text-red-600 hover:text-red-800'}
                                  title={user.status === 'banned' ? 'Unban User' : 'Ban User'}
                                >
                                  {user.status === 'banned' ? <FaCheckCircle /> : <FaBan />}
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-800">Platform Analytics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FaCalendar className="text-blue-600 text-2xl" />
                      <h4 className="font-semibold text-gray-800">Platform Stats</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Jobs:</span>
                        <span className="font-semibold">{stats.totalJobs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Active Jobs:</span>
                        <span className="font-semibold">{stats.activeJobs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Users:</span>
                        <span className="font-semibold">{stats.totalUsers}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FaCheckCircle className="text-green-600 text-2xl" />
                      <h4 className="font-semibold text-gray-800">User Distribution</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Employers:</span>
                        <span className="font-semibold">{stats.totalEmployers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Job Seekers:</span>
                        <span className="font-semibold">{stats.totalSeekers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Active Rate:</span>
                        <span className="font-semibold">100%</span>
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
                        <span className="text-gray-600">Total Revenue:</span>
                        <span className="font-semibold">{stats.revenue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Applications:</span>
                        <span className="font-semibold">{stats.totalApplications}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Platform:</span>
                        <span className="font-semibold text-green-600">Growing</span>
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
