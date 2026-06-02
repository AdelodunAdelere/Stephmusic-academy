import { motion } from 'framer-motion';

const PLANS = [
  {
    name: 'Starter',
    badge: 'For beginners',
    price: '25,000',
    period: '/month',
    color: '#3B82F6',
    desc: 'Perfect if you\'re just starting your musical journey and want to explore at a relaxed pace.',
    features: [
      '4 lessons per month (weekly)',
      '45-minute sessions',
      '1 instrument / discipline',
      'Beginner track curriculum',
      'Progress reports',
      'Access to student community',
    ],
    cta: 'Start with Starter',
    highlighted: false,
  },
  {
    name: 'Growth',
    badge: 'Most popular',
    price: '42,000',
    period: '/month',
    color: '#FFFFFF',
    desc: 'The most popular plan for serious students who want faster progress and deeper immersion.',
    features: [
      '8 lessons per month (twice weekly)',
      '60-minute sessions',
      '1 instrument + music theory',
      'Intermediate/Advanced curriculum',
      'Monthly tutor feedback report',
      'Priority scheduling',
      'Recital opportunities',
      'Online & in-studio options',
    ],
    cta: 'Get Growth Plan',
    highlighted: true,
  },
  {
    name: 'Elite',
    badge: 'Maximum results',
    price: '72,000',
    period: '/month',
    color: '#8B5CF6',
    desc: 'For dedicated students and aspiring professionals who demand the very best in personalised instruction.',
    features: [
      '12 lessons per month (3× weekly)',
      '60–90 minute sessions',
      '2 instruments or disciplines',
      'Fully bespoke curriculum',
      'Weekly 1-on-1 feedback sessions',
      'Exam preparation support',
      'Performance coaching',
      'Recording studio access',
    ],
    cta: 'Go Elite',
    highlighted: false,
  },
];

