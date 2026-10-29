import React, { useState } from 'react';
import { Code, CreditCard, Layers, Sparkles, Check, ChevronRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (name) => {
    switch (name) {
      case 'Code':
        return <Code size={24} style={{ color: 'var(--accent)' }} />;
      case 'CreditCard':
        return <CreditCard size={24} style={{ color: '#38bdf8' }} />;
      case 'Layers':
        return <Layers size={24} style={{ color: '#e5b869' }} />;
      case 'Sparkles':
      default:
        return <Sparkles size={24} style={{ color: '#10b981' }} />;
    }
  };

  return (
    <section id="services" className="section-wrapper" style={{ borderTop: '1px solid var(--border-dim)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header-block">
          <h2 className="huge-section-heading">
            SERVICES
          </h2>
          <p className="section-desc">
            Transforming complex business logic into high-converting web applications, resilient backend architectures, and telemetry-backed systems.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {resumeData.services.map((service, idx) => (
            <div
              key={service.id}
              className="glass-card"
              style={{
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-dim)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-dim)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                {/* Top Number & Icon */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.25rem 0'
                    }}
                  >
                    {getIcon(service.icon)}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'rgba(255, 255, 255, 0.25)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {service.id}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.5rem'
                  }}
                >
                  {service.subtitle}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-highlight)',
                    marginBottom: '0.85rem',
                    lineHeight: 1.3
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-dim)',
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem'
                  }}
                >
                  {service.description}
                </p>

                {/* Deliverables Bullet List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {service.deliverables.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.86rem',
                        color: 'var(--text-main)',
                        lineHeight: 1.45
                      }}
                    >
                      <span
                        style={{
                          marginTop: '3px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: 'rgba(232, 228, 220, 0.1)',
                          flexShrink: 0
                        }}
                      >
                        <Check size={10} style={{ color: 'var(--accent)' }} />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  Production Architecture
                </span>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.85rem',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}
                >
                  <span>Inquire</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
