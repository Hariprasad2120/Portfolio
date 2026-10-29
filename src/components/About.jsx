import React from 'react';
import { Sparkles, CheckCircle2, FileText, ArrowUpRight, GraduationCap, Laptop, Cpu, Rocket, Cloud } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import CounterNumber from './CounterNumber';

export default function About() {
  const corePrinciples = [
    {
      icon: <Cloud size={22} style={{ color: '#38bdf8' }} />,
      title: 'Full Lifecycle Ownership',
      desc: 'From client discovery and relational schema modeling (Neon & Prisma) to frontend UX, Razorpay payments, and serverless/Hostinger deployment.'
    },
    {
      icon: <Rocket size={22} style={{ color: '#38bdf8' }} />,
      title: 'Conversion & Funnel Engineering',
      desc: 'Going beyond simple code by integrating SEO prerendering, GA4, GTM, Meta Pixel conversion telemetry, and automated OTP reminder flows.'
    },
    {
      icon: <Cpu size={22} style={{ color: '#10b981' }} />,
      title: 'Type-Safe Modular Architecture',
      desc: 'Writing clean TypeScript, robust REST APIs, normalized SQL databases, and component systems that scale smoothly under load.'
    }
  ];

  return (
    <section id="about" className="section-wrapper" style={{ borderTop: '1px solid var(--border-dim)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <h2 className="huge-section-heading">
            ABOUT
          </h2>
          <p className="section-desc">
            A software engineer who bridges full stack architecture with product telemetry and seamless UX.
          </p>
        </div>

        {/* Narrative / Kinetic Text Card */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.3vw, 1.85rem)',
                fontWeight: 600,
                lineHeight: 1.5,
                color: 'var(--text-main)',
                marginBottom: '1.75rem'
              }}
            >
              "I build and ship production web platforms end-to-end — from normalized database schemas and secure payment pipelines to 60fps responsive UIs and automated customer conversion funnels."
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                color: 'var(--text-dim)',
                fontSize: '1rem',
                lineHeight: 1.7,
                borderTop: '1px solid var(--border-dim)',
                paddingTop: '1.75rem'
              }}
            >
              <div>
                <p style={{ marginBottom: '1rem' }}>
                  Recently, I engineered and shipped the complete enrollment and LMS ecosystem for <strong style={{ color: 'var(--text-highlight)' }}>Dubash Exim Academy</strong>, integrating seat-limited cohort checkout with Razorpay, video streaming, automated PDF certification, and email flows.
                </p>
                <p>
                  Currently, I am architecting <strong style={{ color: 'var(--text-highlight)' }}>Monolith Engine</strong> — a modular enterprise ERP for shipping and freight logistics, managing CRM pipelines, HRMS attendance, appraisal systems, and customs documentation.
                </p>
              </div>

              <div>
                <p style={{ marginBottom: '1rem' }}>
                  My engineering background is grounded in <strong style={{ color: 'var(--text-highlight)' }}>Computer Science & Engineering at Jeppiaar Engineering College (Anna University)</strong>, graduating in May 2026.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem' }}>
                  <a
                    href="Hariprasad_V_Resume_v3.docx"
                    download
                    className="btn-primary"
                    style={{ fontSize: '0.86rem', padding: '0.65rem 1.4rem' }}
                  >
                    <FileText size={16} />
                    <span>Download Resume (Word)</span>
                  </a>
                  <a
                    href="Hariprasad_V_Resume_v3.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ fontSize: '0.86rem', padding: '0.65rem 1.2rem' }}
                  >
                    <span>View PDF</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem'
          }}
        >
          {resumeData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.75rem 1.5rem',
                textAlign: 'center',
                border: '1px solid var(--border-dim)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  letterSpacing: '-0.03em',
                  marginBottom: '0.35rem'
                }}
              >
                <CounterNumber value={stat.value} duration={1800} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  color: 'var(--text-dim)',
                  fontWeight: 500
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Principles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {corePrinciples.map((principle, index) => (
            <div
              key={index}
              className="glass-card"
              style={{ padding: '2rem 1.75rem' }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                {principle.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-highlight)',
                  marginBottom: '0.65rem'
                }}
              >
                {principle.title}
              </h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
