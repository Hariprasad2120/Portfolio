import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code2, Database, Mail, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Hero() {
  const canvasRef = useRef(null);
  const [typedRole, setTypedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    'Full Stack Software Engineer',
    'Next.js & TypeScript Specialist',
    'LMS & E-Commerce Architect',
    'Modular ERP Systems Engineer',
    'AI Marketing & Growth Technologist'
  ];

  const marqueeSkills = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express',
    'PostgreSQL (Neon)',
    'Prisma ORM',
    'Razorpay',
    'Tailwind CSS',
    'Playwright E2E',
    'GA4 & GTM',
    'Meta Pixel',
    'REST APIs',
    'Automated Email Flows',
    'SEO Prerendering',
    'Git & GitHub'
  ];

  // Typing animation
  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let charIdx = 0;
    const targetRole = roles[roleIndex];

    const interval = setInterval(() => {
      if (!isDeleting) {
        currentText = targetRole.substring(0, charIdx + 1);
        charIdx++;
        setTypedRole(currentText);
        if (charIdx >= targetRole.length) {
          isDeleting = true;
          clearInterval(interval);
          setTimeout(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }, 1800);
        }
      }
    }, 60);

    return () => clearInterval(interval);
  }, [roleIndex]);

  // Subtle interactive background particles on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.floor(Math.min(width, 1400) / 25);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.6 + 0.6,
      alpha: Math.random() * 0.4 + 0.1
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 228, 220, ${p1.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(232, 228, 220, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 3.5rem)',
        paddingBottom: '0rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.8
        }}
      />

      {/* Radial ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '750px',
          height: '750px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(232, 228, 220, 0.04) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Iconic Giant Typography Wordmark (Split like the original demo) */}
      <div
        className="hero-backdrop-wordmark"
        style={{
          position: 'absolute',
          top: '46%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2vw',
          pointerEvents: 'none',
          zIndex: 1,
          userSelect: 'none',
          opacity: 0.16
        }}
        aria-hidden="true"
      >
        <span
          className="hero-backdrop-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(5rem, 16vw, 15rem)',
            fontWeight: 900,
            letterSpacing: '-0.06em',
            lineHeight: 0.8
          }}
        >
          {resumeData.personal.wordmarkFirst}
        </span>
        <span
          className="hero-backdrop-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(5rem, 16vw, 15rem)',
            fontWeight: 900,
            letterSpacing: '-0.06em',
            lineHeight: 0.8
          }}
        >
          {resumeData.personal.wordmarkSecond}
        </span>
      </div>

      {/* Main Hero Container */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', margin: 'auto 0' }}>
        {/* Central Developer Visual Card & Name */}
        <div style={{ maxWidth: '840px', margin: '0 auto', marginBottom: '2.5rem' }}>
          <h1
            className="hero-main-title"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.75rem, 7vw, 5.25rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '1rem'
            }}
          >
            {resumeData.personal.name}
          </h1>

          {/* Dynamic Typed Subheading */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              minHeight: '2.5rem',
              marginBottom: '1.25rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                color: 'var(--accent)',
                fontWeight: 600,
                letterSpacing: '-0.01em'
              }}
            >
              {typedRole}
            </span>
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1.4rem',
                backgroundColor: 'var(--accent)',
                animation: 'pulseGlow 1s infinite'
              }}
            />
          </div>

          {/* Bio paragraph */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'var(--text-dim)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.7
            }}
          >
            {resumeData.personal.tagline}
          </p>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}
        >
          <a href="#projects" className="btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
            <span>Explore Shipped Projects</span>
            <ArrowUpRight size={18} />
          </a>

          <a
            href={resumeData.personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '0.85rem 1.5rem', fontSize: '1rem' }}
          >
            <span>WhatsApp Fast Chat</span>
          </a>
        </div>

        {/* Location & Quick Meta Bar */}
        <div
          style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '0.75rem 1.75rem',
            background: 'var(--bg-card)',
            borderRadius: '9999px',
            border: '1px solid var(--border-dim)',
            backdropFilter: 'blur(12px)',
            color: 'var(--text-dim)',
            fontSize: '0.86rem',
            marginBottom: '1rem'
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <MapPin size={14} style={{ color: 'var(--accent)' }} />
            <span style={{ color: 'var(--text-main)' }}>{resumeData.personal.location}</span>
          </span>
          <span style={{ color: 'var(--border-dim)' }}>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Mail size={14} style={{ color: 'var(--accent)' }} />
            <span style={{ color: 'var(--text-main)' }}>{resumeData.personal.email}</span>
          </span>
        </div>
      </div>

      {/* Skills Marquee Carousel Ticker Margin at Bottom */}
      <div className="skills-marquee-wrapper" style={{ marginTop: '2.5rem' }}>
        <div className="skills-marquee-track">
          {marqueeSkills.concat(marqueeSkills).map((tech, idx) => (
            <span key={idx} className="skill-carousel-badge">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent)' }} />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
