import { motion } from 'motion/react';
import Badge from '../ui/Badge';

function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="section__title">About</h2>

        <div className="about-grid">
          <div className="about-main">
            <p className="section__text cursive-writing font-24">
              Full Stack Technical Lead with 8+ years of experience shipping enterprise
              applications across telecom, hospitality, creative tooling, and healthcare.
            </p>
            <p className="section__text cursive-writing font-16">
                Front-end engineering leader with 8+ years of experience leading teams across telecom, hospitality, creative tooling, and healthcare domains. Proven ownership of front-end architecture, end-to-end delivery, and team mentoring. Brings working experience in full-stack development to collaborate effectively across the stack.
            </p>
          </div>

          <div className="about-side">
            <div className="about-stat">
              <div className="about-stat__label">Years of experience</div>
              <div className="about-stat__value">8+</div>
            </div>
            <div className="about-stat">
              <div className="about-stat__label">Teams led</div>
              <div className="about-stat__value">Accenture · Monotype · TCS</div>
            </div>
            <div className="about-stat">
              <div className="about-stat__label">Focus</div>
              <div className="about-stat__value">Scalable frontends · Quality</div>
            </div>
          </div>
        </div>

        <div className="about-marquee-label">Previously collaborated with</div>
        <div className="about-marquee">
          <div className="about-marquee__track">
            <span className="about-marquee__item">Tata Consultancy Services</span>
            <span className="about-marquee__dot">•</span>
            <span className="about-marquee__item">Monotype Solutions</span>
            <span className="about-marquee__dot">•</span>
            <span className="about-marquee__item">Accenture</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

export default About;
