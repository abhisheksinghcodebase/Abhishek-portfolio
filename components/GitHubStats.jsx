'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, Users, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch('https://api.github.com/users/abhisheksinghcodebase'),
          fetch('https://api.github.com/users/abhisheksinghcodebase/repos?sort=updated&per_page=4'),
        ]);
        const userData = await userRes.json();
        const repoData = await repoRes.json();
        setStats(userData);
        setRepos(Array.isArray(repoData) ? repoData : []);
      } catch {
        // fallback silently
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const statCards = [
    { icon: BookOpen, label: 'Public Repos', value: stats?.public_repos ?? '—', color: '#6366f1' },
    { icon: Users, label: 'Followers', value: stats?.followers ?? '—', color: '#06b6d4' },
    { icon: Users, label: 'Following', value: stats?.following ?? '—', color: '#a78bfa' },
    { icon: BookOpen, label: 'GitHub Since', value: stats?.created_at ? new Date(stats.created_at).getFullYear() : '—', color: '#f59e0b' },
  ];

  return (
    <section id="github" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
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
            <FaGithub size={12} /> GitHub Activity
          </div>
          <h2
            className="font-display font-black mb-4"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}
          >
            Open Source{' '}
            <span className="gradient-text">Contributions</span>
          </h2>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              className="glass rounded-2xl p-5 text-center card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <card.icon size={20} style={{ color: card.color }} className="mx-auto mb-3" />
              <div
                className="font-display font-black text-2xl mb-1"
                style={{ color: card.color }}
              >
                {loading ? (
                  <div className="h-7 w-12 mx-auto rounded-lg animate-pulse" style={{ background: 'var(--card-border)' }} />
                ) : (
                  card.value
                )}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {card.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Repos */}
        {repos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 card-hover block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FaGithub size={16} style={{ color: '#6366f1' }} />
                    <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                      {repo.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {repo.description || 'No description provided.'}
                </p>
                {repo.language && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    {repo.language}
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/abhisheksinghcodebase"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaGithub size={16} /> View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
