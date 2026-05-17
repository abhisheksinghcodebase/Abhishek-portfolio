import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'Abhishek Singh — Full-Stack Developer & AI Engineer',
  description: 'Portfolio of Abhishek Singh — Full-stack developer specializing in React, Next.js, Node.js, and AI-powered applications. Creator of ElectIQ, GlassChat, and Terraform Generator.',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'nodejs', 'ai', 'full-stack', 'abhishek singh'],
  authors: [{ name: 'Abhishek Singh' }],
  openGraph: {
    title: 'Abhishek Singh — Full-Stack Developer & AI Engineer',
    description: 'Explore full-stack projects built with modern technologies and AI.',
    type: 'website',
    url: 'https://abhishek-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Singh — Full-Stack Developer',
    description: 'Building AI-powered web applications with React, Next.js & Node.js',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
