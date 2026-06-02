import { useState } from 'react';
import { motion } from 'framer-motion';

const CONTACT_ITEMS = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+234 807 080 3041',
    sub: '+234 816 980 3046',
    href: 'tel:+2348070803041',
    color: '#3B82F6',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'info@stephmusicacademy.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@stephmusicacademy.com',
    color: '#8B5CF6',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Lagos, Nigeria',
    sub: 'In-studio & Online lessons',
    href: null,
    color: '#10B981',
  },
  {
    icon: '🕐',
    label: 'Hours',
    value: 'Mon – Sat, 9am – 6pm',
    sub: 'WAT (West Africa Time)',
    href: null,
    color: '#F59E0B',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const mailtoLink =
      `mailto:leredelodun@gmail.com` +
      `?subject=${encodeURIComponent(form.subject || `Message from ${form.name}`)}` +
      `&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 600);
  };

  return (
    <>
      <style>{`
        .contact-section {
          padding: 100px 24px;
          background: #F8FAFC;
          font-family: 'Inter', sans-serif;
        }
        .contact-inner {
          max-width: 1100px; margin: 0 auto;
        }
        .contact-header { margin-bottom: 60px; }
        .contact-header h2 {
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800; letter-spacing: -0.025em; line-height: 1.15;
          color: #0F172A; margin: 16px 0 18px;
        }
        .contact-header p {
          font-size: 1rem; color: #64748B; max-width: 480px; line-height: 1.75;
        }
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.6fr;
          gap: 48px; align-items: start;
        }

        /* Info cards */
        .contact-info-grid {
          display: grid; grid-template-columns: 1fr;
          gap: 14px;
        }
        .contact-info-card {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 20px 22px;
          background: #fff;
          border: 1px solid rgba(15,23,42,0.07);
          border-radius: 16px;
          transition: box-shadow 0.2s, border-color 0.2s;
          text-decoration: none;
        }
        a.contact-info-card:hover {
          border-color: rgba(37,99,235,0.2);
          box-shadow: 0 4px 20px rgba(37,99,235,0.1);
        }
        .c-icon {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0;
        }
        .c-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #94A3B8; margin-bottom: 3px; }
        .c-value { font-size: 0.9rem; font-weight: 600; color: #0F172A; line-height: 1.3; }
        .c-sub   { font-size: 0.75rem; color: #94A3B8; margin-top: 1px; }

        /* Social links */
        .contact-social {
          display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap;
        }
        .social-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 16px; border-radius: 10px;
          border: 1px solid rgba(15,23,42,0.1);
          background: #fff; color: #374151;
          font-size: 0.8rem; font-weight: 600;
          text-decoration: none; transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .social-btn:hover {
          border-color: #2563EB; color: #2563EB; background: #EFF6FF;
          transform: translateY(-1px);
        }

        /* Form */
        .contact-form-box {
          background: #fff;
          border-radius: 24px;
          padding: 40px;
          border: 1px solid rgba(15,23,42,0.07);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.07);
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { margin-bottom: 18px; }
        .contact-submit {
          width: 100%;
          background: linear-gradient(135deg, #2563EB, #4F46E5);
          color: #fff; border: none;
          padding: 14px; border-radius: 12px;
          font-size: 0.95rem; font-weight: 700;
          font-family: 'Inter', sans-serif; cursor: pointer;
          transition: all 0.2s; letter-spacing: 0.01em;
          position: relative; overflow: hidden;
          margin-top: 4px;
        }
        .contact-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,99,235,0.38);
        }
        .contact-submit:disabled { opacity: 0.7; cursor: not-allowed; }
        .success-banner {
          display: flex; align-items: center; gap: 10px;
          background: #ECFDF5; border: 1px solid #A7F3D0;
          border-radius: 10px; padding: 14px 18px;
          font-size: 0.88rem; font-weight: 600; color: #065F46;
          margin-top: 14px;
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-info-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .contact-section { padding: 72px 16px; }
          .contact-form-box { padding: 28px 22px; }
          .form-row { grid-template-columns: 1fr; }
          .contact-info-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="contact-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Contact Us</span>
              <h2>Let's start a<br />conversation</h2>
              <p>Have a question about our programs? Ready to book a trial lesson? We're here to help.</p>
            </motion.div>
          </div>

          <div className="contact-grid">
            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-info-grid">
                {CONTACT_ITEMS.map((item) => {
                  const Wrapper = item.href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={item.label}
                      className="contact-info-card"
                      {...(item.href ? { href: item.href } : {})}
                    >
                      <div className="c-icon" style={{ background: `${item.color}18` }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="c-label">{item.label}</div>
                        <div className="c-value">{item.value}</div>
                        <div className="c-sub">{item.sub}</div>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <div className="contact-social">
                <a href="https://www.instagram.com/stephmusicng" className="social-btn" target="_blank" rel="noopener noreferrer">
                  📸 Instagram
                </a>
                <a href="https://www.youtube.com/@ferefolu" className="social-btn" target="_blank" rel="noopener noreferrer">
                  ▶️ YouTube
                </a>
                <a href="#" className="social-btn">📘 Facebook</a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="contact-form-box">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="input-label">Your Name</label>
                      <input
                        className="input-field"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="input-label">Email Address</label>
                      <input
                        className="input-field"
                        type="email"
                        placeholder="john@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="input-label">Subject</label>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="e.g. Enquiry about piano lessons"
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="input-label">Message</label>
                    <textarea
                      className="input-field"
                      placeholder="Tell us how we can help..."
                      rows={5}
                      style={{ resize: 'vertical', minHeight: '120px' }}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="contact-submit" disabled={loading}>
                    {loading ? 'Sending…' : 'Send Message →'}
                  </button>
                  {sent && (
                    <div className="success-banner">
                      ✅ Message sent! We'll be in touch shortly.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
