import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const EXPERIENCE = [
  {
    id: 'accenture',
    title: 'Packaged App Development Team Lead',
    company: 'Accenture',
    location: 'Noida, India',
    start: 'Jan 2024',
    end: 'Present',
    focus:
      'Leading frontend development for large-scale retail and hospitality applications.',
    stack:
      'React Native · React · AEM · TypeScript · SonarQube · Husky · CI/CD',
    points: [
      'Working on a retail application for a telecom client.',
      'Led a team delivering telecom solutions for a Dubai-based client.',
      'Handled daily client interactions to resolve dependencies and manage estimations.',
      'Developed AEM-integrated React applications for a hospitality project.',
      'Ensured code quality using SonarQube and enforced standards via Husky rules.',
      'Implemented Low-Level Design (LLD) before development to streamline execution and reduce defects.',
    ],
  },
  {
    id: 'monotype',
    title: 'Senior Software Engineer',
    company: 'Monotype',
    location: 'Noida, India',
    start: 'Oct 2021',
    end: 'Dec 2023',
    focus:
      'Built and scaled font management applications for creative professionals.',
    stack:
      'Vue.js · Akka.Net · JavaScript · Performance Optimization · Unit Testing',
    points: [
      'Worked on Monotype\'s font management platform for creative professionals.',
      'Designed and developed a fonts application using Vue.js.',
      'Actively involved in breaking down user stories and conducting functional and technical refinements.',
      'Improved code quality through code flow designs, performance optimization, and increased unit test coverage.',
      'Led high-quality PR reviews and enforced frontend best practices.',
      'Served as SPOC for the squad during inter-tribe coordination calls.',
    ],
  },
  {
    id: 'tcs',
    title: 'IT Analyst',
    company: 'Tata Consultancy Services',
    location: 'India',
    start: 'Jul 2017',
    end: 'Oct 2021',
    focus:
      'Frontend development for healthcare platforms and internal tools for US-based clients.',
    stack:
      'React.js · Drupal 8 · REST APIs · Chart.js · Bootstrap · GitLab',
    points: [
      'Worked on multiple healthcare projects and tools for a US-based client.',
      'Developed reusable and functional React components.',
      'Consumed REST APIs to manage content from Drupal 8 CMS.',
      'Integrated React components via iframes and AJAX calls on Drupal websites.',
      'Used libraries such as Chart.js and Bootstrap Data Tables.',
      'Handled code deployments to customer GitLab repositories.',
      'Performed PR reviews and frontend performance optimizations.',
    ],
  },
];

function Experience() {
  const [activeId, setActiveId] = useState(EXPERIENCE[0].id);
  const active = EXPERIENCE.find((job) => job.id === activeId);

  const tabVariants = {
    inactive: { 
      scale: 1,
      opacity: 0.8 
    },
    active: { 
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const panelVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <section id="experience" className="section">
      <motion.h2 
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <motion.div 
        className="experience-shell"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Top: interactive company pills */}
        <div className="experience-tabs">
          {EXPERIENCE.map((job, index) => {
            const isActive = job.id === activeId;
            return (
              <motion.button
                key={job.id}
                type="button"
                className={`experience-tab ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveId(job.id)}
                variants={tabVariants}
                initial="inactive"
                animate={isActive ? "active" : "inactive"}
                whileHover="hover"
                whileTap="tap"
                custom={index}
              >
                <span className="experience-tab__dot" />
                <span className="experience-tab__label">
                  <span className="experience-tab__company">{job.company}</span>
                  <span className="experience-tab__role">{job.title}</span>
                </span>
                {/* <span className="experience-tab__dates">
                  {job.start} – {job.end}
                </span> */}
              </motion.button>
            );
          })}
        </div>

        {/* Bottom: animated detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active?.id}
            className="experience-panel"
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="experience-panel__header">
              <motion.div 
                className="experience-panel__title"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {active?.title}{' '}
                <span className="experience-panel__at">@ {active?.company}</span>
              </motion.div>
              <motion.div 
                className="experience-panel__meta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                <span>{active?.location}</span>
                <span>·</span>
                <span className="experience-panel__duration">
                  {active?.start} – {active?.end}
                </span>
              </motion.div>
            </div>

            <motion.div 
              className="experience-panel__stack"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {active?.stack}
            </motion.div>

            <motion.p 
              className="experience-panel__focus"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
            >
              {active?.focus}
            </motion.p>

            <motion.ul 
              className="experience-panel__bullets"
              initial="hidden"
              animate="visible"
            >
              {active?.points.map((p, i) => (
                <motion.li 
                  key={p}
                  custom={i}
                  variants={bulletVariants}
                >
                  {p}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Experience;