import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: 'Williams Jade',
    role: 'Piano Student',
    initials: 'WJ',
    color: '#3B82F6',
    stars: 5,
    text: 'Stephmusic Academy completely transformed my relationship with music. The instructors are patient, encouraging, and genuinely world-class. I went from zero to performing in six months.',
  },
  {
    name: 'Bunmi Akintola',
    role: 'Vocal Coaching',
    initials: 'BA',
    color: '#8B5CF6',
    stars: 5,
    text: 'Best investment I\'ve made in myself. The vocal coaching sessions are deeply personalised and the progress I\'ve made in breath control and pitch is incredible.',
  },
  {
    name: 'Shonibare Tolu',
    role: 'Guitar Classes',
    initials: 'ST',
    color: '#10B981',
    stars: 5,
    text: 'The environment is warm, professional, and inspiring. My instructor pushed me in just the right ways. I am now performing at live events — something I never imagined possible!',
  },
  {
    name: 'Bukola Kushimo',
    role: 'Music Production',
    initials: 'BK',
    color: '#F59E0B',
    stars: 5,
    text: 'The music production program is phenomenal. Industry-standard tools, real feedback, and a supportive community. I\'ve already released my first EP using what I learned here.',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FBBF24">
          <path d="M7 1l1.6 3.3L12 4.8 9.5 7.2l.6 3.4L7 9l-3.1 1.6.6-3.4L2 4.8l3.4-.5L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

const QuoteIcon = () => (
  <svg width="28" height="22" viewBox="0 0 28 22" fill="none" style={{ opacity: 0.15, flexShrink: 0 }}>
    <path d="M0 22V13.6C0 6.08 4.08 1.84 12.24 0L13.44 2.4C9.36 3.52 7.44 5.92 6.96 10H11.52V22H0ZM16.48 22V13.6C16.48 6.08 20.56 1.84 28.72 0L29.92 2.4C25.84 3.52 23.92 5.92 23.44 10H28V22H16.48Z" fill="currentColor"/>
  </svg>
);

export default function Testimonials() {
  return (
    <>
      <style>{`
        .testimonials-section {
          padding: 100px 24px;
          background: #0F172A;
          font-family: 'Inter', sans-serif;
          position: relative; overflow: hidden;
        }
        .t-orb-1 {
          position: absolute; width: 500px; height: 500px;
          top: -150px; right: -150px;
          background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .t-orb-2 {
          position: absolute; width: 400px; height: 400px;
          bottom: -100px; left: -100px;
          background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .t-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
        .t-header { text-align: center; margin-bottom: 60px; }
        .t-header h2 {
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800; letter-spacing: -0.025em; line-height: 1.15;
          color: #fff; margin: 16px 0 18px;
        }
        .t-header p { font-size: 1rem; color: rgba(255,255,255,0.45); max-width: 460px; margin: 0 auto; line-height: 1.7; }

        .t-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .t-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px;
          position: relative; overflow: hidden;
          transition: border-color 0.3s, background 0.3s;
          display: flex; flex-direction: column; gap: 20px;
        }
        .t-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.12);
        }
        .t-card-top {
          display: flex; align-items: flex-start; justify-content: space-between;
        }
        .t-avatar {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 0.85rem; font-weight: 700;
          flex-shrink: 0;
        }
        .t-author-name { font-weight: 700; font-size: 0.92rem; color: #fff; margin-bottom: 2px; }
        .t-author-role { font-size: 0.76rem; color: rgba(255,255,255,0.4); }
        .t-text {
          font-size: 0.9rem; color: rgba(255,255,255,0.65);
          line-height: 1.78; flex: 1;
        }
        .t-quote-icon { color: rgba(255,255,255,1); }

        /* Highlight card */
        .t-card.featured {
          background: #2563EB;
          border-color: transparent;
        }
        .t-card.featured .t-text { color: rgba(255,255,255,0.85); }
        .t-card.featured .t-author-name { color: #fff; }
        .t-card.featured .t-author-role { color: rgba(255,255,255,0.6); }

        /* Rating strip */
        .t-rating-strip {
          margin-top: 56px; padding: 28px 40px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
        }
        .t-strip-text { color: rgba(255,255,255,0.5); font-size: 0.88rem; }
        .t-strip-stars { display: flex; gap: 4px; }
        .t-strip-score {
          font-size: 2rem; font-weight: 800; color: #fff; line-height: 1;
        }
        .t-strip-right { text-align: right; }
        .t-strip-label { font-size: 0.75rem; color: rgba(255,255,255,0.4); margin-top: 2px; }

        @media (max-width: 768px) {
          .testimonials-section { padding: 72px 16px; }
          .t-grid { grid-template-columns: 1fr; }
          .t-rating-strip { padding: 20px 24px; }
        }
      `}</style>

      <section id="testimonials" className="testimonials-section">
        <div className="t-orb-1" /><div className="t-orb-2" />

        <div className="t-inner">
          <div className="t-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge badge-dark badge-dot">Student Stories</span>
              <h2>Loved by students<br />across Nigeria</h2>
              <p>Real words from real musicians who found their voice at Stephmusic Academy.</p>
            </motion.div>
          </div>

          <motion.div
            className="t-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                className={`t-card ${i === 1 ? 'featured' : ''}`}
                variants={cardVariants}
              >
                <div className="t-card-top">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="t-avatar" style={{ background: i === 1 ? 'rgba(255,255,255,0.2)' : t.color }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="t-author-name">{t.name}</div>
                      <div className="t-author-role">{t.role}</div>
                    </div>
                  </div>
                  <div className="t-quote-icon"><QuoteIcon /></div>
                </div>

                <p className="t-text">"{t.text}"</p>

                <Stars count={t.stars} />
              </motion.div>
            ))}
          </motion.div>

          {/* Rating strip */}
          <motion.div
            className="t-rating-strip"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="t-strip-text">Join 500+ students who already love us</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="t-strip-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 14 14" fill="#FBBF24">
                    <path d="M7 1l1.6 3.3L12 4.8 9.5 7.2l.6 3.4L7 9l-3.1 1.6.6-3.4L2 4.8l3.4-.5L7 1z"/>
                  </svg>
                ))}
              </div>
            </div>
            <div className="t-strip-right">
              <div className="t-strip-score">4.9</div>
              <div className="t-strip-label">Average Rating</div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
