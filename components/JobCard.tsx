import Link from 'next/link';
import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';

interface JobCardProps {
  job: {
    _id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary?: string;
    description: string;
    posted: string | Date;
  };
}

export default function JobCard({ job }: JobCardProps) {
  const formatDate = (date: string | Date) => {
    const days = Math.floor((new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return `${Math.floor(days / 30)} months ago`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-primary-600 transition">
            <Link href={`/jobs/${job._id}`}>{job.title}</Link>
          </h3>
          <p className="text-lg text-gray-700 font-semibold">{job.company}</p>
        </div>
        {job.salary && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            {job.salary}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-primary-500" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaBriefcase className="text-primary-500" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaClock className="text-primary-500" />
          <span>{formatDate(job.posted)}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <Link 
        href={`/jobs/${job._id}`}
        className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}
