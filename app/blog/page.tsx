import BlogCard from '@/components/BlogCard';
import { FaSearch } from 'react-icons/fa';

const sampleBlogs = [
  {
    _id: '1',
    title: 'Top 10 Interview Tips for 2025',
    slug: 'top-10-interview-tips-2025',
    excerpt: 'Ace your next job interview with these proven strategies and expert advice. Learn how to prepare, present yourself, and answer tough questions confidently.',
    author: 'Global Job Point',
    published: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '2',
    title: 'How to Build a Winning Resume',
    slug: 'how-to-build-winning-resume',
    excerpt: 'Learn the secrets to creating a resume that gets you noticed by recruiters. Discover formatting tips, keyword strategies, and what to include.',
    author: 'Global Job Point',
    published: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '3',
    title: 'Remote Work Best Practices',
    slug: 'remote-work-best-practices',
    excerpt: 'Master the art of working remotely with these essential tips for productivity, communication, and work-life balance.',
    author: 'Global Job Point',
    published: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '4',
    title: 'Negotiating Your Salary: A Complete Guide',
    slug: 'negotiating-your-salary',
    excerpt: 'Get the compensation you deserve with our comprehensive guide to salary negotiation. Learn proven tactics and common mistakes to avoid.',
    author: 'Global Job Point',
    published: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '5',
    title: 'Career Change at 30: Is It Too Late?',
    slug: 'career-change-at-30',
    excerpt: 'Thinking about switching careers? Discover why your 30s might be the perfect time to make a change and how to do it successfully.',
    author: 'Global Job Point',
    published: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '6',
    title: 'LinkedIn Profile Optimization Tips',
    slug: 'linkedin-profile-optimization',
    excerpt: 'Transform your LinkedIn profile into a powerful job-hunting tool. Learn how to optimize every section for maximum visibility.',
    author: 'Global Job Point',
    published: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Career Resources & Blog</h1>
          <p className="text-lg text-gray-600 mb-8">
            Expert advice and tips to help you succeed in your career journey
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button className="px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition">
            All
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition border border-gray-300">
            Interview Tips
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition border border-gray-300">
            Resume Writing
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition border border-gray-300">
            Career Growth
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition border border-gray-300">
            Remote Work
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleBlogs.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
