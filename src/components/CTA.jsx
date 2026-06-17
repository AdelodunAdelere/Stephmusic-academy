import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <>
      <style>{`
        .cta-section {
          padding: 100px 24px;
          background: #030A18;
          font-family: 'Inter', sans-serif;
          position: relative; overflow: hidden;
          text-align: center;
        }
        .cta-orb-1 {
          position: absolute; width: 600px; height: 600px;
          top: 50%; left: 50%; transform: translate(-50%,-50%);
          background: radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-orb-2 {
          position: absolute; width: 400px; height: 400px;
          top: -80px; right: -80px;
          background: radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-content {
          position: relative; z-index: 1;
          max-width: 680px; margin: 0 auto;
        }
        .cta-content h2 {
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 1.1;
          color: #fff; margin-bottom: 20px;
        }
        .cta-content h2 .cta-gradient {
          background: linear-gradient(135deg, #60A5FA, #818CF8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-content p {
          font-size: 1.05rem; color: rgba(255,255,255,0.45);
          line-height: 1.75; margin-bottom: 40px;
          max-width: 520px; margin-left: auto; margin-right: auto;
        }
        .cta-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 14px; flex-wrap: wrap;
        }

        /* Trust badges */
        .cta-trust {
          margin-top: 52px; padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: center;
          gap: 32px; flex-wrap: wrap;
        }
        .trust-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.8rem; color: rgba(255,255,255,0.35);
          font-weight: 500;
        }
        .trust-icon { font-size: 1rem; }

        @media (max-width: 600px) {
          .cta-section { padding: 72px 16px; }
          .cta-trust { gap: 20px; }
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-orb-1" />
        <div className="cta-orb-2" />

        <div className="cta-content">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2>
              Ready to start your<br />
              <span className="cta-gradient">musical journey?</span>
            </h2>
            <p>
              Join hundreds of passionate students who have already discovered their musical voice
              at Stephmusic Academy. Enrolment for the 2025/2026 session is now open.
            </p>
            <div className="cta-btns">
              <a href="#register" className="btn btn-primary btn-lg">Register Today →</a>
              <a href="#contact"  className="btn btn-ghost-white btn-lg">Talk to Us First</a>
            </div>
          </motion.div>

          <motion.div
            className="cta-trust"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="trust-item"><span className="trust-icon">✓</span> No experience required</div>
            <div className="trust-item"><span className="trust-icon">✓</span> Flexible scheduling</div>
            <div className="trust-item"><span className="trust-icon">✓</span> Expert instructors</div>
            <div className="trust-item"><span className="trust-icon">✓</span> In-studio &amp; online</div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
