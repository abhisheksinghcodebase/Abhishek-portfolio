'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X, Code2, ExternalLink } from 'lucide-react';

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
            <Code2 size={18} className="text-white" />
          </div>
          <div>
            <span className="font-display font-bold text-base" style={{ color: 'var(--text-primary)' }}>
              Abhishek
            </span>
            <span className="gradient-text font-display font-bold text-base ml-1">Singh</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-secondary)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex btn-primary text-sm py-2 px-5"
          >
            Hire Me <ExternalLink size={14} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-secondary)',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden mobile-menu-enter glass-nav border-t"
          style={{ borderColor: 'var(--card-border)' }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-indigo-500/10"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2 text-sm py-2.5 justify-center"
            >
              Hire Me <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