const FAQ = [
  { q: 'Are prices fixed or negotiable?', a: 'The prices above are our standard rates. Group discounts and sibling discounts are available — please contact us for details.' },
  { q: 'Is there a registration fee?', a: 'Yes, a one-time ₦5,000 registration and assessment fee applies when you first join. This covers your initial skill assessment and curriculum design.' },
  { q: 'What payment methods do you accept?', a: 'We accept bank transfers, card payments, and mobile payments (Opay, Palmpay). Monthly invoices are sent in advance.' },
  { q: 'Can I pause or cancel my subscription?', a: 'Yes. You can pause lessons for up to 30 days per year at no extra charge. Cancellations require 14 days\' notice.' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function PricingPage() {
  return (
    <>
      <style>{`
        .pricing-page { font-family: 'Inter', sans-serif; }
        .pricing-hero {
          background: #030A18; padding: 160px 24px 80px;
          text-align: center; position: relative; overflow: hidden;
        }
        .pricing-hero-orb {
          position: absolute; width: 600px; height: 600px;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 65%);
          pointer-events: none;
        }
        .pricing-hero-content { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
        .pricing-hero h1 {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 1.1;
          color: #fff; margin: 16px 0 20px;
        }
        .pricing-hero p {
          font-size: 1.05rem; color: rgba(255,255,255,0.5); line-height: 1.75;
        }

        /* Plans */
        .pricing-body { background: #F8FAFC; padding: 72px 24px; }
        .pricing-grid {
          max-width: 1100px; margin: 0 auto 64px;
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 20px; align-items: start;
        }
        .plan-card {
          border-radius: 24px;
          padding: 36px 32px;
          border: 1px solid rgba(15,23,42,0.08);
          background: #fff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06);
          position: relative; overflow: hidden;
          transition: all 0.3s;
        }
        .plan-card:hover { transform: translateY(-4px); }
        .plan-card.highlighted {
          background: #1E40AF;
          border-color: transparent;
          box-shadow: 0 8px 40px rgba(37,99,235,0.4);
          transform: scale(1.03);
        }
        .plan-badge {
          display: inline-block; padding: 4px 12px; border-radius: 100px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.04em;
          margin-bottom: 20px;
        }
        .plan-name {
          font-size: 1.25rem; font-weight: 800; margin-bottom: 8px;
          color: #0F172A; letter-spacing: -0.015em;
        }
        .plan-card.highlighted .plan-name { color: #fff; }
        .plan-desc {
          font-size: 0.85rem; color: #64748B; line-height: 1.65; margin-bottom: 24px;
        }
        .plan-card.highlighted .plan-desc { color: rgba(255,255,255,0.6); }

        .plan-price-wrap { display: flex; align-items: baseline; gap: 4px; margin-bottom: 24px; }
        .plan-currency { font-size: 1.2rem; font-weight: 700; color: #64748B; }
        .plan-card.highlighted .plan-currency { color: rgba(255,255,255,0.7); }
        .plan-amount {
          font-size: 2.6rem; font-weight: 800; letter-spacing: -0.03em; color: #0F172A; line-height: 1;
        }
        .plan-card.highlighted .plan-amount { color: #fff; }
        .plan-period { font-size: 0.85rem; color: #94A3B8; }
        .plan-card.highlighted .plan-period { color: rgba(255,255,255,0.5); }

        .plan-divider { height: 1px; background: rgba(15,23,42,0.07); margin: 20px 0; }
        .plan-card.highlighted .plan-divider { background: rgba(255,255,255,0.12); }

        .plan-features { display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
        .plan-feature {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.85rem; color: #475569; line-height: 1.4;
        }
        .plan-card.highlighted .plan-feature { color: rgba(255,255,255,0.75); }
        .plan-check {
          width: 18px; height: 18px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.65rem; color: #fff; flex-shrink: 0; margin-top: 1px;
        }

        .plan-cta {
          display: block; width: 100%; text-align: center;
          padding: 13px; border-radius: 12px;
          font-size: 0.92rem; font-weight: 700;
          font-family: 'Inter', sans-serif; cursor: pointer;
          transition: all 0.2s; text-decoration: none;
        }
        .plan-cta-light {
          background: #EFF6FF; color: #2563EB; border: 1.5px solid #BFDBFE;
        }
        .plan-cta-light:hover { background: #DBEAFE; }
        .plan-cta-dark {
          background: #fff; color: #1E40AF;
        }
        .plan-cta-dark:hover { background: #F0F7FF; }

        /* FAQ */
        .pricing-faq { max-width: 720px; margin: 0 auto; }
        .pricing-faq-title {
          font-size: 1.4rem; font-weight: 700; color: #0F172A; margin-bottom: 28px;
          letter-spacing: -0.015em;
        }
        .pf-item {
          border-bottom: 1px solid rgba(15,23,42,0.07); padding: 20px 0;
        }
        .pf-q { font-size: 0.95rem; font-weight: 600; color: #0F172A; margin-bottom: 8px; }
        .pf-a { font-size: 0.875rem; color: #64748B; line-height: 1.7; }

        /* Contact note */
        .pricing-note {
          max-width: 1100px; margin: 48px auto 0;
          background: #fff; border: 1px solid rgba(15,23,42,0.07);
          border-radius: 16px; padding: 24px 32px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .pricing-note-text { font-size: 0.92rem; font-weight: 600; color: #0F172A; }
        .pricing-note-sub { font-size: 0.82rem; color: #64748B; margin-top: 2px; }

        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr; }
          .plan-card.highlighted { transform: none; }
        }
        @media (max-width: 480px) {
          .pricing-body { padding: 48px 16px; }
          .plan-card { padding: 28px 24px; }
          .pricing-note { padding: 20px; }
        }
      `}</style>

      <div className="pricing-page">
        {/* Hero */}
        <div className="pricing-hero">
          <div className="pricing-hero-orb" />
          <motion.div
            className="pricing-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge badge-dark badge-dot">Pricing</span>
            <h1>Simple,<br />transparent pricing</h1>
            <p>No hidden fees. No surprise charges. Choose the plan that fits your pace and budget.</p>
          </motion.div>
        </div>

        {/* Plans */}
        <div className="pricing-body">
          <motion.div
            className="pricing-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {PLANS.map((plan) => (
              <motion.div
                key={plan.name}
                className={`plan-card ${plan.highlighted ? 'highlighted' : ''}`}
                variants={cardVariants}
              >
                <div
                  className="plan-badge"
                  style={plan.highlighted
                    ? { background: 'rgba(255,255,255,0.15)', color: '#fff' }
                    : { background: `${plan.color}15`, color: plan.color }
                  }
                >
                  {plan.badge}
                </div>
                <div className="plan-name">{plan.name}</div>
                <p className="plan-desc">{plan.desc}</p>

                <div className="plan-price-wrap">
                  <span className="plan-currency">₦</span>
                  <span className="plan-amount">{plan.price}</span>
                  <span className="plan-period">{plan.period}</span>
                </div>

                <div className="plan-divider" />

                <div className="plan-features">
                  {plan.features.map((f) => (
                    <div className="plan-feature" key={f}>
                      <div
                        className="plan-check"
                        style={{ background: plan.highlighted ? 'rgba(255,255,255,0.25)' : plan.color }}
                      >✓</div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/#register"
                  className={`plan-cta ${plan.highlighted ? 'plan-cta-dark' : 'plan-cta-light'}`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact note */}
          <div className="pricing-note">
            <div>
              <div className="pricing-note-text">Need a custom plan or group discount?</div>
              <div className="pricing-note-sub">We offer sibling discounts, group sessions, and tailored corporate packages.</div>
            </div>
            <a href="/#contact" className="btn btn-primary">Contact Us →</a>
          </div>

          {/* FAQ */}
          <div style={{ paddingTop: 72 }}>
            <div className="pricing-faq">
              <div className="pricing-faq-title">Pricing FAQs</div>
              {FAQ.map((item) => (
                <div className="pf-item" key={item.q}>
                  <div className="pf-q">{item.q}</div>
                  <div className="pf-a">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
