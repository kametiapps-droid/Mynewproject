import { FaBriefcase, FaUsers, FaBuilding, FaChartLine } from 'react-icons/fa';
import dbConnect from '@/lib/mongodb';
import Job from '@/models/Job';
import Employer from '@/models/Employer';
import Seeker from '@/models/Seeker';

async function getStats() {
  try {
    await dbConnect();
    
    const [totalJobs, activeJobs, totalEmployers, totalSeekers] = await Promise.all([
      Job.countDocuments(),
      Job.countDocuments({ status: 'active' }),
      Employer.countDocuments(),
      Seeker.countDocuments(),
    ]);
    
    const totalUsers = totalEmployers + totalSeekers;
    
    const recentJobs = await Job.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select('title company status createdAt')
      .lean();
    
    const recentEmployers = await Employer.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email company createdAt')
      .lean();
    
    const recentSeekers = await Seeker.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email createdAt')
      .lean();
    
    const recentUsers = [
      ...recentEmployers.map((emp: any) => ({
        ...emp,
        _id: emp._id.toString(),
        type: 'employer',
        joined: emp.createdAt,
      })),
      ...recentSeekers.map((seeker: any) => ({
        ...seeker,
        _id: seeker._id.toString(),
        type: 'seeker',
        joined: seeker.createdAt,
      }))
    ].sort((a, b) => {
      const dateA = new Date(a.joined).getTime();
      const dateB = new Date(b.joined).getTime();
      return dateB - dateA;
    }).slice(0, 10);
    
    return {
      stats: {
        totalJobs,
        activeJobs,
        totalUsers,
        totalEmployers,
        totalSeekers,
        totalApplications: 0,
        revenue: '$0'
      },
      recentJobs: recentJobs.map((job: any) => ({
        ...job,
        _id: job._id.toString(),
        createdAt: job.createdAt.toISOString(),
      })),
      recentUsers,
    };
  } catch (error: any) {
    console.error('Error fetching stats:', error);
    return {
      stats: {
        totalJobs: 0,
        activeJobs: 0,
        totalUsers: 0,
        totalEmployers: 0,
        totalSeekers: 0,
        totalApplications: 0,
        revenue: '$0'
      },
      recentJobs: [],
      recentUsers: [],
    };
  }
}

export default async function AdminDashboard() {
  const { stats, recentJobs, recentUsers } = await getStats();

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

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Jobs</h3>
              {recentJobs.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No jobs found. Create some jobs to see them here.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">Job Title</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">Company</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">Posted</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentJobs.map((job: any) => (
                        <tr key={job._id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 text-sm font-medium text-gray-800">{job.title}</td>
                          <td className="px-4 py-4 text-sm text-gray-600">{job.company}</td>
                          <td className="px-4 py-4 text-sm">
                            {job.status === 'active' ? (
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">Active</span>
                            ) : (
                              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">Closed</span>
                            )}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
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
                  <table className="w-full min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">Type</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">Joined</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentUsers.map((user: any) => (
                        <tr key={user._id} className="hover:bg-gray-50">
                          <td className="px-4 py-4 text-sm font-medium text-gray-800">{user.name}</td>
                          <td className="px-4 py-4 text-sm text-gray-600">{user.email}</td>
                          <td className="px-4 py-4 text-sm">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                              user.type === 'employer' 
                                ? 'bg-orange-100 text-orange-700' 
                                : 'bg-purple-100 text-purple-700'
                            }`}>
                              {user.type === 'employer' ? 'Employer' : 'Seeker'}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
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
        </div>
      </div>
    </div>
  );
}
