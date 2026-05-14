// ============================================================
// COMPONENT: Register.jsx
// COPY THIS FILE → src/components/Register.jsx
// ============================================================
import { useState } from "react";

const courses = [
  "Piano Lessons",
  "Guitar Classes",
  "Drum Training",
  "Vocal Coaching",
  "Violin & Strings",
  "Music Production",
];

const levels = ["Beginner", "Intermediate", "Advanced"];

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    level: "",
    dob: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    if (!form.course) e.course = "Please select a course";
    if (!form.level) e.level = "Please select your level";
    if (!form.agree) e.agree = "You must agree to continue";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const body =
      `First Name: ${form.firstName}\n` +
      `Last Name: ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Course: ${form.course}\n` +
      `Level: ${form.level}\n` +
      `DOB: ${form.dob}\n\n` +
      `Message: ${form.message}`;

    const mailtoLink =
      `mailto:leredelodun@gmail.com` +
      `?subject=${encodeURIComponent(`New registration from ${form.firstName} ${form.lastName}`)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const change = (field) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [field]: val });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  if (submitted) {
    return (
      <>
        <style>{`
          .register-success {
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 80px 24px;
            font-family: 'Poppins', sans-serif;
            background: #f8fbff;
          }
          .success-icon { font-size: 4rem; margin-bottom: 20px; }
          .register-success h2 { font-size: 1.8rem; font-weight: 800; color: #1a1a2e; margin: 0 0 12px; }
          .register-success p { color: #666; max-width: 420px; line-height: 1.7; margin: 0 0 28px; }
          .back-home {
            background: #2196f3;
            color: #fff;
            text-decoration: none;
            padding: 12px 30px;
            border-radius: 28px;
            font-weight: 700;
            transition: background 0.2s;
          }
          .back-home:hover { background: #1565c0; }
        `}</style>
        <div id="register" className="register-success">
          <div className="success-icon">🎉</div>
          <h2>Registration Successful!</h2>
          <p>
            Welcome to Stephmusic Academy, <strong>{form.firstName}</strong>! 
            We'll reach out to you at <strong>{form.email}</strong> with next steps.
          </p>
          <a href="#home" className="back-home">Back to Home</a>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .register-section {
          padding: 80px 40px;
          background: linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%);
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
        }
        .register-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .register-header h2 {
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 10px;
        }
        .register-header p {
          color: #666;
          font-size: 0.92rem;
          max-width: 460px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .register-card {
          background: #fff;
          border-radius: 24px;
          padding: 48px;
          max-width: 760px;
          margin: 0 auto;
          box-shadow: 0 8px 40px rgba(33,150,243,0.12);
          border: 1.5px solid #e3f2fd;
        }
        .register-section-title {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #2196f3;
          margin: 0 0 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #e3f2fd;
        }
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .r-form-group {
          margin-bottom: 20px;
        }
        .r-form-group label {
          display: block;
          font-size: 0.82rem;
          font-weight: 600;
          color: #444;
          margin-bottom: 6px;
        }
        .r-form-group label .req { color: #e53935; }
        .r-form-group input,
        .r-form-group select,
        .r-form-group textarea {
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
          appearance: none;
        }
        .r-form-group input:focus,
        .r-form-group select:focus,
        .r-form-group textarea:focus {
          border-color: #2196f3;
          box-shadow: 0 0 0 3px rgba(33,150,243,0.12);
        }
        .r-form-group.has-error input,
        .r-form-group.has-error select,
        .r-form-group.has-error textarea {
          border-color: #e53935;
        }
        .error-msg {
          font-size: 0.75rem;
          color: #e53935;
          margin-top: 4px;
        }
        .r-form-group textarea { resize: vertical; min-height: 100px; }
        .checkbox-group {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 28px;
        }
        .checkbox-group input[type="checkbox"] {
          width: 18px; height: 18px;
          margin-top: 2px;
          accent-color: #2196f3;
          flex-shrink: 0;
          cursor: pointer;
        }
        .checkbox-group label {
          font-size: 0.85rem;
          color: #555;
          line-height: 1.5;
          cursor: pointer;
        }
        .checkbox-group label a { color: #2196f3; }
        .register-submit {
          width: 100%;
          background: linear-gradient(90deg, #2196f3, #1565c0);
          color: #fff;
          border: none;
          padding: 14px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
          letter-spacing: 0.3px;
        }
        .register-submit:hover { opacity: 0.9; transform: translateY(-2px); }
        .register-divider { height: 1px; background: #e8f0fe; margin: 32px 0; }
        .login-prompt {
          text-align: center;
          font-size: 0.88rem;
          color: #666;
          margin-top: 20px;
        }
        .login-prompt a { color: #2196f3; font-weight: 600; text-decoration: none; }

        @media (max-width: 768px) {
          .register-section { padding: 60px 20px; }
          .register-card { padding: 32px 24px; }
          .form-grid-2 { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .register-section { padding: 48px 12px; }
          .register-card { padding: 24px 16px; border-radius: 16px; }
        }
      `}</style>

      <section id="register" className="register-section">
        <div className="register-header">
          <h2>Register Now</h2>
          <p>Join Stephmusic Academy and begin your musical journey today. Fill in your details below to get started.</p>
        </div>

        <div className="register-card">
          <form onSubmit={handleSubmit} noValidate>

            <p className="register-section-title">Personal Information</p>
            <div className="form-grid-2">
              <div className={`r-form-group ${errors.firstName ? "has-error" : ""}`}>
                <label>First Name <span className="req">*</span></label>
                <input type="text" placeholder="John" value={form.firstName} onChange={change("firstName")} />
                {errors.firstName && <div className="error-msg">{errors.firstName}</div>}
              </div>
              <div className={`r-form-group ${errors.lastName ? "has-error" : ""}`}>
                <label>Last Name <span className="req">*</span></label>
                <input type="text" placeholder="Doe" value={form.lastName} onChange={change("lastName")} />
                {errors.lastName && <div className="error-msg">{errors.lastName}</div>}
              </div>
              <div className={`r-form-group ${errors.email ? "has-error" : ""}`}>
                <label>Email Address <span className="req">*</span></label>
                <input type="email" placeholder="john@email.com" value={form.email} onChange={change("email")} />
                {errors.email && <div className="error-msg">{errors.email}</div>}
              </div>
              <div className="r-form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+234 80 0000 0000" value={form.phone} onChange={change("phone")} />
              </div>
              <div className="r-form-group">
                <label>Date of Birth</label>
                <input type="date" value={form.dob} onChange={change("dob")} />
              </div>
            </div>

            <div className="register-divider" />
            <p className="register-section-title">Course Details</p>
            <div className="form-grid-2">
              <div className={`r-form-group ${errors.course ? "has-error" : ""}`}>
                <label>Select Course <span className="req">*</span></label>
                <select value={form.course} onChange={change("course")}>
                  <option value="">-- Choose a course --</option>
                  {courses.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.course && <div className="error-msg">{errors.course}</div>}
              </div>
              <div className={`r-form-group ${errors.level ? "has-error" : ""}`}>
                <label>Experience Level <span className="req">*</span></label>
                <select value={form.level} onChange={change("level")}>
                  <option value="">-- Choose level --</option>
                  {levels.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
                {errors.level && <div className="error-msg">{errors.level}</div>}
              </div>
            </div>

            <div className="r-form-group">
              <label>Additional Message (optional)</label>
              <textarea placeholder="Tell us anything else we should know..." value={form.message} onChange={change("message")} />
            </div>

            <div className="register-divider" />

            <div className={`checkbox-group ${errors.agree ? "has-error" : ""}`}>
              <input type="checkbox" id="agree" checked={form.agree} onChange={change("agree")} />
              <label htmlFor="agree">
                I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a> of Stephmusic Academy.
                {errors.agree && <div className="error-msg">{errors.agree}</div>}
              </label>
            </div>

            <button type="submit" className="register-submit">Complete Registration 🎵</button>

            <p className="login-prompt">Already registered? <a href="#contact">Contact us</a></p>
          </form>
        </div>
      </section>
    </>
  );
}
