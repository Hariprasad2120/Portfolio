import React, { useState } from 'react';
import { Terminal, Play, CheckCircle2, CreditCard, RefreshCw, Layers, ShieldCheck, Database, ShoppingCart, Award } from 'lucide-react';

export default function InteractivePlayground() {
  const [activeTab, setActiveTab] = useState('lms');

  // LMS simulator state
  const [selectedCourse, setSelectedCourse] = useState('export-import-pro');
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentStep, setPaymentStep] = useState('cart'); // 'cart', 'processing', 'completed'
  const [simulatedTxId, setSimulatedTxId] = useState('');

  // ERP pipeline simulator state
  const [shipmentStatus, setShipmentStatus] = useState('Lead Received');
  const [cargoWeight, setCargoWeight] = useState(450);
  const [customsPort, setCustomsPort] = useState('Chennai Sea Port (INMAA1)');

  const courses = [
    { id: 'export-import-pro', title: 'Global Export-Import Masterclass 2026', seatsLeft: 4, price: 4999 },
    { id: 'customs-compliance', title: 'Customs Clearance & HS Code Auditing', seatsLeft: 2, price: 3499 },
    { id: 'freight-logistics', title: 'Ocean & Air Freight Forwarding Operations', seatsLeft: 7, price: 3999 }
  ];

  const currentCourse = courses.find(c => c.id === selectedCourse) || courses[0];
  const finalPrice = discountApplied ? Math.round(currentCourse.price * 0.8) : currentCourse.price;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'HARIPRASAD20' || couponCode.trim().toUpperCase() === 'GROWTH') {
      setDiscountApplied(true);
    } else {
      alert("Try entering coupon code: HARIPRASAD20 for 20% off");
    }
  };

  const handleSimulatePayment = () => {
    setPaymentStep('processing');
    setTimeout(() => {
      const tx = 'pay_' + Math.random().toString(36).substring(2, 10).toUpperCase();
      setSimulatedTxId(tx);
      setPaymentStep('completed');
    }, 1200);
  };

  const handleResetLms = () => {
    setPaymentStep('cart');
    setDiscountApplied(false);
    setCouponCode('');
  };

  return (
    <section id="playground" className="section-wrapper" style={{ borderTop: '1px solid var(--border-dim)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header-block">
          <h2 className="huge-section-heading">
            PLAYGROUND
          </h2>
          <p className="section-desc">
            Test simulated components of Hariprasad's production platforms — from Razorpay LMS checkout to modular ERP pipeline telemetry.
          </p>
        </div>

        {/* Sandbox Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2.5rem'
          }}
        >
          <button
            onClick={() => setActiveTab('lms')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem',
              fontWeight: 600,
              padding: '0.65rem 1.4rem',
              borderRadius: '9999px',
              cursor: 'pointer',
              background: activeTab === 'lms' ? 'var(--accent)' : 'rgba(255, 255, 255, 0.04)',
              color: activeTab === 'lms' ? '#080808' : 'var(--text-dim)',
              border: activeTab === 'lms' ? '1px solid #fff' : '1px solid var(--border-dim)',
              transition: 'all 0.2s ease'
            }}
          >
            <CreditCard size={16} />
            <span>Dubash LMS Checkout & Invoicing Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('erp')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem',
              fontWeight: 600,
              padding: '0.65rem 1.4rem',
              borderRadius: '9999px',
              cursor: 'pointer',
              background: activeTab === 'erp' ? 'var(--accent)' : 'rgba(255, 255, 255, 0.04)',
              color: activeTab === 'erp' ? '#080808' : 'var(--text-dim)',
              border: activeTab === 'erp' ? '1px solid #fff' : '1px solid var(--border-dim)',
              transition: 'all 0.2s ease'
            }}
          >
            <Layers size={16} />
            <span>Monolith ERP Customs & CRM Pipeline</span>
          </button>
        </div>

        {/* Tab 1: LMS Checkout Simulator */}
        {activeTab === 'lms' && (
          <div
            className="glass-card"
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              padding: '2.5rem',
              border: '1px solid var(--border-dim)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-dim)',
                paddingBottom: '1.25rem',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--text-highlight)',
                    marginBottom: '0.25rem'
                  }}
                >
                  Live Checkout & Razorpay Webhook Verifier
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-dim)' }}>
                  Simulates the Next.js API route handling cart reservation, coupon calculation, and SHA256 signature verification.
                </p>
              </div>

              <button
                onClick={handleResetLms}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-dim)',
                  cursor: 'pointer',
                  fontSize: '0.82rem'
                }}
              >
                <RefreshCw size={14} />
                <span>Reset</span>
              </button>
            </div>

            {paymentStep !== 'completed' ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2rem'
                }}
              >
                {/* Course Selection */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                      marginBottom: '0.65rem'
                    }}
                  >
                    1. Select Cohort Course
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {courses.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => setSelectedCourse(c.id)}
                        style={{
                          padding: '0.85rem 1rem',
                          borderRadius: '10px',
                          border: selectedCourse === c.id ? '1px solid var(--accent)' : '1px solid var(--border-dim)',
                          background: selectedCourse === c.id ? 'rgba(232, 228, 220, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#fff', marginBottom: '0.2rem' }}>
                            {c.title}
                          </div>
                          <span className="pill pill-glow" style={{ fontSize: '0.7rem' }}>
                            {c.seatsLeft} seats left in batch
                          </span>
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent)' }}>
                          ₹{c.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checkout Summary */}
                <div
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(0, 0, 0, 0.35)',
                    borderRadius: '14px',
                    border: '1px solid var(--border-dim)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '1rem' }}>
                      Order Summary
                    </h4>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                      <span style={{ color: 'var(--text-dim)' }}>Base Tuition</span>
                      <span style={{ color: '#fff' }}>₹{currentCourse.price}</span>
                    </div>

                    {discountApplied && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.6rem', color: '#10b981' }}>
                        <span>Promo Code (20% OFF)</span>
                        <span>-₹{Math.round(currentCourse.price * 0.2)}</span>
                      </div>
                    )}

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        borderTop: '1px solid var(--border-dim)',
                        paddingTop: '0.75rem',
                        marginTop: '0.75rem',
                        marginBottom: '1.25rem'
                      }}
                    >
                      <span>Total Amount</span>
                      <span>₹{finalPrice}</span>
                    </div>

                    {/* Coupon Input */}
                    <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      <input
                        type="text"
                        placeholder="Coupon: HARIPRASAD20"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        style={{
                          flex: 1,
                          padding: '0.55rem 0.85rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-dim)',
                          borderRadius: '8px',
                          color: '#fff',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.82rem'
                        }}
                      />
                      <button
                        type="submit"
                        className="btn-secondary"
                        style={{ padding: '0.55rem 1rem', fontSize: '0.82rem', borderRadius: '8px' }}
                      >
                        Apply
                      </button>
                    </form>
                  </div>

                  <button
                    onClick={handleSimulatePayment}
                    disabled={paymentStep === 'processing'}
                    className="btn-primary"
                    style={{ width: '100%', padding: '0.85rem' }}
                  >
                    {paymentStep === 'processing' ? (
                      <span>Verifying Razorpay Signature...</span>
                    ) : (
                      <>
                        <ShieldCheck size={18} />
                        <span>Simulate Razorpay Payment (₹{finalPrice})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              /* Payment Success Screen */
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid #10b981',
                    color: '#10b981',
                    marginBottom: '1.25rem'
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  Enrollment & Payment Confirmed!
                </h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
                  Next.js webhook received signature match. Generated seat reservation, created student dashboard credentials, and dispatched transactional OTP email.
                </p>

                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-dim)',
                    borderRadius: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    color: 'var(--accent)',
                    marginBottom: '1.75rem'
                  }}
                >
                  Transaction Ref: {simulatedTxId} • Invoice: INV-2026-DUBASH-089
                </div>

                <div>
                  <button onClick={handleResetLms} className="btn-secondary">
                    <span>Try Another Simulation</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Monolith ERP Pipeline Simulator */}
        {activeTab === 'erp' && (
          <div
            className="glass-card"
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              padding: '2.5rem',
              border: '1px solid var(--border-dim)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-dim)',
                paddingBottom: '1.25rem',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--text-highlight)',
                    marginBottom: '0.25rem'
                  }}
                >
                  Monolith Engine: Freight Logistics & Customs Pipeline
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-dim)' }}>
                  Interactive state machine demonstrating role-based transitions across CRM, Customs Clearance, and Dispatch modules.
                </p>
              </div>
            </div>

            {/* Pipeline Stage Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.5rem',
                marginBottom: '2rem'
              }}
            >
              {['Lead Received', 'Customs Auditing', 'Duty Paid & Assessed', 'Cargo Dispatched'].map((stage, idx) => {
                const isCurrent = shipmentStatus === stage;
                const stages = ['Lead Received', 'Customs Auditing', 'Duty Paid & Assessed', 'Cargo Dispatched'];
                const isPassed = stages.indexOf(shipmentStatus) >= idx;

                return (
                  <div
                    key={stage}
                    onClick={() => setShipmentStatus(stage)}
                    style={{
                      padding: '0.85rem 0.5rem',
                      textAlign: 'center',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      background: isCurrent ? 'rgba(232, 228, 220, 0.15)' : isPassed ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                      border: isCurrent ? '1px solid var(--accent)' : isPassed ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-dim)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: isPassed ? '#10b981' : 'var(--text-muted)' }}>
                      STAGE 0{idx + 1}
                    </div>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: isCurrent ? '#fff' : isPassed ? '#34d399' : 'var(--text-dim)', marginTop: '0.2rem' }}>
                      {stage}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ERP Interactive Controls */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.75rem',
                padding: '1.5rem',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '12px',
                border: '1px solid var(--border-dim)'
              }}
            >
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                  Designated Customs Port:
                </label>
                <select
                  value={customsPort}
                  onChange={(e) => setCustomsPort(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-dim)',
                    borderRadius: '8px',
                    color: '#fff',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem'
                  }}
                >
                  <option value="Chennai Sea Port (INMAA1)" style={{ background: '#111' }}>Chennai Sea Port (INMAA1)</option>
                  <option value="Nhava Sheva JNPT (INNSA1)" style={{ background: '#111' }}>Nhava Sheva JNPT (INNSA1)</option>
                  <option value="Tuticorin Port (INTUT1)" style={{ background: '#111' }}>Tuticorin Port (INTUT1)</option>
                </select>

                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '0.5rem' }}>
                  Container Net Cargo Weight: <strong style={{ color: '#fff' }}>{cargoWeight} MT</strong>
                </label>
                <input
                  type="range"
                  min="50"
                  max="1200"
                  step="50"
                  value={cargoWeight}
                  onChange={(e) => setCargoWeight(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--accent)' }}
                />
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Prisma DB Normalized Record:
                </div>
                <div
                  style={{
                    padding: '0.85rem',
                    background: 'rgba(0,0,0,0.5)',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: '#94a3b8',
                    lineHeight: 1.6
                  }}
                >
                  <div>status: <span style={{ color: '#38bdf8' }}>"{shipmentStatus}"</span></div>
                  <div>portOfEntry: <span style={{ color: '#e5b869' }}>"{customsPort}"</span></div>
                  <div>cargoMetricTons: <span style={{ color: '#10b981' }}>{cargoWeight}</span></div>
                  <div>estimatedDutyINR: <span style={{ color: '#f8fafc' }}>₹{(cargoWeight * 240).toLocaleString()}</span></div>
                  <div>typeSafeChecked: <span style={{ color: '#10b981' }}>true</span></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
