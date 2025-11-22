import JobCard from '@/components/JobCard';
import { FaSearch, FaFilter } from 'react-icons/fa';

const sampleJobs = [
  {
    _id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, USA',
    type: 'Full-time',
    salary: '$120k - $180k',
    description: 'We are looking for an experienced software engineer to join our growing team and work on cutting-edge technologies.',
    posted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '2',
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'London, UK',
    type: 'Full-time',
    salary: '£70k - £90k',
    description: 'Join our product team to drive the vision and strategy for our next-gen platform.',
    posted: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '3',
    title: 'UX Designer',
    company: 'Creative Studio',
    location: 'Remote',
    type: 'Contract',
    salary: '$80k - $100k',
    description: 'Create beautiful and intuitive user experiences for web and mobile applications.',
    posted: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '4',
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'New York, USA',
    type: 'Full-time',
    salary: '$100k - $140k',
    description: 'Work with big data and machine learning to solve complex business problems.',
    posted: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '5',
    title: 'Marketing Manager',
    company: 'Growth Co',
    location: 'Toronto, Canada',
    type: 'Full-time',
    salary: 'C$70k - C$95k',
    description: 'Lead our marketing efforts and drive growth through innovative campaigns.',
    posted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '6',
    title: 'Frontend Developer',
    company: 'WebDev Solutions',
    location: 'Berlin, Germany',
    type: 'Part-time',
    salary: '€45k - €60k',
    description: 'Build responsive and interactive web applications using modern frameworks.',
    posted: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
  },
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Find Your Dream Job</h1>
          <p className="text-lg text-gray-600">Browse through thousands of job opportunities worldwide</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="flex gap-2">
              <select className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="">Job Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
              </select>
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition flex items-center gap-2">
                <FaFilter />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{sampleJobs.length}</span> jobs
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleJobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">3</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
