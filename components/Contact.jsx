'use client';
import { motion } from 'framer-motion';


export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Background orbs */}
      <div className="orb orb-1" style={{ opacity: 0.6 }} />
      <div className="orb orb-2" style={{ opacity: 0.4 }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="gradient-border glass rounded-3xl p-10 sm:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Tag */}
          <div className="section-tag mx-auto mb-6 w-fit">
            <i className="fa-solid fa-wand-magic-sparkles text-[12px]"></i> Get In Touch
          </div>

          {/* Heading */}
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}
          >
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Amazing</span>
          </h2>

          <p className="text-base leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            I&apos;m open to internships, freelance projects, and exciting collaborations.
            Whether you have a project in mind or just want to say hello — I&apos;d love to hear from you!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:abhisheksinghcode@zohomail.in" className="btn-primary">
              <i className="fa-solid fa-envelope text-[18px]"></i> Send an Email <i className="fa-solid fa-arrow-right text-[14px]"></i>
            </a>
            <a
              href="https://github.com/abhisheksinghcodebase"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <i className="fa-brands fa-github text-[18px]"></i> View GitHub
            </a>
          </div>

          {/* Divider */}
          <div className="my-10 flex items-center gap-4">
            <div className="flex-1 h-px" style={{ background: 'var(--card-border)' }} />
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>or connect on</span>
            <div className="flex-1 h-px" style={{ background: 'var(--card-border)' }} />
          </div>

          {/* Social Row */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                icon: 'fa-brands fa-github',
                label: 'GitHub',
                sub: '@abhisheksinghcodebase',
                href: 'https://github.com/abhisheksinghcodebase',
                color: '#6366f1',
              },
              {
                icon: 'fa-brands fa-linkedin',
                label: 'LinkedIn',
                sub: 'abhisheksinghcode',
                href: 'https://linkedin.com/in/abhisheksinghcode',
                color: '#0ea5e9',
              },
              {
                icon: 'fa-brands fa-twitter',
                label: 'X / Twitter',
                sub: '@Abhisheksing443',
                href: 'https://x.com/Abhisheksing443',
                color: '#a78bfa',
              },
              {
                icon: 'fa-solid fa-envelope',
                label: 'Email',
                sub: 'abhisheksinghcode@zohomail.in',
                href: 'mailto:abhisheksinghcode@zohomail.in',
                color: '#06b6d4',
              },
              {
                icon: 'fa-solid fa-phone',
                label: 'Phone',
                sub: '+91 8603937938',
                href: 'tel:+918603937938',
                color: '#10b981',
              },
            ].map(({ icon: Icon, label, sub, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass rounded-2xl px-5 py-4 flex items-center gap-3 card-hover text-left"
                style={{ border: `1px solid ${color}25` }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}15` }}
                >
                  <i className={`${Icon} text-[17px]`} style={{ color }}></i>
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {label}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{sub}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
