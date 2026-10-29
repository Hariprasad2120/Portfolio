import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="section-wrapper" style={{ borderTop: '1px solid var(--border-dim)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header-block">
          <h2 className="huge-section-heading">
            EXPERIENCE
          </h2>
          <p className="section-desc">
            Industry experience & academic foundation in Computer Science.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {/* Work Experience Track */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}
              >
                <Briefcase size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-highlight)' }}>
                Professional Experience
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {resumeData.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.85rem',
                    border: '1px solid var(--border-dim)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', fontWeight: 700, color: 'var(--text-highlight)' }}>
                      {exp.role}
                    </h4>
                    <span className="pill" style={{ background: 'rgba(232, 228, 220, 0.08)', color: 'var(--accent)' }}>
                      {exp.type}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.94rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {exp.company}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="pill"
                        style={{ fontSize: '0.74rem', background: 'rgba(255, 255, 255, 0.03)' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Track */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8'
                }}
              >
                <GraduationCap size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-highlight)' }}>
                Education & Credentials
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {resumeData.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.85rem',
                    border: '1px solid var(--border-dim)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', fontWeight: 700, color: 'var(--text-highlight)' }}>
                      {edu.degree}
                    </h4>
                    <span className="pill pill-glow" style={{ fontSize: '0.74rem' }}>
                      {edu.period}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.94rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {edu.institution}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {edu.details}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-dim)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.84rem' }}>
                    <CheckCircle2 size={16} />
                    <span>Graduating B.E. Computer Science — May 2026</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
