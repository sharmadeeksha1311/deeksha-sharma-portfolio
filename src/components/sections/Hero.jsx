import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Snowfall from 'react-snowfall';
import Badge from '../ui/Badge';
import Snapshot from './Snapshot';
import cvPdf from '../../assets/Deeksha_Sharma_CV.pdf';

const listVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="hero">
      <Snowfall
        color="white"
        snowflakeCount={isMobile ? 1000 : 5000}
        speed={[0.5, 1.5]}
        wind={[-0.5, 1.0]}
        radius={[0.5, 3.0]}
      />
      <div className="hero section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="hero-content"
        >
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Full Stack Technical Lead
          </motion.div>
          <h1 className="hero-title">
            Namaste,<br />
            I am <span className="hero-highlight">Deeksha</span>
          </h1>
          <p className="hero-subtitle">
            Building scalable, high‑quality web experiences for enterprise teams.
          </p>
          <p className="hero-text" />
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.a
              href="#experience"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Experiences
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Information
            </motion.a>
            <motion.a
              href={cvPdf}
              className="btn-secondary"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download resume
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Badge>8+ years experience</Badge>
            <Badge>Leadership</Badge>
            <Badge>React · Vue</Badge>
            <Badge>AEM · Node· Akka.Net</Badge>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-card-wrapper"
          initial={{ opacity: 0, y: isMobile ? 20 : 40, x: isMobile ? 0 : 40 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <Snapshot />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
