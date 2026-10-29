import React from 'react';
import { ArrowUp, Mail, Phone, Heart, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-dim)',
        backgroundColor: 'var(--footer-bg)',
        paddingTop: '4.5rem',
        paddingBottom: '3.5rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Col 1: Wordmark & Bio */}
          <div style={{ maxWidth: '420px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1rem'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-highlight)'
                }}
              >
                {resumeData.personal.name}
              </span>
            </div>

            <p style={{ color: 'var(--text-dim)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Full stack software engineer building production web applications, modular ERP architectures, and telemetry-backed digital products.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-dim)',
                  color: 'var(--text-dim)',
                  textDecoration: 'none'
                }}
              >
                <GithubIcon size={17} />
              </a>

              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-dim)',
                  color: 'var(--text-dim)',
                  textDecoration: 'none'
                }}
              >
                <LinkedinIcon size={17} />
              </a>

              <a
                href={`mailto:${resumeData.personal.email}`}
                aria-label="Email"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-dim)',
                  color: 'var(--text-dim)',
                  textDecoration: 'none'
                }}
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent)',
                marginBottom: '1rem'
              }}
            >
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <a href="#home" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Home</a>
              <a href="#about" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>About</a>
              <a href="#services" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Services</a>
              <a href="#projects" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Projects</a>
              <a href="#experience" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Experience</a>
              <a href="#skills" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Skills</a>
              <a href="#contact" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          {/* Col 3: Direct Download & Status */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent)',
                marginBottom: '1rem'
              }}
            >
              Resume & Availability
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '280px' }}>
              <a
                href="Hariprasad_V_Resume_v3.docx"
                download
                className="btn-primary"
                style={{ fontSize: '0.84rem', padding: '0.65rem 1.25rem' }}
              >
                <FileText size={15} />
                <span>Download Resume (DOCX)</span>
              </a>

              <a
                href="Hariprasad_V_Resume_v3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.84rem', padding: '0.65rem 1.25rem' }}
              >
                <span>View Resume (PDF)</span>
              </a>

              <div className="pill pill-glow" style={{ marginTop: '0.5rem', width: 'fit-content' }}>
                🟢 {resumeData.personal.status}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div
          style={{
            borderTop: '1px solid var(--border-dim)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.84rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Hariprasad V. All rights reserved. Crafted with React.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'none',
              border: 'none',
              color: 'var(--accent)',
              cursor: 'pointer',
              fontSize: '0.84rem',
              fontWeight: 500
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
