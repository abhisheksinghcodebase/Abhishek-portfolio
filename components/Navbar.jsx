'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Prevent scrolling when mobile menu is open
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
    visible: {
      opacity: 1,
      backdropFilter: 'blur(20px)',
      transition: { duration: 0.4, staggerChildren: 0.1, delayChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      backdropFilter: 'blur(0px)',
      transition: { duration: 0.3 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileOpen ? 'glass-nav shadow-lg' : 'bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group relative z-50" onClick={() => setMobileOpen(false)}>
            <div>
              <span className="font-display font-bold text-lg tracking-tight" style={{ color: 'var(--text-primary)' }}>
                Abhishek
              </span>
              <span className="gradient-text font-display font-bold text-lg ml-1 tracking-tight">Singh</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-[15px]">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4 relative z-50">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-secondary)',
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <i className="fa-solid fa-sun text-[18px]"></i> : <i className="fa-solid fa-moon text-[18px]"></i>}
              </button>
            )}

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="inline-flex btn-primary whitespace-nowrap max-[405px]:text-[11px] max-[405px]:py-1.5 max-[405px]:px-3 text-[13px] py-2 px-4 md:text-[15px] md:py-2.5 md:px-6"
            >
              Hire Me <i className="fa-solid fa-arrow-up-right-from-square max-[405px]:text-[10px] text-[12px] md:text-[14px]"></i>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 active:scale-95"
              style={{
                background: mobileOpen ? 'rgba(99,102,241,0.1)' : 'var(--bg-card)',
                border: mobileOpen ? '1px solid rgba(99,102,241,0.3)' : '1px solid var(--card-border)',
                color: mobileOpen ? '#6366f1' : 'var(--text-secondary)',
              }}
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: mobileOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <i className="fa-solid fa-xmark text-[20px]"></i> : <i className="fa-solid fa-bars-staggered text-[20px]"></i>}
              </motion.div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Full Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center px-6 md:hidden"
            style={{
              background: theme === 'dark' ? 'rgba(8, 8, 18, 0.95)' : 'rgba(248, 250, 252, 0.95)',
            }}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col gap-6 items-center w-full mt-10">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={linkVariants}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-display font-bold transition-all duration-300 active:text-indigo-500"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div variants={linkVariants} className="w-full h-px bg-gray-500/20 my-6 max-w-[200px] mx-auto" />

              <motion.a
                variants={linkVariants}
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full max-[405px]:max-w-[150px] max-[405px]:py-2 max-[405px]:text-sm max-w-[200px] py-3 justify-center text-base shadow-xl shadow-indigo-500/20"
              >
                Hire Me <i className="fa-solid fa-arrow-up-right-from-square text-[14px]"></i>
              </motion.a>

              {/* Socials quick link in menu */}
              <motion.div variants={linkVariants} className="flex gap-8 mt-10">
                <a href="https://github.com/abhisheksinghcodebase" target="_blank" rel="noopener noreferrer" className="text-3xl transition-all duration-300 active:text-indigo-500" style={{ color: 'var(--text-secondary)' }}>
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/abhisheksinghcode" target="_blank" rel="noopener noreferrer" className="text-3xl transition-all duration-300 active:text-cyan-500" style={{ color: 'var(--text-secondary)' }}>
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="mailto:abhisheksinghcode@zohomail.in" className="text-3xl transition-all duration-300 active:text-purple-500" style={{ color: 'var(--text-secondary)' }}>
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
