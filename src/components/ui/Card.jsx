import { motion } from 'motion/react';

function Card({ children, className = '' }) {
  return (
    <motion.div
      className={`card ${className}`}
      whileHover={{
        y: -4,
        scale: 1.02,
        boxShadow: '0 22px 55px rgba(15,23,42,0.9)',
      }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

export default Card;
