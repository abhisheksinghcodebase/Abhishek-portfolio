'use client';
import { motion } from 'framer-motion';


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const chatMessages = [
  { from: 'bot', text: "Hi! I'm Abhishek Kumar 👋" },
  { from: 'user', text: 'What do you build?' },
  { from: 'bot', text: 'AI-powered full-stack apps with React, Next.js & Node.js!' },
  { from: 'user', text: 'Impressive for a first-year student!' },
  { from: 'bot', text: '✨ Check out ElectIQ, GlassChat & Terraform Generator!' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--card-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--card-border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Text Content */}
          <div>
            {/* Badge Pills */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
            >
              <span className="badge-pill badge-pill-indigo">
                <i className="fa-solid fa-bolt text-[11px]"></i> Full-Stack Developer
              </span>
              <span className="badge-pill badge-pill-cyan">
                <i className="fa-solid fa-robot text-[11px]"></i> AI Enthusiast
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="font-display font-black leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-primary)' }}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Abhishek Kumar</span>
              <br />
              <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--text-secondary)' }}>
                Building Tomorrow&apos;s Web with AI
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-lg leading-relaxed mb-8 max-w-md"
              style={{ color: 'var(--text-secondary)' }}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
            >
              B.Tech CSE (AI) student at Arya College of Engineering, Jaipur. I craft scalable,
              accessible web applications powered by AI — from civic platforms to real-time chat
              apps to DevOps automation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
            >
              <a href="#projects" className="btn-primary">
                <i className="fa-solid fa-arrow-right text-[16px]"></i> Explore Projects
              </a>
              <a
                href="https://github.com/abhisheksinghcodebase"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <i className="fa-brands fa-github text-[16px]"></i> View GitHub
              </a>
            </motion.div>

            {/* Quick Contact + Trust Row */}
            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-2 mb-4"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
            >
              {['3 Major Projects', 'AI Powered Apps', 'Open Source', 'WCAG AA'].map((item) => (
                <span key={item} className="trust-item">
                  <span className="trust-check">✓</span>
                  {item}
                </span>
              ))}
            </motion.div>

            {/* Contact Quick Row */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={5}
            >
              <a
                href="mailto:abhisheksinghcode@zohomail.in"
                className="flex items-center gap-2 text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                <i className="fa-solid fa-envelope text-[13px]" style={{ color: '#6366f1' }}></i>
                abhisheksinghcode@zohomail.in
              </a>
              <a
                href="tel:+918603937938"
                className="flex items-center gap-2 text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                <i className="fa-solid fa-phone text-[13px]" style={{ color: '#06b6d4' }}></i>
                +91 8603937938
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Mock Preview Card */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="float-animation">
              {/* Chat Card */}
              <div
                className="glass gradient-border rounded-2xl overflow-hidden shadow-2xl"
                style={{ maxWidth: 420 }}
              >
                {/* Card Header */}
                <div
                  className="flex items-center gap-3 px-5 py-4"
                  style={{
                    borderBottom: '1px solid var(--card-border)',
                    background: 'rgba(99,102,241,0.06)',
                  }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-2 ml-1">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                      <i className="fa-solid fa-robot text-white text-[12px]"></i>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Abhishek&apos;s Portfolio
                    </span>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-5 space-y-3">
                  {chatMessages.map((msg, i) => (
                    <motion.div
                      key={i}
                      className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.3 }}
                    >
                      <div
                        className="px-4 py-2.5 rounded-2xl text-sm max-w-[80%]"
                        style={{
                          background:
                            msg.from === 'user'
                              ? 'linear-gradient(135deg, #6366f1, #4f46e5)'
                              : 'var(--bg-card)',
                          border: msg.from === 'bot' ? '1px solid var(--card-border)' : 'none',
                          color: msg.from === 'user' ? 'white' : 'var(--text-primary)',
                        }}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    <div
                      className="px-4 py-2.5 rounded-2xl flex gap-1 items-center"
                      style={{ background: 'var(--bg-card)', border: '1px solid var(--card-border)' }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-indigo-400"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, delay: i * 0.2, duration: 0.8 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Badge earned footer */}
                <div
                  className="mx-5 mb-5 flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
                >
                  <span className="text-xl">🏆</span>
                  <div>
                    <div className="text-xs font-bold" style={{ color: '#a5b4fc' }}>Badge Earned!</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      Open Source Contributor +50 XP
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2.5 shadow-lg"
              style={{ border: '1px solid rgba(6,182,212,0.3)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-xs font-semibold" style={{ color: '#67e8f9' }}>Arya College</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Jaipur, Rajasthan</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2.5 shadow-lg"
              style={{ border: '1px solid rgba(167,139,250,0.3)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="text-xs font-semibold" style={{ color: '#c4b5fd' }}>3 AI Apps</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>live in production</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { value: '5+', label: 'Live Projects', color: '#6366f1' },
            { value: '50K+', label: 'Lines of Code', color: '#06b6d4' },
            { value: '8', label: 'Languages Supported', color: '#a78bfa' },
            { value: '95+', label: 'Accessibility Score', color: '#f59e0b' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center card-hover">
              <div className="font-display font-black text-2xl mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
