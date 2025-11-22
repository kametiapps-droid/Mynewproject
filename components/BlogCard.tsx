import Link from 'next/link';
import { FaCalendar, FaUser } from 'react-icons/fa';

interface BlogCardProps {
  post: {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    image?: string;
    author: string;
    published: string | Date;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {post.image && (
        <div className="h-48 bg-gradient-to-r from-primary-400 to-primary-600 relative">
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
            Blog Image
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-primary-600 transition">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FaUser className="text-primary-500" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendar className="text-primary-500" />
            <span>{new Date(post.published).toLocaleDateString()}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <Link 
          href={`/blog/${post.slug}`}
          className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
