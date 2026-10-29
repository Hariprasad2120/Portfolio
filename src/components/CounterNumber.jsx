import React, { useEffect, useRef, useState } from 'react';

export default function CounterNumber({ value, duration = 2000 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  // Extract prefix, numeric part, and suffix
  // e.g. "2+" -> prefix: "", number: 2, suffix: "+"
  // e.g. "10+" -> prefix: "", number: 10, suffix: "+"
  // e.g. "2026" -> prefix: "", number: 2026, suffix: ""
  // e.g. "100%" -> prefix: "", number: 100, suffix: "%"
  const match = String(value).match(/^([^\d]*)(\d+)([^\d]*)$/);
  const prefix = match ? match[1] : '';
  const targetNumber = match ? parseInt(match[2], 10) : null;
  const suffix = match ? match[3] : '';

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
          } else {
            // Reset counter when element leaves viewport
            setHasStarted(false);
            setDisplayValue(0);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || targetNumber === null) return;

    let startTime = null;
    let animId = null;

    const startVal = targetNumber > 1900 ? targetNumber - 60 : 0; // smoother roll for years like 2026

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(startVal + (targetNumber - startVal) * ease);
      setDisplayValue(current);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setDisplayValue(targetNumber);
      }
    };

    animId = requestAnimationFrame(step);
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [hasStarted, targetNumber, duration]);

  if (targetNumber === null) {
    return <span ref={containerRef}>{value}</span>;
  }

  return (
    <span ref={containerRef} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}
      {hasStarted ? displayValue : 0}
      {suffix}
    </span>
  );
}

