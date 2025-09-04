import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBolt, 
  FaHome, 
  FaTools, 
  FaUsers, 
  FaPhone, 
  FaBars, 
  FaTimes,
  FaWhatsapp 
} from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Inicio', icon: <FaHome /> },
    { path: '/servicios', label: 'Servicios', icon: <FaTools /> },
    { path: '/nosotros', label: 'Nosotros', icon: <FaUsers /> },
    { path: '/contacto', label: 'Contacto', icon: <FaPhone /> },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: { 
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.nav 
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.container}>
          {/* Logo con efecto 3D */}
          <Link to="/" className={styles.logo}>
            <motion.div 
              className={styles.logoIcon}
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
            >
              <FaBolt className={styles.bolt} />
            </motion.div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>ElectriPro</span>
              <span className={styles.logoSub}>Soluciones Industriales</span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <ul className={styles.navLinks}>
            {navItems.map((item, index) => (
              <motion.li 
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link 
                  to={item.path} 
                  className={`${styles.navLink} ${
                    location.pathname === item.path ? styles.active : ''
                  }`}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.navText}>{item.label}</span>
                  <span className={styles.navLine}></span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div 
            className={styles.ctaWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="https://wa.me/51999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <FaWhatsapp />
              <span>Cotizar Ahora</span>
              <span className={styles.ctaPulse}></span>
            </a>
          </motion.div>

          {/* Botón Mobile */}
          <button 
            className={styles.mobileToggle}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </button>
        </div>

        {/* Efecto de electricidad */}
        <div className={styles.electricEffect}></div>
      </motion.nav>

      {/* Menú Mobile */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menú Mobile */}
            <motion.div 
              className={styles.mobileMenu}
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className={styles.mobileHeader}>
                <div className={styles.mobileLogo}>
                  <FaBolt />
                  <span>ElectriPro</span>
                </div>
                <button 
                  onClick={() => setIsMobileOpen(false)}
                  className={styles.mobileClose}
                >
                  <FaTimes />
                </button>
              </div>

              <ul className={styles.mobileLinks}>
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.path}
                      className={`${styles.mobileLink} ${
                        location.pathname === item.path ? styles.mobileActive : ''
                      }`}
                    >
                      <span className={styles.mobileLinkIcon}>{item.icon}</span>
                      <span>{item.label}</span>
                      {location.pathname === item.path && (
                        <motion.span 
                          className={styles.mobileActiveIndicator}
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className={styles.mobileCta}>
                <a 
                  href="https://wa.me/51999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.mobileCtaButton}
                >
                  <FaWhatsapp />
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>

              {/* Decoración eléctrica */}
              <div className={styles.mobileDecoration}>
                <div className={styles.electricLine}></div>
                <div className={styles.electricLine}></div>
                <div className={styles.electricLine}></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;