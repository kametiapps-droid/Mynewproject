const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/globaljobpoint';

const employerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  company: { type: String, required: true },
  phone: String,
  website: String,
  status: { type: String, default: 'active' },
}, { timestamps: true });

const seekerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  skills: [String],
  experience: String,
  education: String,
  resume: String,
  status: { type: String, default: 'active' },
}, { timestamps: true });

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, enum: ['Full-time', 'Part-time', 'Contract', 'Internship'], required: true },
  salary: String,
  description: { type: String, required: true },
  requirements: [String],
  status: { type: String, enum: ['active', 'closed'], default: 'active' },
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employer' },
}, { timestamps: true });

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const Employer = mongoose.model('Employer', employerSchema);
    const Seeker = mongoose.model('Seeker', seekerSchema);
    const Job = mongoose.model('Job', jobSchema);

    await Employer.deleteMany({});
    await Seeker.deleteMany({});
    await Job.deleteMany({});
    console.log('🗑️  Cleared existing data');

    const hashedPassword = await bcrypt.hash('password123', 10);

    const employers = await Employer.create([
      {
        name: 'John Smith',
        email: 'john@techcorp.com',
        password: hashedPassword,
        company: 'TechCorp Inc.',
        phone: '+1-555-0101',
        website: 'https://techcorp.com',
      },
      {
        name: 'Sarah Johnson',
        email: 'sarah@innovationlabs.com',
        password: hashedPassword,
        company: 'Innovation Labs',
        phone: '+44-20-1234-5678',
        website: 'https://innovationlabs.com',
      },
      {
        name: 'Mike Chen',
        email: 'mike@creativestudio.com',
        password: hashedPassword,
        company: 'Creative Studio',
        phone: '+1-555-0102',
        website: 'https://creativestudio.com',
      },
      {
        name: 'Emily Davis',
        email: 'emily@globaltech.com',
        password: hashedPassword,
        company: 'Global Tech Solutions',
        phone: '+1-555-0103',
      }
    ]);
    console.log(`✅ Created ${employers.length} employers`);

    const seekers = await Seeker.create([
      {
        name: 'Alice Brown',
        email: 'alice@example.com',
        password: hashedPassword,
        phone: '+1-555-0201',
        skills: ['JavaScript', 'React', 'Node.js'],
        experience: '3 years',
        education: 'BS Computer Science',
      },
      {
        name: 'Bob Williams',
        email: 'bob@example.com',
        password: hashedPassword,
        phone: '+1-555-0202',
        skills: ['Python', 'Django', 'PostgreSQL'],
        experience: '5 years',
        education: 'MS Software Engineering',
      },
      {
        name: 'Carol Martinez',
        email: 'carol@example.com',
        password: hashedPassword,
        phone: '+1-555-0203',
        skills: ['UI/UX Design', 'Figma', 'Adobe XD'],
        experience: '4 years',
        education: 'BFA Graphic Design',
      },
      {
        name: 'David Lee',
        email: 'david@example.com',
        password: hashedPassword,
        phone: '+1-555-0204',
        skills: ['Data Analysis', 'SQL', 'Tableau'],
        experience: '2 years',
        education: 'BS Data Science',
      },
      {
        name: 'Emma Wilson',
        email: 'emma@example.com',
        password: hashedPassword,
        phone: '+1-555-0205',
        skills: ['Marketing', 'SEO', 'Content Strategy'],
        experience: '6 years',
        education: 'MBA Marketing',
      }
    ]);
    console.log(`✅ Created ${seekers.length} job seekers`);

    const jobs = await Job.create([
      {
        title: 'Senior Software Engineer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, USA',
        type: 'Full-time',
        salary: '$120k - $180k',
        description: 'We are looking for an experienced software engineer to join our growing team and help build scalable web applications.',
        requirements: ['5+ years experience', 'React/Node.js', 'System design knowledge'],
        status: 'active',
        employerId: employers[0]._id,
      },
      {
        title: 'Product Manager',
        company: 'Innovation Labs',
        location: 'London, UK',
        type: 'Full-time',
        salary: '£70k - £90k',
        description: 'Join our product team to drive the vision and strategy for our next-generation platform.',
        requirements: ['3+ years PM experience', 'Agile methodology', 'Strong communication'],
        status: 'active',
        employerId: employers[1]._id,
      },
      {
        title: 'UX Designer',
        company: 'Creative Studio',
        location: 'Remote',
        type: 'Contract',
        salary: '$80k - $100k',
        description: 'Create beautiful and intuitive user experiences for web and mobile applications.',
        requirements: ['Portfolio required', 'Figma/Sketch', '3+ years experience'],
        status: 'active',
        employerId: employers[2]._id,
      },
      {
        title: 'Data Scientist',
        company: 'Global Tech Solutions',
        location: 'New York, USA',
        type: 'Full-time',
        salary: '$130k - $160k',
        description: 'Analyze large datasets and build machine learning models to drive business insights.',
        requirements: ['Python/R', 'ML/AI experience', 'MS in related field'],
        status: 'active',
        employerId: employers[3]._id,
      },
      {
        title: 'Frontend Developer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, USA',
        type: 'Full-time',
        salary: '$100k - $140k',
        description: 'Build responsive and performant user interfaces using modern frontend technologies.',
        requirements: ['React/Vue/Angular', 'TypeScript', '3+ years experience'],
        status: 'active',
        employerId: employers[0]._id,
      },
      {
        title: 'Backend Engineer',
        company: 'Innovation Labs',
        location: 'London, UK',
        type: 'Full-time',
        salary: '£60k - £80k',
        description: 'Design and implement scalable backend services and APIs.',
        requirements: ['Node.js/Python/Java', 'Microservices', 'Database design'],
        status: 'active',
        employerId: employers[1]._id,
      },
      {
        title: 'DevOps Engineer',
        company: 'Global Tech Solutions',
        location: 'Remote',
        type: 'Full-time',
        salary: '$110k - $150k',
        description: 'Manage CI/CD pipelines and cloud infrastructure.',
        requirements: ['AWS/Azure/GCP', 'Docker/Kubernetes', '4+ years experience'],
        status: 'closed',
        employerId: employers[3]._id,
      },
    ]);
    console.log(`✅ Created ${jobs.length} jobs`);

    console.log('\n🎉 Database seeded successfully!');
    console.log(`📊 Summary:`);
    console.log(`   - Employers: ${employers.length}`);
    console.log(`   - Job Seekers: ${seekers.length}`);
    console.log(`   - Jobs: ${jobs.length} (${jobs.filter(j => j.status === 'active').length} active)`);
    
    await mongoose.connection.close();
    console.log('\n✅ Database connection closed');
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
