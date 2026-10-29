import React, { useEffect, useState } from 'react';

export default function WelcomeOverlay() {
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState('entering'); // 'entering' -> 'active' -> 'zooming'

  useEffect(() => {
    // 1. Enter and stay centered
    const timerActive = setTimeout(() => {
      setStage('active');
    }, 600);

    // 2. Animate "Hello" expanding / plunging into the landing page
    const timerZoom = setTimeout(() => {
      setStage('zooming');
    }, 1500);

    // 3. Fully unmount after transition completes
    const timerComplete = setTimeout(() => {
      setVisible(false);
    }, 2400);

    return () => {
      clearTimeout(timerActive);
      clearTimeout(timerZoom);
      clearTimeout(timerComplete);
    };
  }, []);

  const handleDismiss = () => {
    if (stage === 'zooming') return;
    setStage('zooming');
    setTimeout(() => {
      setVisible(false);
    }, 900);
  };

  if (!visible) return null;

  const isZooming = stage === 'zooming';

  return (
    <div
      onClick={handleDismiss}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#050608',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
        pointerEvents: isZooming ? 'none' : 'auto',
        transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.9s ease',
        opacity: isZooming ? 0 : 1
      }}
    >
      {/* Hello text with cinema zoom & dive-in effect into landing page */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4.5rem, 13vw, 9.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          margin: 0,
          color: '#ffffff',
          lineHeight: 1,
          userSelect: 'none',
          textAlign: 'center',
          willChange: 'transform, opacity, filter',
          transform: isZooming
            ? 'scale(2.8) translateY(-40px)'
            : stage === 'entering'
            ? 'scale(0.85) translateY(20px)'
            : 'scale(1) translateY(0)',
          opacity: isZooming ? 0 : stage === 'entering' ? 0 : 1,
          filter: isZooming
            ? 'blur(24px) drop-shadow(0 0 60px rgba(255,255,255,0.8))'
            : stage === 'entering'
            ? 'blur(12px)'
            : 'blur(0px) drop-shadow(0 15px 40px rgba(255,255,255,0.18))',
          transition: isZooming
            ? 'transform 0.95s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.95s ease'
            : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s ease, filter 0.65s ease'
        }}
      >
        Hello
      </h1>
    </div>
  );
}
