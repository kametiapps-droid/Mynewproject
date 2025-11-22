import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Global Job Point</h3>
            <p className="text-sm">
              Your trusted worldwide job portal connecting talented professionals with great opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/jobs" className="hover:text-primary-400 transition">Find Jobs</Link></li>
              <li><Link href="/employer" className="hover:text-primary-400 transition">Post a Job</Link></li>
              <li><Link href="/seeker" className="hover:text-primary-400 transition">Create CV</Link></li>
              <li><Link href="/blog" className="hover:text-primary-400 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary-400 transition">Career Tips</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition">Resume Guide</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition">Interview Prep</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition">Salary Guide</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Connect With Us</h3>
            <p className="text-sm mb-4">contact@globaljobpoint.com</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition"><FaLinkedin size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Global Job Point. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
