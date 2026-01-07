import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function HeroLoader({
  text = 'Deeksha Sharma',
  letterDelay = 120,
  onDone,
}) {
  const [displayed, setDisplayed] = useState('');
  const [doneTyping, setDoneTyping] = useState(false);

  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // reset everything on mount / text change
    setDisplayed('');
    setDoneTyping(false);
    indexRef.current = 0;

    // clear any previous interval (Strict Mode protection)
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const i = indexRef.current;

      if (i >= text.length) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDoneTyping(true);

        setTimeout(() => {
          onDone?.();
        }, 600);

        return;
      }

      setDisplayed((prev) => prev + text.charAt(i));
      indexRef.current += 1;
    }, letterDelay);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, letterDelay, onDone]);

  return (
    <AnimatePresence>
      <motion.div
        className="hero-loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="hero-loader__box"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="hero-loader__label">Loading portfolio</div>
          <div className="hero-loader__text">
            {displayed}
            <span className="hero-loader__cursor">
              {doneTyping ? '' : '|'}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default HeroLoader;
