import { FaMapMarkerAlt, FaBriefcase, FaClock, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const sampleJobs = [
  {
    _id: '1',
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, USA',
    type: 'Full-time',
    salary: '$120k - $180k',
    description: 'We are looking for an experienced software engineer to join our growing team and work on cutting-edge technologies. You will be responsible for designing, developing, and maintaining our core platform.',
    requirements: [
      '5+ years of experience in software development',
      'Strong knowledge of JavaScript, TypeScript, and React',
      'Experience with Node.js and backend development',
      'Excellent problem-solving skills',
      'Bachelor\'s degree in Computer Science or related field'
    ],
    posted: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '2',
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'London, UK',
    type: 'Full-time',
    salary: '£70k - £90k',
    description: 'Join our product team to drive the vision and strategy for our next-gen platform. You will work closely with engineers, designers, and stakeholders to deliver exceptional products.',
    requirements: [
      '3+ years of product management experience',
      'Strong analytical and strategic thinking skills',
      'Experience with agile methodologies',
      'Excellent communication skills',
      'Technical background preferred'
    ],
    posted: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '3',
    title: 'UX Designer',
    company: 'Creative Studio',
    location: 'Remote',
    type: 'Contract',
    salary: '$80k - $100k',
    description: 'Create beautiful and intuitive user experiences for web and mobile applications. You will be responsible for user research, wireframing, prototyping, and visual design.',
    requirements: [
      '4+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Strong portfolio demonstrating design thinking',
      'Knowledge of front-end development is a plus',
      'Excellent communication and collaboration skills'
    ],
    posted: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
];

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = sampleJobs.find(j => j._id === params.id) || sampleJobs[0];

  const formatDate = (date: Date) => {
    const days = Math.floor((new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return `${Math.floor(days / 30)} months ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/jobs" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6">
          <FaArrowLeft />
          Back to Jobs
        </Link>

        {/* Job Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{job.title}</h1>
              <p className="text-xl text-gray-700 font-semibold mb-4">{job.company}</p>
            </div>
            {job.salary && (
              <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg text-lg font-semibold">
                {job.salary}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary-500 text-lg" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-primary-500 text-lg" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-primary-500 text-lg" />
              <span>Posted {formatDate(job.posted)}</span>
            </div>
          </div>

          <button className="w-full md:w-auto bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold text-lg">
            Apply Now
          </button>
        </div>

        {/* Job Description */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h2>
          <ul className="space-y-3">
            {job.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 text-xl">✓</span>
                <span className="text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="mt-8 text-center">
          <button className="bg-primary-600 text-white px-12 py-4 rounded-lg hover:bg-primary-700 transition font-semibold text-lg">
            Apply for This Position
          </button>
        </div>
      </div>
    </div>
  );
}
