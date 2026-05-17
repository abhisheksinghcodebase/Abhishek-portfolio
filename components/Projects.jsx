'use client';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    emoji: '🗳️',
    title: 'ElectIQ',
    tagline: 'AI-Powered Election Guide',
    description:
      'Democracy simplified with AI. Guides citizens through electoral processes in 8 languages using Google Gemini, gamification (XP + Badges), and full WCAG AA accessibility.',
    tech: ['Next.js 16', 'React 19', 'Gemini AI', 'Firebase', 'Framer Motion'],
    features: [
      'AI Chat powered by Google Gemini',
      'Personalized voter guides',
      'Interactive election timeline',
      'Polling station finder (Google Maps)',
      'Gamification — XP + Badges system',
      '8 languages, WCAG AA compliant',
    ],
    github: 'https://github.com/abhisheksinghcodebase/prompt-wars-h2s',
    demo: null,
    color1: '#6366f1',
    color2: '#a78bfa',
    featured: true,
  },
  {
    emoji: '💬',
    title: 'GlassChat',
    tagline: 'Modern Real-Time Chat App',
    description:
      'Beautiful glassmorphism chat app with real-time messaging via Socket.IO, JWT authentication, file sharing, and smooth Framer Motion animations.',
    tech: ['React 18', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT'],
    features: [
      'Real-time messaging via Socket.IO',
      'Glassmorphism UI design',
      'Secure auth with JWT + bcrypt',
      'File upload & sharing (Multer)',
      'Helmet security headers, CORS',
    ],
    github: 'https://github.com/abhisheksinghcodebase/Glasschat',
    demo: null,
    color1: '#06b6d4',
    color2: '#0ea5e9',
    featured: true,
  },
  {
    emoji: '☁️',
    title: 'Terraform Generator',
    tagline: 'Code-to-Cloud: AI IaC Generator',
    description:
      'Upload a GitHub repo or ZIP — GPT-4o analyzes your tech stack and generates production-ready Terraform for AWS infrastructure in seconds.',
    tech: ['React', 'Vite', 'Node.js', 'GPT-4o', 'Monaco Editor', 'AWS'],
    features: [
      'GPT-4o powered code analysis',
      'GitHub URL or ZIP upload',
      'AWS infrastructure detection',
      'Monaco Editor for live editing',
      'Confidence scoring per resource',
    ],
    github: 'https://github.com/abhisheksinghcodebase/Terraform-generator',
    demo: null,
    color1: '#f59e0b',
    color2: '#ef4444',
    featured: true,
  },
  {
    emoji: '🛕',
    title: 'Phulhar Dham',
    tagline: 'Temple Management Platform',
    description:
      'Full-stack temple management web app with JWT auth, Multer file handling, and Razorpay-powered donation system. Live in production.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    features: [
      'JWT-based authentication',
      'Razorpay payment & donation system',
      'Multer file upload handling',
      'Admin dashboard for management',
      'Deployed on Vercel + Render',
    ],
    github: 'https://github.com/abhisheksinghcodebase',
    demo: 'https://phulhardham.vercel.app',
    color1: '#a78bfa',
    color2: '#7c3aed',
    featured: false,
  },
  {
    emoji: '🌐',
    title: 'Personal Portfolio v1',
    tagline: 'Responsive Developer Portfolio',
    description:
      'Previous portfolio website built with HTML, CSS, JavaScript, and Node.js — responsive and deployed on Vercel.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
    features: [
      'Fully responsive design',
      'Clean, modern UI',
      'Deployed on Vercel',
    ],
    github: 'https://github.com/abhisheksinghcodebase',
    demo: 'https://abhisheksinghcode.vercel.app',
    color1: '#10b981',
    color2: '#06b6d4',
    featured: false,
  },
  {
    emoji: '📚',
    title: 'C Programming Hub',
    tagline: 'Educational DSA Resource',
    description:
      'A comprehensive C programming and Data Structures learning resource with examples, explanations, and practice problems for beginners.',
    tech: ['C', 'DSA', 'Algorithms', 'Data Structures'],
    features: [
      'Complete C language coverage',
      'Data Structures & Algorithms',
      'Practice problems with solutions',
    ],
    github: 'https://github.com/abhisheksinghcodebase',
    demo: null,
    color1: '#64748b',
    color2: '#475569',
    featured: false,
  },
];


export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-tag mx-auto mb-4 w-fit">
            <Layers size={12} /> Featured Projects
          </div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}
          >
            Things I&apos;ve{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            From AI civic platforms to real-time chat apps — every project is built with
            purpose, performance, and a premium user experience in mind.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
