import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Highlights from '../components/sections/Highlights';
import Contact from '../components/sections/Contact';

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Highlights />
              <Contact />
            </AnimatedPage>
          }
        />
        {/* Optional dedicated routes */}
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/skills" element={<AnimatedPage><Skills /></AnimatedPage>} />
        <Route path="/experience" element={<AnimatedPage><Experience /></AnimatedPage>} />
        <Route path="/projects" element={<AnimatedPage><Highlights /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
