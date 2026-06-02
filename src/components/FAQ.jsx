import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    q: 'Do I need prior music experience to enrol?',
    a: 'Not at all! We welcome complete beginners through to advanced musicians. During enrolment, we assess your current level and design a personalised curriculum suited to where you are and where you want to go.',
  },
  {
    q: 'How long are the lessons and how often do I attend?',
    a: 'Standard lessons are 45–60 minutes per session. Most students attend once or twice a week. We offer flexible scheduling including evenings and weekends to accommodate school, work, and family commitments.',
  },
  {
    q: 'What age groups do you teach?',
    a: 'We teach students of all ages — from children as young as 5 to adults. We tailor the teaching approach to suit different age groups, learning styles, and goals.',
  },
  {
    q: 'Do you offer online lessons?',
    a: 'Yes! We offer both in-studio and online sessions. Our online programme delivers the same quality instruction via video call, with resources, recordings, and feedback shared digitally.',
  },
  {
    q: 'What instruments and disciplines do you teach?',
    a: 'We currently teach Piano, Guitar (acoustic & electric), Drums & Percussion, Vocal Coaching, Violin & Strings, and Music Production. More disciplines are being added — follow us on social media for announcements.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'There is a one-time registration/assessment fee when you first join. Monthly tuition fees vary by instrument and lesson frequency. See our Pricing page for full details.',
  },
  {
    q: 'Will I get to perform publicly?',
    a: 'Absolutely. We host regular student recitals, concerts, and showcase events throughout the year. These events are completely optional but highly encouraged — they build confidence and celebrate your progress.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(15,23,42,0.07)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
          textAlign: 'left',
          gap: '16px',
        }}
        aria-expanded={isOpen}
      >
        <span style={{
          fontSize: '0.97rem',
          fontWeight: 600,
          color: isOpen ? '#2563EB' : '#0F172A',
          lineHeight: 1.4,
          transition: 'color 0.2s',
        }}>
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ flexShrink: 0 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 4v12M4 10h12"
              stroke={isOpen ? '#2563EB' : '#94A3B8'}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            <p style={{
              paddingBottom: '22px',
              fontSize: '0.9rem',
              color: '#64748B',
              lineHeight: 1.78,
              margin: 0,
              fontFamily: 'Inter, sans-serif',
            }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{`
        .faq-section {
          padding: 100px 24px;
          background: #fff;
          font-family: 'Inter', sans-serif;
        }
        .faq-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.4fr;
          gap: 80px; align-items: start;
        }
        .faq-left { position: sticky; top: 96px; }
        .faq-left h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800; letter-spacing: -0.025em; line-height: 1.2;
          color: #0F172A; margin: 16px 0 18px;
        }
        .faq-left p {
          font-size: 0.95rem; color: #64748B; line-height: 1.75; margin-bottom: 32px;
        }
        .faq-contact-card {
          background: #F8FAFC;
          border: 1px solid rgba(15,23,42,0.07);
          border-radius: 16px; padding: 24px;
        }
        .faq-contact-title { font-size: 0.88rem; font-weight: 700; color: #0F172A; margin-bottom: 8px; }
        .faq-contact-text { font-size: 0.8rem; color: #64748B; line-height: 1.6; margin-bottom: 16px; }

        @media (max-width: 900px) {
          .faq-inner { grid-template-columns: 1fr; gap: 48px; }
          .faq-left { position: static; }
        }
        @media (max-width: 480px) {
          .faq-section { padding: 72px 16px; }
        }
      `}</style>

      <section id="faq" className="faq-section">
        <div className="faq-inner">
          {/* Left panel */}
          <motion.div
            className="faq-left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">FAQ</span>
            <h2>Everything you<br />need to know</h2>
            <p>
              Got questions? We've got answers. If you can't find what you're looking for, reach out — we're always happy to help.
            </p>

            <div className="faq-contact-card">
              <div className="faq-contact-title">Still have questions?</div>
              <div className="faq-contact-text">
                Our team is available Mon–Sat, 9am–6pm WAT. We usually respond within a few hours.
              </div>
              <a href="#contact" className="btn btn-primary btn-sm">Ask Us Anything →</a>
            </div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {FAQS.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
