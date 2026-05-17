'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';


const highlights = [
  { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Jaipur, Rajasthan 🇮🇳', color: '#6366f1' },
  { icon: 'fa-solid fa-graduation-cap', label: 'Degree', value: 'B.Tech CSE (AI) — 2029', color: '#06b6d4' },
  { icon: 'fa-solid fa-bullseye', label: 'Goal', value: 'AI Engineer & SWE', color: '#a78bfa' },
  { icon: 'fa-solid fa-briefcase', label: 'Status', value: 'Open to Internships', color: '#f59e0b' },
];

const socials = [
  {
    icon: 'fa-brands fa-github',
    label: 'GitHub',
    value: '@abhisheksinghcodebase',
    href: 'https://github.com/abhisheksinghcodebase',
    color: '#6366f1',
  },
  {
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
    value: 'abhisheksinghcode',
    href: 'https://linkedin.com/in/abhisheksinghcode',
    color: '#0ea5e9',
  },
  {
    icon: 'fa-brands fa-twitter',
    label: 'X / Twitter',
    value: '@Abhisheksing443',
    href: 'https://x.com/Abhisheksing443',
    color: '#a78bfa',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="orb orb-2" style={{ opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Avatar & Socials ── */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Avatar */}
            <div className="relative mb-8">
              <div
                className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-2xl glow-indigo"
                style={{ border: '3px solid rgba(99,102,241,0.4)' }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Abhishek Kumar"
                  width={208}
                  height={208}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to initials if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.style.background =
                      'linear-gradient(135deg, #6366f1, #06b6d4)';
                    e.currentTarget.parentElement.innerHTML =
                      '<span style="display:flex;align-items:center;justify-content:center;height:100%;font-family:Outfit,sans-serif;font-weight:900;font-size:3.5rem;color:white">AK</span>';
                  }}
                />
              </div>

              {/* Open to work badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 glass rounded-xl px-3 py-2 flex items-center gap-2"
                style={{ border: '1px solid rgba(34,197,94,0.35)' }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-400">Open to Work</span>
              </motion.div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {highlights.map(({ icon: Icon, label, value, color }, i) => (
                <motion.div
                  key={label}
                  className="glass rounded-xl p-4 card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <i className={`${Icon} mb-2 text-[17px]`} style={{ color }}></i>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
                  <div className="text-sm font-semibold mt-0.5 leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mt-6">
              {socials.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass rounded-xl px-4 py-2.5 card-hover text-xs font-medium"
                  style={{ border: `1px solid ${color}25`, color: 'var(--text-secondary)' }}
                >
                  <i className={`${Icon} text-[15px]`} style={{ color }}></i>
                  {value}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="section-tag mb-4">👋 About Me</div>

            <h2
              className="font-display font-black mb-5"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--text-primary)' }}
            >
              Crafting Digital{' '}
              <span className="gradient-text">Experiences</span>
            </h2>

            {/* Professional Summary */}
            <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              First-year <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                Computer Science Engineering (AI)
              </span> student at Arya College of Engineering, Jaipur. Passionate about software
              development, algorithmic problem-solving, and building AI-powered web applications.
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Proficient in <span className="font-semibold gradient-text">C, JavaScript, React, Next.js</span> and
              actively building real-world projects. Long-term goal: become a skilled{' '}
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                AI Engineer & Software Developer
              </span>.
            </p>

            {/* Key Highlights */}
            <div className="space-y-3 mb-8">
              {[
                { emoji: '🏫', text: 'B.Tech CSE (AI) — Arya College of Engineering, Jaipur (2025–2029)' },
                { emoji: '🚀', text: 'Built ElectIQ, GlassChat, Terraform Generator & Phulhar Dham Platform' },
                { emoji: '🤝', text: 'Participated in Smart India Hackathon & HackNexus 2025' },
                { emoji: '🎖️', text: 'Campus Ambassador at Arya College of Engineering for MNIT Jaipur' },
                { emoji: '🌐', text: 'Live projects deployed on Vercel — 2 full-stack apps in production' },
              ].map(({ emoji, text }, i) => (
                <motion.div
                  key={i}
                  className="flex gap-3 items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-lg shrink-0 mt-0.5">{emoji}</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{text}</p>
                </motion.div>
              ))}
            </div>

            {/* Career Goal Box */}
            <div
              className="glass rounded-2xl p-5"
              style={{ border: '1px solid rgba(99,102,241,0.25)', background: 'rgba(99,102,241,0.06)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <i className="fa-solid fa-bullseye text-[16px]" style={{ color: '#a5b4fc' }}></i>
                <span className="text-sm font-bold" style={{ color: '#a5b4fc' }}>Career Goal</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Seeking internship opportunities to gain practical experience, contribute to
                real-world applications, and continuously enhance technical and problem-solving
                abilities while growing as a reliable software professional.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
