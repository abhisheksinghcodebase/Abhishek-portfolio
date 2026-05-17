'use client';


const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10"
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <i className="fa-solid fa-code text-white text-[16px]"></i>
            </div>
            <span className="font-display font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
              Abhishek <span className="gradient-text">Singh</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium transition-colors duration-200 hover:text-indigo-400"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* GitHub */}
          <a
            href="https://github.com/abhisheksinghcodebase"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium transition-colors duration-200 hover:text-indigo-400"
            style={{ color: 'var(--text-muted)' }}
          >
            <i className="fa-brands fa-github text-[15px]"></i> @abhisheksinghcodebase
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 text-center text-xs flex items-center justify-center gap-1.5" style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--card-border)' }}>
          © {year} Abhishek Singh. Made with <i className="fa-solid fa-heart text-red-400 text-[12px]"></i> using Next.js & Framer Motion.
        </div>
      </div>
    </footer>
  );
}
