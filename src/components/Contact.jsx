import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const mailtoLink =
      `mailto:leredelodun@gmail.com` +
      `?subject=${encodeURIComponent(`Message from ${name || "visitor"}`)}` +
      `&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;

    window.location.href = mailtoLink;

    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        .contact-section {
          padding: 80px 40px;
          background: #fff;
          font-family: 'Poppins', sans-serif;
        }
        .contact-section h2 {
          text-align: center;
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 48px;
        }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 56px;
          max-width: 960px;
          margin: 0 auto;
          align-items: start;
        }
        .contact-info h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 20px;
        }
        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 20px;
        }
        .contact-icon {
          width: 44px; height: 44px;
          background: linear-gradient(135deg, #2196f3, #1565c0);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .contact-info-item p {
          margin: 0;
          color: #444;
          font-size: 0.88rem;
          line-height: 1.6;
        }
        .contact-info-item strong { color: #1a1a2e; }
        .contact-form-box {
          background: #f8fbff;
          border-radius: 20px;
          padding: 36px;
          border: 1.5px solid #e3f2fd;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-group {
          margin-bottom: 18px;
        }
        .form-group label {
          display: block;
          font-size: 0.82rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 6px;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 11px 16px;
          border: 1.5px solid #dde3ea;
          border-radius: 10px;
          font-size: 0.88rem;
          font-family: 'Poppins', sans-serif;
          color: #333;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
          outline: none;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #2196f3;
          box-shadow: 0 0 0 3px rgba(33,150,243,0.12);
        }
        .form-group textarea { resize: vertical; min-height: 110px; }
        .contact-submit {
          width: 100%;
          background: linear-gradient(90deg, #2196f3, #1565c0);
          color: #fff;
          border: none;
          padding: 13px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
          margin-top: 4px;
        }
        .contact-submit:hover { opacity: 0.9; transform: translateY(-1px); }
        .success-msg {
          text-align: center;
          color: #2196f3;
          font-weight: 600;
          font-size: 0.9rem;
          margin-top: 12px;
        }

        @media (max-width: 768px) {
          .contact-section { padding: 60px 20px; }
          .contact-inner { grid-template-columns: 1fr; gap: 36px; }
          .form-row { grid-template-columns: 1fr; }
          .contact-info-item {
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }
          .contact-info-item p { text-align: center; }
          .contact-info h3 { text-align: center; }
        }
        @media (max-width: 480px) {
          .contact-section { padding: 48px 16px; }
          .contact-form-box { padding: 24px 18px; }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-inner">
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <div className="contact-info-item">
              <div className="contact-icon">📞</div>
              <p><strong>Phone</strong><br />+234 8070803041, +234 8169803046</p>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">✉️</div>
              <p><strong>Email</strong><br />info@stephmusicacademy.com</p>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <p><strong>Location</strong><br />Lagos, Nigeria</p>
            </div>
          </div>

          <div className="contact-form-box">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="contact-submit">Send Message</button>
              {sent && <p className="success-msg">✅ Message sent! We'll be in touch soon.</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
