# Overview

Global Job Point is a worldwide job portal built with Next.js 15, connecting employers and job seekers globally. The application features a beautiful, modern, and fully responsive UI optimized for desktop, tablet, and mobile devices. The platform includes job listings, employer/seeker portals, and a blog system for career resources.

## Current Status (November 2025)

The website is fully functional with:
- ✅ Beautiful, modern UI with gradient hero sections
- ✅ Fully responsive design (mobile-first approach)
- ✅ Complete navigation system with dynamic routes
- ✅ Job listings with detailed job pages
- ✅ Blog system with article detail pages
- ✅ Employer and job seeker registration forms
- ✅ Professional navbar and footer
- ✅ Ready for production deployment

Note: Currently using sample data for demonstration. API routes and database models are in place for future backend integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: Next.js 15 with App Router
- Uses React 19 and TypeScript for type safety
- Server-side rendering (SSR) enabled for SEO optimization
- File-based routing structure under `/app` directory
- Pages organized by feature: `/jobs`, `/blog`, `/employer`, `/seeker`

**Styling Strategy**: Tailwind CSS 4.0
- Utility-first CSS framework for rapid UI development
- Custom primary color palette (blue theme) configured in `tailwind.config.ts`
- Reusable component classes defined in `globals.css` (btn-primary, input-field, etc.)
- Responsive design patterns throughout

**Component Structure**: 
- Reusable UI components in `/components` directory (Navbar, Footer, JobCard, BlogCard)
- Client-side interactivity marked with `'use client'` directive where needed
- React Icons (FaIcons) used for consistent iconography

**Design Patterns**:
- Component composition for cards and layouts
- Prop-based component configuration
- Mobile-first responsive design with Tailwind breakpoints

## Backend Architecture

**API Layer**: Next.js API Routes (App Router)
- RESTful endpoints under `/app/api` directory
- Route handlers for Jobs, Employers, Seekers, and Blog operations
- Standard HTTP methods (GET, POST) for CRUD operations
- JSON-based request/response format

**Data Models**: Mongoose ODM with MongoDB
- Four primary models: Job, Employer, Seeker, Blog
- Schema validation enforced at model level
- Timestamps automatically tracked (createdAt, updatedAt)
- Referential relationships using ObjectId (e.g., Job.employerId → Employer)

**Authentication**: Password hashing with bcryptjs
- Passwords hashed before storage using bcrypt (10 salt rounds)
- JWT token dependency included (jsonwebtoken) but not yet implemented
- Email uniqueness validated at database level
- No authentication middleware currently active

**Database Connection**: MongoDB with connection pooling
- Custom connection utility in `/lib/mongodb.ts`
- Cached connection pattern to prevent connection exhaustion
- Environment variable-based URI configuration
- Fallback to localhost for development

## Data Models

**Job Schema**:
- Core fields: title, company, location, type (enum), salary, description
- Optional requirements array for job qualifications
- Status field (active/closed) for job lifecycle management
- Foreign key reference to Employer via employerId

**Employer Schema**:
- Basic fields: name, email, password (hashed), company
- Optional contact fields: phone, website
- Email uniqueness constraint

**Seeker Schema**:
- Profile fields: name, email, password (hashed), phone
- Career information: skills (array), experience, education
- Resume storage field (likely file path/URL)

**Blog Schema**:
- Content fields: title, slug (unique), excerpt, content, image
- Metadata: author (defaults to 'Global Job Point'), featured flag
- Published date for sorting and display

## External Dependencies

**Database**: MongoDB
- Primary data store for all application data
- Connection via Mongoose ODM (v8.20.0)
- URI configured through MONGODB_URI environment variable
- Currently defaults to local MongoDB instance

**Third-Party Services**:
- AdSense integration planned (layout optimized but not implemented)
- No email service currently integrated
- No file upload service for resumes/images (fields exist but storage not configured)

**Development Environment**:
- Configured for Replit deployment with custom domain support
- Dev server runs on port 5000 with 0.0.0.0 binding
- Environment variable REPLIT_DOMAINS used for allowed origins

**Security Libraries**:
- bcryptjs for password hashing
- jsonwebtoken included (implementation pending)
- No CORS middleware currently configured
- No rate limiting or API protection implemented

**Missing Implementations**:
- JWT authentication flow not yet built
- File upload system for resumes and blog images
- Email notification service
- Payment processing for premium features
- Admin dashboard pages (routes may exist but no implementation found)