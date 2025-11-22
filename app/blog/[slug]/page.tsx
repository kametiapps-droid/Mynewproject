import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const sampleBlogs = [
  {
    _id: '1',
    title: 'Top 10 Interview Tips for 2025',
    slug: 'top-10-interview-tips-2025',
    excerpt: 'Ace your next job interview with these proven strategies and expert advice.',
    content: `Preparing for a job interview can be nerve-wracking, but with the right strategies, you can walk in with confidence and leave a lasting impression. Here are our top 10 interview tips for 2025:

1. **Research the Company Thoroughly**: Before your interview, dive deep into the company's website, social media, and recent news. Understand their mission, values, and culture. This shows genuine interest and helps you tailor your responses.

2. **Practice Common Interview Questions**: While you can't predict every question, practicing responses to common questions like "Tell me about yourself" or "What are your strengths and weaknesses?" helps you articulate your thoughts clearly.

3. **Prepare Your Own Questions**: Interviews are a two-way street. Prepare thoughtful questions about the role, team dynamics, and company goals. This demonstrates your engagement and helps you determine if it's the right fit.

4. **Dress Appropriately**: Research the company's dress code and aim to match or slightly exceed it. When in doubt, business professional is always a safe choice.

5. **Arrive Early**: Plan to arrive 10-15 minutes early. This gives you time to compose yourself and shows punctuality and respect for the interviewer's time.

6. **Use the STAR Method**: When answering behavioral questions, use the STAR method (Situation, Task, Action, Result) to structure your responses with concrete examples.

7. **Show Enthusiasm**: Let your passion for the role and industry shine through. Employers want to hire people who are genuinely excited about the opportunity.

8. **Pay Attention to Body Language**: Maintain good eye contact, sit up straight, and offer a firm handshake. Non-verbal communication is just as important as what you say.

9. **Follow Up with a Thank-You Note**: Within 24 hours of your interview, send a personalized thank-you email to each interviewer. Reference specific points from your conversation to reinforce your interest.

10. **Learn from Every Interview**: Whether you get the job or not, reflect on what went well and what could be improved. Each interview is a learning opportunity that prepares you for the next one.

Remember, confidence comes from preparation. The more you prepare, the more natural and authentic you'll appear in your interview. Good luck!`,
    author: 'Global Job Point',
    published: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
  {
    _id: '2',
    title: 'How to Build a Winning Resume',
    slug: 'how-to-build-winning-resume',
    excerpt: 'Learn the secrets to creating a resume that gets you noticed by recruiters.',
    content: `Your resume is often your first impression with a potential employer. Make it count with these essential tips for creating a winning resume that stands out from the competition.

**Choose the Right Format**: There are three main resume formats: chronological, functional, and combination. For most job seekers, a chronological format that lists your work experience in reverse chronological order is the best choice.

**Start with a Strong Summary**: Your resume summary should be a brief, 2-3 sentence overview of your professional background, key skills, and what you bring to the table. Make it compelling and tailored to the specific role.

**Highlight Achievements, Not Just Duties**: Instead of listing job responsibilities, focus on your accomplishments. Use numbers and metrics whenever possible. For example, "Increased sales by 30%" is more impactful than "Responsible for sales."

**Use Keywords from the Job Description**: Many companies use Applicant Tracking Systems (ATS) to screen resumes. Include relevant keywords from the job posting to increase your chances of getting past these systems.

**Keep It Concise**: Aim for one page if you have less than 10 years of experience, two pages maximum for more seasoned professionals. Every word should add value.

**Make It Visually Appealing**: Use clean formatting, bullet points, and adequate white space. Avoid fancy fonts or colors that might not translate well through ATS systems.

**Proofread Carefully**: Typos and grammatical errors can immediately disqualify you. Proofread multiple times and consider asking a friend or professional to review your resume.

A well-crafted resume opens doors. Invest the time to make yours shine!`,
    author: 'Global Job Point',
    published: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  },
];

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = sampleBlogs.find(b => b.slug === params.slug) || sampleBlogs[0];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6">
          <FaArrowLeft />
          Back to Blog
        </Link>

        {/* Blog Header */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Featured Image Placeholder */}
          <div className="h-64 md:h-96 bg-gradient-to-r from-primary-400 to-primary-600 relative">
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
              Featured Image
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>

            <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <FaUser className="text-primary-500" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar className="text-primary-500" />
                <span>{new Date(post.published).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-gray-800 mt-6 mb-3">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleBlogs.filter(b => b.slug !== params.slug).slice(0, 2).map(relatedPost => (
              <Link 
                key={relatedPost._id} 
                href={`/blog/${relatedPost.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-primary-600">
                  {relatedPost.title}
                </h3>
                <p className="text-gray-600 mb-3">{relatedPost.excerpt}</p>
                <span className="text-primary-600 font-semibold">Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
