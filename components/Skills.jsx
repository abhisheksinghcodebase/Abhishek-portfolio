'use client';
import { motion } from 'framer-motion';


const skillGroups = [
  {
    category: 'Programming Languages',
    emoji: '💻',
    color: '#6366f1',
    skills: ['C', 'Python', 'JavaScript'],
  },
  {
    category: 'Web Technologies',
    emoji: '🌐',
    color: '#06b6d4',
    skills: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Vue.js', 'Web3.js'],
  },
  {
    category: 'Backend Development',
    emoji: '⚙️',
    color: '#a78bfa',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Socket.IO'],
  },
  {
    category: 'Database & Cloud',
    emoji: '🗄️',
    color: '#f59e0b',
    skills: ['MongoDB', 'Firebase', 'Firestore', 'Mongoose', 'Vercel', 'Render'],
  },
  {
    category: 'AI & Tools',
    emoji: '🤖',
    color: '#ef4444',
    skills: ['Google Gemini', 'GPT-4o', 'OpenAI SDK', 'Terraform', 'AWS'],
  },
  {
    category: 'Version Control',
    emoji: '🔧',
    color: '#10b981',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'Design & UI/UX',
    emoji: '🎨',
    color: '#ec4899',
    skills: ['Figma', 'Canva', 'Adobe Photoshop', 'Illustrator', 'Premiere Pro', 'Lightroom'],
  },
  {
    category: 'Soft Skills',
    emoji: '🤝',
    color: '#0ea5e9',
    skills: ['Communication', 'Teamwork', 'Leadership', 'Coordination', 'Problem Solving'],
  },
];

const certifications = [
  { title: 'Data Entry', org: 'MindLuster', year: '2023', emoji: '📊' },
  { title: 'Website Creation', org: 'MindLuster', year: '2023', emoji: '🌐' },
  { title: 'Computer Skills', org: 'MindLuster', year: '2023', emoji: '💻' },
  { title: 'Data Science with AI & ML Webinar', org: 'Certificate of Participation', year: '2023', emoji: '🤖' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-tag mx-auto mb-4 w-fit">
            <i className="fa-solid fa-microchip text-[12px]"></i> Tech Stack
          </div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}
          >
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="max-w-md mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
            The tools and technologies I use to bring ideas to life — from frontend design to AI integration.
          </p>
        </motion.div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass rounded-2xl p-5 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.07, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${group.color}15`, border: `1px solid ${group.color}30` }}
                >
                  {group.emoji}
                </div>
                <h3
                  className="font-display font-bold text-sm leading-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Accent bar */}
              <div className="skill-bar mb-4">
                <div
                  className="skill-bar-fill"
                  style={{ background: `linear-gradient(90deg, ${group.color}, ${group.color}80)` }}
                />
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg"
                    style={{
                      background: `${group.color}10`,
                      border: `1px solid ${group.color}25`,
                      color: group.color,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: gi * 0.05 + si * 0.04 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-tag mx-auto mb-8 w-fit">
            🏅 Certifications
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                className="glass rounded-2xl p-5 card-hover flex items-start gap-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl shrink-0">{cert.emoji}</span>
                <div>
                  <div className="text-sm font-semibold leading-snug mb-1" style={{ color: 'var(--text-primary)' }}>
                    {cert.title}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {cert.org} · {cert.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
