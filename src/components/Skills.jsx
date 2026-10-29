import React, { useState } from 'react';
import { Cpu, Check, Terminal, Code2, Database, BarChart3, Wrench } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: <Cpu size={16} /> },
    { id: 'languages', label: 'Core Languages', icon: <Terminal size={16} /> },
    { id: 'frontend', label: 'Frontend & UI', icon: <Code2 size={16} /> },
    { id: 'backend', label: 'Backend & DB', icon: <Database size={16} /> },
    { id: 'marketingAnalytics', label: 'Growth & Telemetry', icon: <BarChart3 size={16} /> },
    { id: 'toolsPlatforms', label: 'Tools & DevOps', icon: <Wrench size={16} /> }
  ];

  const getSkillsToDisplay = () => {
    if (selectedCategory === 'all') {
      return [
        { group: 'Core Languages', items: resumeData.skills.languages, color: '#e8e4dc' },
        { group: 'Frontend Architecture', items: resumeData.skills.frontend, color: '#38bdf8' },
        { group: 'Backend & Database', items: resumeData.skills.backend, color: '#10b981' },
        { group: 'Marketing & Analytics', items: resumeData.skills.marketingAnalytics, color: '#e5b869' },
        { group: 'Tools & Platforms', items: resumeData.skills.toolsPlatforms, color: '#a855f7' }
      ];
    } else {
      const catObj = categories.find(c => c.id === selectedCategory);
      return [
        { group: catObj ? catObj.label : 'Skills', items: resumeData.skills[selectedCategory] || [], color: 'var(--accent)' }
      ];
    }
  };

  return (
    <section id="skills" className="section-wrapper" style={{ borderTop: '1px solid var(--border-dim)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header-block">
          <h2 className="huge-section-heading">
            SKILLS
          </h2>
          <p className="section-desc">
            Production-grade competencies across modern web architecture, relational databases, payments, and conversion telemetry.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  background: isSelected ? 'var(--text-highlight)' : 'var(--bg-glass)',
                  color: isSelected ? 'var(--bg-dark)' : 'var(--text-dim)',
                  border: isSelected ? '1px solid var(--text-highlight)' : '1px solid var(--border-dim)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {getSkillsToDisplay().map((group, gIdx) => (
            <div
              key={gIdx}
              className="glass-card"
              style={{
                padding: '2rem 1.75rem',
                border: '1px solid var(--border-dim)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-dim)',
                  paddingBottom: '1rem',
                  marginBottom: '1.25rem'
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-highlight)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: group.color
                    }}
                  />
                  {group.group}
                </h3>
                <span className="pill" style={{ fontSize: '0.74rem' }}>
                  {group.items.length} Techs
                </span>
              </div>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {group.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.45rem 0.85rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-dim)',
                      borderRadius: '8px',
                      fontSize: '0.84rem',
                      color: 'var(--text-main)',
                      transition: 'all 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-dim)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    }}
                  >
                    <Check size={12} style={{ color: group.color }} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
