import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBolt, 
  FaTools, 
  FaShieldAlt, 
  FaClock,
  FaCheckCircle,
  FaPhone,
  FaArrowRight,
  FaPlay
} from 'react-icons/fa';
import ThreeScene from '../ThreeScene/ThreeScene';
import styles from './Hero.module.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  
  const dynamicWords = [
    'ELÉCTRICAS',
    'INDUSTRIALES', 
    'PROFESIONALES',
    'EFICIENTES',
    'SEGURAS'
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <FaShieldAlt />, text: '100% Garantizado' },
    { icon: <FaClock />, text: '24/7 Emergencias' },
    { icon: <FaCheckCircle />, text: 'Certificados' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className={styles.hero}>
      {/* Escena 3D de fondo */}
      <div className={styles.threeBg}>
        <ThreeScene mousePosition={mousePosition} />
      </div>

      {/* Overlay gradiente */}
      <div className={styles.overlay}></div>

      {/* Partículas eléctricas */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight + 100 }}
            animate={{
              y: -100,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className={styles.badge}
            variants={itemVariants}
            animate={floatingAnimation}
          >
            <FaBolt className={styles.badgeIcon} />
            <span>Expertos en Electricidad Industrial</span>
            <div className={styles.badgeGlow}></div>
          </motion.div>

          {/* Título principal */}
          <motion.h1 
            className={styles.title}
            variants={itemVariants}
          >
            <span className={styles.titleLine}>
              SOLUCIONES
            </span>
            <span className={styles.titleDynamic}>
           



<span className={styles.dynamicWrapper}>
  {dynamicWords.map((word, index) => (
    <motion.span
      key={word}
      className={styles.dynamicWord}
      style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'auto',
        whiteSpace: 'nowrap',
      }}
      animate={{
        opacity: currentWord === index ? 1 : 0,
        y: currentWord === index ? 0 : 20,
        scale: currentWord === index ? 1 : 0.8
      }}
      transition={{ duration: 0.5 }}
    >
      {word}
    </motion.span>
  ))}
</span>




            </span>
            <span className={styles.titleLine}>
              DE ALTO RENDIMIENTO
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            className={styles.subtitle}
            variants={itemVariants}
          >
            Instalaciones eléctricas, mantenimiento preventivo y correctivo, 
            sistemas industriales, pintado profesional e instalación de malla raschel.
            <span className={styles.highlight}> Tu proyecto en las mejores manos.</span>
          </motion.p>

          {/* Features */}
          <motion.div 
            className={styles.features}
            variants={itemVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={styles.feature}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.featureIcon}>{feature.icon}</span>
                <span className={styles.featureText}>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className={styles.ctas}
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contacto" className={`${styles.ctaButton} ${styles.ctaPrimary}`}>
                <span className={styles.ctaContent}>
                  <FaPhone className={styles.ctaIcon} />
                  <span>Solicitar Cotización</span>
                  <FaArrowRight className={styles.ctaArrow} />
                </span>
                <span className={styles.ctaGlow}></span>
                <span className={styles.ctaElectric}></span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/servicios" className={`${styles.ctaButton} ${styles.ctaSecondary}`}>
                <FaTools className={styles.ctaIcon} />
                <span>Ver Servicios</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Video button */}
          <motion.button 
            className={styles.videoButton}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => console.log('Play video')}
          >
            <span className={styles.videoPlay}>
              <FaPlay />
            </span>
            <span className={styles.videoText}>Ver video presentación</span>
            <span className={styles.videoPulse}></span>
          </motion.button>
        </motion.div>

        {/* Decoración lateral */}
        <motion.div 
          className={styles.sideDecoration}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className={styles.circuit}></div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div 
        className={styles.scrollIndicator}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}></div>
      </motion.div>

      {/* Efectos de iluminación */}
      <div className={styles.lightEffects}>
        <div className={styles.lightBeam1}></div>
        <div className={styles.lightBeam2}></div>
        <div className={styles.lightBeam3}></div>
      </div>
    </section>
  );
};

export default Hero;