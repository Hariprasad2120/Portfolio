import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null); // 'email' or 'phone'

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ borderTop: '1px solid var(--border-dim)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header-block">
          <h2 className="huge-section-heading">
            CONTACT
          </h2>
          <p className="section-desc">
            Open for full-time software engineering roles, enterprise system contracts, and growth-focused freelance projects.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1080px',
            margin: '0 auto'
          }}
        >
          {/* Left Column: Direct Info & Quick Copy Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Email Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                border: '1px solid var(--border-dim)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)'
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${resumeData.personal.email}`}
                    style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--text-main)', textDecoration: 'none' }}
                  >
                    {resumeData.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(resumeData.personal.email, 'email')}
                className="btn-secondary"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}
                title="Copy Email Address"
              >
                {copiedType === 'email' ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                <span>{copiedType === 'email' ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                border: '1px solid var(--border-dim)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8'
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Phone / WhatsApp
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {resumeData.personal.phone}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={resumeData.personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}
                >
                  WhatsApp
                </a>
                <button
                  onClick={() => handleCopy(resumeData.personal.phone, 'phone')}
                  className="btn-secondary"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Location & Links Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                border: '1px solid var(--border-dim)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <MapPin size={18} style={{ color: 'var(--accent)' }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 500 }}>
                  Based in {resumeData.personal.location} (Open to Remote Worldwide & Hybrid)
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={resumeData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={15} />
                  <span>GitHub Profile</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div
            className="glass-card"
            style={{
              padding: '2.25rem',
              border: '1px solid var(--border-dim)'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-highlight)',
                marginBottom: '0.35rem'
              }}
            >
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
              Have an opening, enterprise project, or want to review code? Drop a message below.
            </p>

            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2.5rem 1rem',
                  background: 'rgba(16, 185, 129, 0.08)',
                  borderRadius: '12px',
                  border: '1px solid rgba(16, 185, 129, 0.25)'
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#10b981',
                    marginBottom: '1rem'
                  }}
                >
                  <Check size={24} />
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-highlight)', marginBottom: '0.35rem' }}>
                  Thank you! Message Sent.
                </h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                  I will review your message and reply via email within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ fontSize: '0.82rem' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-dim)',
                      borderRadius: '8px',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-dim)',
                      borderRadius: '8px',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                    Subject / Project Type
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Stack Engineering / ERP / Freelance"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-dim)',
                      borderRadius: '8px',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.35rem' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the project, role, or requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-dim)',
                      borderRadius: '8px',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem' }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
