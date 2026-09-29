'use client';
import { motion } from 'framer-motion';

const technologies = [
  'AI / LLM Integration',
  'RAG',
  'FastAPI',
  'Next.js',
  'TypeScript',
  'PostgreSQL',
  'ChromaDB',
  'JWT',
  'Async Backend Development',
];

const capabilities = [
  'AI-powered career guidance',
  'Resume analysis and ATS scoring',
  'Personalized learning roadmaps',
  'GitHub profile analysis',
  'AI-based mock interviews',
  'Progress tracking and job matching',
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-tag mx-auto mb-4 w-fit">
            <i className="fa-solid fa-briefcase text-[12px]"></i> Experience
          </div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}
          >
            Learning by <span className="gradient-text">Building</span>
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            Hands-on experience developing practical AI-driven solutions.
          </p>
        </motion.div>

        <motion.article
          className="glass rounded-2xl p-6 sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.72fr)] gap-8 lg:gap-12">
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#818cf8' }}>
                    IBM SkillsBuild · BharatCares · AICTE
                  </p>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
                    AI Automation &amp; Intelligent Solutions Intern
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                    6-week internship · 22 June – 31 July 2026
                  </p>
                </div>
                <span className="badge-pill badge-pill-cyan">Completed</span>
              </div>

              <div className="mb-7">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h4 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                    SkillBridge AI
                  </h4>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>AI-powered career mentoring platform</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Built to support students and fresh graduates with personalized career guidance, preparation, and progress tracking.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 mb-8">
                {capabilities.map((capability) => (
                  <div key={capability} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <i className="fa-solid fa-check mt-1 text-xs" style={{ color: '#22c55e' }}></i>
                    <span>{capability}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/abhisheksinghcodebase/Skillbridge-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  <i className="fa-brands fa-github"></i>
                  View SkillBridge AI on GitHub
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
                <a
                  href="/images/ibmcertificate.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  <i className="fa-solid fa-award"></i>
                  View internship certificate
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
              </div>
            </div>

            <aside className="border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-8" style={{ borderColor: 'var(--card-border)' }}>
              <h4 className="font-display font-bold text-base mb-4" style={{ color: 'var(--text-primary)' }}>
                Technologies &amp; methods
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span key={technology} className="badge-pill text-xs">{technology}</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mt-6" style={{ color: 'var(--text-secondary)' }}>
                Applied AI and backend concepts to a practical product, gaining experience across the full stack and asynchronous services.
              </p>
            </aside>
          </div>
        </motion.article>
      </div>
    </section>
  );
}