import React from 'react';
import { motion } from 'motion/react';

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="skills" className="section">
      <motion.h2 
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills &amp; toolbox
      </motion.h2>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="skill-row" variants={rowVariants}>
          <div className="skill-row__label">Frontend</div>
          <div className="skill-row__chips">
            {['React', 'TypeScript', 'React Native', 'Redux / Zustand', 'HTML', 'CSS / Sass'].map((skill, idx) => (
              <motion.span
                key={skill}
                className="skill-chip"
                variants={chipVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                custom={idx}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div className="skill-row" variants={rowVariants}>
          <div className="skill-row__label">Backend &amp; platform</div>
          <div className="skill-row__chips">
            {['Node.js', 'Express', 'AEM', 'REST', 'GraphQL'].map((skill, idx) => (
              <motion.span
                key={skill}
                className="skill-chip"
                variants={chipVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                custom={idx}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div className="skill-row" variants={rowVariants}>
          <div className="skill-row__label">Architecture</div>
          <div className="skill-row__chips">
            {['Component‑driven UI', 'Performance', 'Code reviews'].map((skill, idx) => (
              <motion.span
                key={skill}
                className="skill-chip"
                variants={chipVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                custom={idx}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div className="skill-row" variants={rowVariants}>
          <div className="skill-row__label">Ways of working</div>
          <div className="skill-row__chips">
            {['Leading squads', 'Agile / Scrum', 'JIRA', 'Git'].map((skill, idx) => (
              <motion.span
                key={skill}
                className="skill-chip"
                variants={chipVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                custom={idx}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;