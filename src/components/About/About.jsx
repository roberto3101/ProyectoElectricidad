import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaBolt, 
  FaAward, 
  FaUsers, 
  FaClock,
  FaShieldAlt,
  FaCheckCircle,
  FaTrophy,
  FaCertificate,
  FaHandshake,
  FaStar
} from 'react-icons/fa';
import { GiElectric } from 'react-icons/gi';
import { MdSecurity } from 'react-icons/md';
import styles from './About.module.css';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    satisfaction: 0
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      // Animación de contadores
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      const targets = {
        years: 15,
        projects: 500,
        clients: 200,
        satisfaction: 98
      };
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCounters({
          years: Math.round((targets.years * currentStep) / steps),
          projects: Math.round((targets.projects * currentStep) / steps),
          clients: Math.round((targets.clients * currentStep) / steps),
          satisfaction: Math.round((targets.satisfaction * currentStep) / steps)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [controls, inView]);

  const stats = [
    { 
      icon: <FaClock />, 
      value: counters.years, 
      suffix: '+',
      label: 'Años de Experiencia',
      color: '#00d4ff'
    },
    { 
      icon: <FaTrophy />, 
      value: counters.projects, 
      suffix: '+',
      label: 'Proyectos Completados',
      color: '#7209b7'
    },
    { 
      icon: <FaUsers />, 
      value: counters.clients, 
      suffix: '+',
      label: 'Clientes Satisfechos',
      color: '#00f5ff'
    },
    { 
      icon: <FaStar />, 
      value: counters.satisfaction, 
      suffix: '%',
      label: 'Satisfacción',
      color: '#ffd700'
    }
  ];

  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Seguridad',
      description: 'Cumplimos con los más altos estándares de seguridad en cada proyecto.',
      gradient: 'linear-gradient(135deg, #00d4ff, #0099cc)'
    },
    {
      icon: <GiElectric />,
      title: 'Innovación',
      description: 'Utilizamos tecnología de vanguardia para soluciones eficientes.',
      gradient: 'linear-gradient(135deg, #7209b7, #560bad)'
    },
    {
      icon: <FaAward />,
      title: 'Calidad',
      description: 'Garantizamos excelencia en cada servicio que ofrecemos.',
      gradient: 'linear-gradient(135deg, #00f5ff, #00ccff)'
    },
    {
      icon: <FaHandshake />,
      title: 'Compromiso',
      description: 'Tu satisfacción es nuestra prioridad número uno.',
      gradient: 'linear-gradient(135deg, #ff6b35, #f7931e)'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', icon: <FaCertificate /> },
    { name: 'OHSAS 18001', icon: <MdSecurity /> },
    { name: 'Licencia MINEM', icon: <FaBolt /> },
    { name: 'Certificación OSINERGMIN', icon: <FaCheckCircle /> }
  ];

  const team = [
    {
      name: 'Carlos Rodríguez',
      role: 'Director Técnico',
      experience: '20 años de experiencia',
      image: '/team1.jpg'
    },
    {
      name: 'Ana Martínez',
      role: 'Jefa de Proyectos',
      experience: '15 años de experiencia',
      image: '/team2.jpg'
    },
    {
      name: 'Luis González',
      role: 'Supervisor de Campo',
      experience: '12 años de experiencia',
      image: '/team3.jpg'
    }
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

  return (
    <section className={styles.about} id="about">
      {/* Background Effects */}
      <div className={styles.bgGrid}></div>
      <div className={styles.bgGradient}></div>
      
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <FaBolt />
            <span>Sobre Nosotros</span>
          </div>
          
          <h2 className={styles.title}>
            Líderes en Soluciones
            <span className={styles.titleHighlight}> Eléctricas Industriales</span>
          </h2>
          
          <p className={styles.subtitle}>
            Con más de 15 años de experiencia, somos tu socio confiable para todos 
            tus proyectos eléctricos e industriales. Nuestro compromiso es brindar 
            servicios de la más alta calidad con tecnología de punta.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          ref={ref}
          className={styles.stats}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className={styles.statCard}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 20px 40px ${stat.color}33`
              }}
              style={{ '--stat-color': stat.color }}
            >
              <div className={styles.statIcon}>
                {stat.icon}
                <div className={styles.statIconBg}></div>
              </div>
              <div className={styles.statContent}>
                <h3 className={styles.statValue}>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.span>
                  {stat.suffix}
                </h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
              <div className={styles.statGlow}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className={styles.mainContent}>
          {/* Left Column - Story */}
          <motion.div 
            className={styles.story}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.storyContent}>
              <h3 className={styles.storyTitle}>
                <GiElectric className={styles.storyIcon} />
                Nuestra Historia
              </h3>
              <p className={styles.storyText}>
                Desde nuestros inicios en 2009, ElectriPro ha sido sinónimo de 
                excelencia en servicios eléctricos industriales. Comenzamos como 
                un pequeño equipo de técnicos especializados y hoy somos líderes 
                en el sector.
              </p>
              <p className={styles.storyText}>
                Nuestra trayectoria está marcada por la innovación constante, 
                la adopción de nuevas tecnologías y un compromiso inquebrantable 
                con la seguridad y calidad en cada proyecto que emprendemos.
              </p>
              
              {/* Certifications */}
              <div className={styles.certifications}>
                <h4 className={styles.certTitle}>Certificaciones</h4>
                <div className={styles.certGrid}>
                  {certifications.map((cert, index) => (
                    <motion.div 
                      key={index}
                      className={styles.certBadge}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring" }}
                    >
                      {cert.icon}
                      <span>{cert.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.storyDecoration}>
              <div className={styles.circuit}></div>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div 
            className={styles.values}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.valuesTitle}>Nuestros Valores</h3>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className={styles.valueCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)'
                  }}
                >
                  <div 
                    className={styles.valueIcon}
                    style={{ background: value.gradient }}
                  >
                    {value.icon}
                  </div>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDescription}>{value.description}</p>
                  <div className={styles.valueGlow}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          className={styles.team}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={styles.teamTitle}>Nuestro Equipo</h3>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className={styles.teamCard}
                initial={{ opacity: 0, rotateY: -30 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.teamImageWrapper}>
                  <div className={styles.teamImage}>
                    <FaUsers />
                  </div>
                  <div className={styles.teamImageGlow}></div>
                </div>
                <h4 className={styles.teamName}>{member.name}</h4>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamExperience}>{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingBolt}></div>
        <div className={styles.floatingCircuit}></div>
      </div>
    </section>
  );
};

export default About;