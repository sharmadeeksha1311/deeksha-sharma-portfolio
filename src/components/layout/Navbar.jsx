import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import profileImg from '../../assets/deeksha.jpg';

const links = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#projects', label: 'Highlights' },
  { to: '/#contact', label: 'Contact' },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = (to) => (e) => {
    e.preventDefault();
    const [path, hash] = to.split('#');

    if (path && path !== location.pathname) {
      navigate(path + (hash ? `#${hash}` : ''));
    } else if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar__left">
          <div className="navbar__avatar">
            <img src={profileImg} alt="Deeksha Sharma" className="navbar__avatar-img" />
          </div>
          <div>
            <div className="navbar__title">Deeksha Sharma</div>
            <div className="navbar__subtitle">Full Stack Technical Lead</div>
          </div>
        </div>

        {/* desktop / tablet links */}
        <nav className="navbar__links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={handleClick(link.to)}
              className={({ isActive }) =>
                'navbar__link' + (isActive && link.to === '/' ? ' active' : '')
              }
            >
              {({ isActive }) => (
                <motion.span
                  whileHover={{ y: -1, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  style={{ display: 'inline-block' }}
                >
                  {link.label}
                </motion.span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* hamburger for mobile */}
        <button
          type="button"
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="navbar__mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {links.map((link) => (
              <button
                key={link.to}
                type="button"
                className="navbar__mobile-link"
                onClick={handleClick(link.to)}
              >
                {link.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
