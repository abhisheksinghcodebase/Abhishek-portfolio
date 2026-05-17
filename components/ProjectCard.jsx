'use client';
import { motion } from 'framer-motion';


export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="glass gradient-border rounded-2xl overflow-hidden card-hover group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Card Header Gradient */}
      <div
        className="h-2 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color1}, ${project.color2})` }}
      />

      <div className="p-6">
        {/* Icon + Badge */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${project.color1}20, ${project.color2}20)`,
              border: `1px solid ${project.color1}40`,
            }}
          >
            {project.emoji}
          </div>
          {project.featured && (
            <span
              className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(245,158,11,0.1)',
                border: '1px solid rgba(245,158,11,0.3)',
                color: '#fbbf24',
              }}
            >
              <i className="fa-solid fa-star text-[10px]"></i> Featured
            </span>
          )}
        </div>

        {/* Title + Tagline */}
        <h3
          className="font-display font-bold text-lg mb-1"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>
        <p className="text-xs font-medium mb-3" style={{ color: project.color1 }}>
          {project.tagline}
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2.5 py-1 rounded-lg"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-secondary)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Features (visible on hover on desktop) */}
        <div
          className="mb-5 overflow-hidden transition-all duration-300"
          style={{ maxHeight: '0px' }}
          ref={(el) => {
            if (el) {
              el.parentElement?.parentElement?.classList.contains('group') &&
                el.closest('.group')?.addEventListener('mouseenter', () => {
                  el.style.maxHeight = '200px';
                });
              el.closest('.group')?.addEventListener('mouseleave', () => {
                el.style.maxHeight = '0px';
              });
            }
          }}
        >
          <ul className="space-y-1">
            {project.features?.slice(0, 3).map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: project.color1 }}>▸</span> {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-secondary)',
            }}
          >
            <i className="fa-brands fa-github text-[15px]"></i> GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: `linear-gradient(135deg, ${project.color1}, ${project.color2})`,
                boxShadow: `0 4px 20px ${project.color1}40`,
              }}
            >
              <i className="fa-solid fa-arrow-up-right-from-square text-[15px]"></i> Live Demo
            </a>
          ) : (
            <div
              className="flex-1 flex items-center justify-center py-2.5 rounded-xl text-xs font-medium"
              style={{
                background: 'var(--bg-card)',
                border: '1px dashed var(--card-border)',
                color: 'var(--text-muted)',
              }}
            >
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
