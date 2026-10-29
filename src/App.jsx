import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WelcomeOverlay from './components/WelcomeOverlay';

export default function App() {
  useEffect(() => {
    // 1. Monolith Engine character-splitting scroll animation for headings
    const titleElements = document.querySelectorAll(
      '.huge-section-heading, .section-title, [data-animate-chars]'
    );

    titleElements.forEach((el) => {
      const rawText = (el.dataset.text ?? el.textContent ?? '').trim();
      if (!rawText || el.querySelector('.word')) return;

      el.setAttribute('aria-label', rawText);
      el.innerHTML = rawText
        .split('\n')
        .map((line) =>
          line
            .trim()
            .split(' ')
            .map(
              (word) =>
                `<span class="word" aria-hidden="true">${[...word]
                  .map((ch) => `<span class="ch">${ch}</span>`)
                  .join('')}</span>`
            )
            .join(' ')
        )
        .join('<br>');

      // Apply staggered transitions to each character so they roll in one-by-one!
      const chars = el.querySelectorAll('.ch');
      chars.forEach((ch, idx) => {
        ch.style.transitionDelay = `${idx * 0.055}s`;
      });
    });

    // 2. Select elements across sections to animate on scroll
    const targets = document.querySelectorAll(
      '.section-wrapper, .section-header-block, .huge-section-heading, .section-desc, .glass-card, .service-card, .skills-category-card, .contact-card, .timeline-item'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          } else {
            // Reset animation when element leaves the section
            entry.target.classList.remove('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    targets.forEach((el, index) => {
      // Avoid attaching general scroll reveal to the initial hero content so it doesn't pop in late
      if (el.closest('#hero')) return;
      if (!el.classList.contains('huge-section-heading')) {
        el.classList.add('scroll-reveal');
        const delay = (index % 4) * 0.08;
        el.style.transitionDelay = `${delay}s`;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      <WelcomeOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <ExperienceEducation />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
