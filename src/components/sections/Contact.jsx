import React, { useState } from 'react';

const Contact = () => {
  const [activeMethod, setActiveMethod] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const contactMethods = [
    {
      id: 1,
      title: "Email",
      value: "sharma.deeksha1311@gmail.com",
      icon: "✉️",
      link: "mailto:sharma.deeksha1311@gmail.com",
      color: "#0ea5e9",
      gradient: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)"
    },
    {
      id: 2,
      title: "Phone",
      value: "+91 8707 896 378",
      icon: "📱",
      link: "tel:+918707896378",
      color: "#6366f1",
      gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
    },
    {
      id: 3,
      title: "Location",
      value: "Noida, India",
      icon: "📍",
      link: "https://maps.app.goo.gl/i8q4Gx6xBrfSMjW88",
      color: "#0ea5e9",
      gradient: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)"
    }
  ];

  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      username: "/deeksha-sharma-linked-in",
      icon: "💼",
      link: "https://www.linkedin.com/in/deeksha-sharma-linked-in/",
      color: "#0077b5"
    },
    {
      id: 2,
      name: "GitHub",
      username: "/yourusername",
      icon: "💻",
      link: "https://github.com/yourusername",
      color: "#333"
    }
  ];

  const handleCopy = (value, id) => {
    navigator.clipboard.writeText(value);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge">Get In Touch</span>
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Methods */}
          <div className="contact-methods">
            {contactMethods.map((method) => (
              <div
                key={method.id}
                className={`contact-method ${activeMethod === method.id ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveMethod(method.id)}
                onMouseLeave={() => setActiveMethod(null)}
                style={{ '--method-color': method.color }}
              >
                <div className="contact-method__icon-bg" style={{ background: method.gradient }}>
                  <div className="contact-method__icon">{method.icon}</div>
                </div>
                
                <div className="contact-method__details">
                  <span className="contact-method__label">{method.title}</span>
                  <a 
                    href={method.link}
                    className="contact-method__value"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.value}
                  </a>
                </div>

                <div className="contact-method__actions">
                  <button
                    className="contact-method__action"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCopy(method.value, method.id);
                    }}
                    title="Copy"
                  >
                    {copiedField === method.id ? (
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M3 10.5V3.5C3 2.67157 3.67157 2 4.5 2H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </button>
                  
                  <a
                    href={method.link}
                    className="contact-method__action"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open"
                  >
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3H3V13H13V10M9 3H13M13 3V7M13 3L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                <div className="contact-method__ripple"></div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="contact-social">
            <h3 className="contact-social__title">Find me on social media</h3>
            <div className="contact-social__grid">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--social-color': social.color }}
                >
                  <div className="social-link__icon">{social.icon}</div>
                  <div className="social-link__content">
                    <span className="social-link__name">{social.name}</span>
                    <span className="social-link__username">{social.username}</span>
                  </div>
                  <div className="social-link__arrow">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="contact-cta">
            <div className="contact-cta__icon">💬</div>
            <h3 className="contact-cta__title">Ready to start a project?</h3>
            <p className="contact-cta__text">
              Please reach me out on my mail id!
            </p>
            <a href="mailto:sharma.deeksha1311@gmail.com" className="contact-cta__btn">
              Send me a message
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8H14M14 8L8 2M14 8L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;