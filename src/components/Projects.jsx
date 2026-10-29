import React, { useState } from 'react';
import { FolderGit2, ExternalLink, CheckCircle2, ChevronDown, ChevronUp, Layers, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';
import { resumeData } from '../data/resumeData';
import CounterNumber from './CounterNumber';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [expandedProjectId, setExpandedProjectId] = useState('dubash-exim');

  const categories = ['All', 'Full Stack / E-Commerce', 'Enterprise ERP', 'Frontend & Corporate', 'AI & Marketing'];

  const filteredProjects = filter === 'All'
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(p.category.toLowerCase()));

  const toggleExpand = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="section-wrapper" style={{ borderTop: '1px solid var(--border-dim)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header-block">
          <h2 className="huge-section-heading">
            PROJECTS
          </h2>
          <p className="section-desc">
            Production web platforms built with rigorous engineering standards, clean code architecture, and high business impact.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  padding: '0.5rem 1.15rem',
                  borderRadius: '9999px',
                  background: isSelected ? 'var(--text-highlight)' : 'var(--bg-glass)',
                  color: isSelected ? 'var(--bg-dark)' : 'var(--text-dim)',
                  border: isSelected ? '1px solid var(--text-highlight)' : '1px solid var(--border-dim)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="glass-card"
                style={{
                  padding: '2.5rem',
                  border: '1px solid var(--border-dim)'
                }}
              >
                {/* Top Meta Header */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.65rem' }}>
                    <span className="pill" style={{ background: 'rgba(232, 228, 220, 0.1)', color: 'var(--accent)', fontWeight: 600 }}>
                      {project.category}
                    </span>
                    <span className="pill">
                      {project.date}
                    </span>
                    <span className="pill pill-glow">
                      {project.status}
                    </span>
                  </div>

                  {/* External links */}
                  {(project.githubUrl || project.liveUrl) && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                          style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
                          title="View GitHub Repository"
                        >
                          <GithubIcon size={14} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{ padding: '0.45rem 1.05rem', fontSize: '0.82rem' }}
                          title="View Live Platform"
                        >
                          <span>Live Site</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Project Title & Summary */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                    fontWeight: 700,
                    color: 'var(--text-highlight)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-dim)',
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                    maxWidth: '880px'
                  }}
                >
                  {project.summary}
                </p>

                {/* Tech Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pill"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderColor: 'rgba(255, 255, 255, 0.07)',
                        fontSize: '0.8rem'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable Architecture Details */}
                <div style={{ borderTop: '1px solid var(--border-dim)', paddingTop: '1rem' }}>
                  <button
                    onClick={() => toggleExpand(project.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      padding: '0.25rem 0'
                    }}
                  >
                    <span>{isExpanded ? 'Hide Architecture Breakdown' : 'View Architecture & Implementation Highlights'}</span>
                    <span
                      style={{
                        display: 'inline-flex',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: isExpanded ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease',
                      opacity: isExpanded ? 1 : 0
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <ul
                        style={{
                          marginTop: '1.25rem',
                          paddingLeft: '1.25rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.75rem',
                          listStyleType: 'disc'
                        }}
                      >
                        {project.highlights.map((h, i) => (
                          <li
                            key={i}
                            style={{
                              color: 'var(--text-dim)',
                              fontSize: '0.92rem',
                              lineHeight: 1.6,
                              paddingLeft: '0.25rem'
                            }}
                          >
                            <span style={{ color: 'var(--text-main)' }}>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
