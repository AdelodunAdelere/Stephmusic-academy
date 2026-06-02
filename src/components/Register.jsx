import { useState } from 'react';
import { motion } from 'framer-motion';

const COURSES  = ['Piano Lessons', 'Guitar Classes', 'Drum Training', 'Vocal Coaching', 'Violin & Strings', 'Music Production'];
const LEVELS   = ['Beginner', 'Intermediate', 'Advanced'];
const SCHEDULES= ['Weekday mornings', 'Weekday afternoons', 'Weekday evenings', 'Weekends'];

const BENEFITS = [
  { icon: '🎓', text: 'Expert, certified instructors' },
  { icon: '🗓️', text: 'Flexible scheduling options' },
  { icon: '🎵', text: 'Personalised curriculum' },
  { icon: '🏆', text: 'Regular recitals & showcases' },
  { icon: '💻', text: 'Online & in-studio lessons' },
  { icon: '📱', text: 'Student progress tracking' },
];

export default function Register() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    course: '', level: '', schedule: '', dob: '', message: '', agree: false,
  });
  const [errors,    setErrors]    = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim())  e.lastName  = 'Required';
    if (!form.email.trim())     e.email     = 'Required';
    if (!form.course)           e.course    = 'Please select a course';
    if (!form.level)            e.level     = 'Please select your level';
    if (!form.agree)            e.agree     = 'You must agree to continue';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const body =
      `First Name: ${form.firstName}\nLast Name: ${form.lastName}\n` +
      `Email: ${form.email}\nPhone: ${form.phone}\n` +
      `Course: ${form.course}\nLevel: ${form.level}\n` +
      `Preferred Schedule: ${form.schedule}\nDOB: ${form.dob}\n\n` +
      `Message: ${form.message}`;

    window.location.href =
      `mailto:leredelodun@gmail.com` +
      `?subject=${encodeURIComponent(`New registration from ${form.firstName} ${form.lastName}`)}` +
      `&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  const change = (field) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [field]: val });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  if (submitted) {
    return (
      <>
        <style>{`
          .reg-success {
            min-height: 60vh; display: flex; flex-direction: column;
            align-items: center; justify-content: center; text-align: center;
            padding: 80px 24px; background: #F8FAFC;
            font-family: 'Inter', sans-serif;
          }
          .reg-success-icon {
            width: 80px; height: 80px; border-radius: 24px;
            background: linear-gradient(135deg, #2563EB, #818CF8);
            display: flex; align-items: center; justify-content: center;
            font-size: 2rem; margin: 0 auto 24px;
            box-shadow: 0 8px 32px rgba(37,99,235,0.38);
          }
          .reg-success h2 { font-size: 2rem; font-weight: 800; color: #0F172A; margin-bottom: 12px; letter-spacing: -0.02em; font-family: 'Inter', sans-serif; }
          .reg-success p  { color: #64748B; max-width: 420px; line-height: 1.7; margin-bottom: 32px; font-family: 'Inter', sans-serif; }
        `}</style>
        <div id="register" className="reg-success">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="reg-success-icon">🎉</div>
            <h2>Welcome to Stephmusic!</h2>
            <p>
              Your registration is confirmed, <strong>{form.firstName}</strong>!
              We'll reach out to <strong>{form.email}</strong> with your next steps soon.
            </p>
            <a href="#home" className="btn btn-primary">Back to Home →</a>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .register-section {
          padding: 100px 24px;
          background: #fff;
          font-family: 'Inter', sans-serif;
        }
        .register-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.8fr;
          gap: 64px; align-items: start;
        }

        /* Left panel */
        .reg-left { position: sticky; top: 96px; }
        .reg-left h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800; letter-spacing: -0.025em; line-height: 1.2;
          color: #0F172A; margin: 16px 0 18px;
        }
        .reg-left p {
          font-size: 0.95rem; color: #64748B; line-height: 1.75; margin-bottom: 28px;
        }
        .reg-benefits { display: flex; flex-direction: column; gap: 12px; }
        .reg-benefit {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.88rem; color: #475569; font-weight: 500;
        }
        .reg-benefit-icon {
          width: 32px; height: 32px; border-radius: 8px;
          background: #EFF6FF;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; flex-shrink: 0;
        }

        /* Form card */
        .reg-card {
          background: #fff;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 24px;
          padding: 44px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.08);
        }
        .reg-section-tag {
          font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: #2563EB;
          padding-bottom: 12px; border-bottom: 1px solid #EFF6FF;
          margin-bottom: 22px;
        }
        .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .r-group { margin-bottom: 18px; }
        .r-group label { display: block; font-size: 0.82rem; font-weight: 600; color: #374151; margin-bottom: 6px; }
        .req { color: #EF4444; }
        .r-error { font-size: 0.74rem; color: #EF4444; margin-top: 4px; display: block; }
        .reg-divider { height: 1px; background: #F1F5F9; margin: 28px 0; }

        /* Checkbox */
        .checkbox-row {
          display: flex; align-items: flex-start; gap: 12px; margin-bottom: 28px;
        }
        .checkbox-row input[type=checkbox] {
          width: 18px; height: 18px; margin-top: 1px;
          accent-color: #2563EB; cursor: pointer; flex-shrink: 0;
        }
        .checkbox-row label {
          font-size: 0.84rem; color: #64748B; line-height: 1.55; cursor: pointer;
          font-family: 'Inter', sans-serif;
        }
        .checkbox-row label a { color: #2563EB; text-decoration: none; }

        .reg-submit {
          width: 100%;
          background: linear-gradient(135deg, #2563EB, #4F46E5);
          color: #fff; border: none;
          padding: 15px; border-radius: 12px;
          font-size: 1rem; font-weight: 700;
          font-family: 'Inter', sans-serif; cursor: pointer;
          transition: all 0.2s; letter-spacing: 0.01em;
        }
        .reg-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37,99,235,0.4);
        }

        @media (max-width: 900px) {
          .register-inner { grid-template-columns: 1fr; gap: 40px; }
          .reg-left { position: static; }
        }
        @media (max-width: 560px) {
          .register-section { padding: 72px 16px; }
          .reg-card { padding: 28px 22px; border-radius: 18px; }
          .form-grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="register" className="register-section">
        <div className="register-inner">
          {/* Left panel */}
          <motion.div
            className="reg-left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Enrol Now</span>
            <h2>Begin your musical journey today</h2>
            <p>
              Fill in the form and we'll get back to you within 24 hours to confirm your spot
              and schedule your first session.
            </p>
            <div className="reg-benefits">
              {BENEFITS.map((b, i) => (
                <div className="reg-benefit" key={i}>
                  <div className="reg-benefit-icon">{b.icon}</div>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="reg-card">
              <form onSubmit={handleSubmit} noValidate>
                {/* Personal info */}
                <div className="reg-section-tag">Personal Information</div>
                <div className="form-grid-2">
                  <div className={`r-group${errors.firstName ? ' has-error' : ''}`}>
                    <label>First Name <span className="req">*</span></label>
                    <input className={`input-field${errors.firstName ? ' error' : ''}`} type="text" placeholder="John" value={form.firstName} onChange={change('firstName')} />
                    {errors.firstName && <span className="r-error">{errors.firstName}</span>}
                  </div>
                  <div className={`r-group${errors.lastName ? ' has-error' : ''}`}>
                    <label>Last Name <span className="req">*</span></label>
                    <input className={`input-field${errors.lastName ? ' error' : ''}`} type="text" placeholder="Doe" value={form.lastName} onChange={change('lastName')} />
                    {errors.lastName && <span className="r-error">{errors.lastName}</span>}
                  </div>
                  <div className={`r-group${errors.email ? ' has-error' : ''}`}>
                    <label>Email Address <span className="req">*</span></label>
                    <input className={`input-field${errors.email ? ' error' : ''}`} type="email" placeholder="john@email.com" value={form.email} onChange={change('email')} />
                    {errors.email && <span className="r-error">{errors.email}</span>}
                  </div>
                  <div className="r-group">
                    <label>Phone Number</label>
                    <input className="input-field" type="tel" placeholder="+234 80 0000 0000" value={form.phone} onChange={change('phone')} />
                  </div>
                  <div className="r-group">
                    <label>Date of Birth</label>
                    <input className="input-field" type="date" value={form.dob} onChange={change('dob')} />
                  </div>
                </div>

                <div className="reg-divider" />

                {/* Course details */}
                <div className="reg-section-tag">Course Details</div>
                <div className="form-grid-2">
                  <div className={`r-group${errors.course ? ' has-error' : ''}`}>
                    <label>Select Course <span className="req">*</span></label>
                    <select className={`input-field${errors.course ? ' error' : ''}`} value={form.course} onChange={change('course')}>
                      <option value="">Choose a course…</option>
                      {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.course && <span className="r-error">{errors.course}</span>}
                  </div>
                  <div className={`r-group${errors.level ? ' has-error' : ''}`}>
                    <label>Experience Level <span className="req">*</span></label>
                    <select className={`input-field${errors.level ? ' error' : ''}`} value={form.level} onChange={change('level')}>
                      <option value="">Choose level…</option>
                      {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                    {errors.level && <span className="r-error">{errors.level}</span>}
                  </div>
                  <div className="r-group">
                    <label>Preferred Schedule</label>
                    <select className="input-field" value={form.schedule} onChange={change('schedule')}>
                      <option value="">Choose schedule…</option>
                      {SCHEDULES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="r-group">
                  <label>Additional Notes (optional)</label>
                  <textarea
                    className="input-field"
                    placeholder="Tell us anything else we should know…"
                    rows={3}
                    style={{ resize: 'vertical' }}
                    value={form.message}
                    onChange={change('message')}
                  />
                </div>

                <div className="reg-divider" />

                <div className={`checkbox-row${errors.agree ? ' has-error' : ''}`}>
                  <input type="checkbox" id="reg-agree" checked={form.agree} onChange={change('agree')} />
                  <label htmlFor="reg-agree">
                    I agree to the <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a> of Stephmusic Academy.
                    {errors.agree && <span className="r-error" style={{ display: 'block', marginTop: 4 }}>{errors.agree}</span>}
                  </label>
                </div>

                <button type="submit" className="reg-submit">Complete Registration 🎵</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
