import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBolt, 
  FaHistory, 
  FaRocket,
  FaEye,
  FaBullseye,
  FaHandshake,
  FaTrophy,
  FaUsers,
  FaCertificate,
  FaAward,
  FaArrowRight,
  FaQuoteLeft,
  FaLinkedin
} from 'react-icons/fa';
import { GiElectric } from 'react-icons/gi';
import { MdSecurity } from 'react-icons/md';
import About from '../components/About/About';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const timeline = [
    {
      year: '2009',
      title: 'Nuestros Inicios',
      description: 'Comenzamos como un pequeño equipo de técnicos especializados con una visión clara: brindar servicios eléctricos de calidad.',
      icon: <FaBolt />
    },
    {
      year: '2012',
      title: 'Primera Gran Expansión',
      description: 'Ampliamos nuestros servicios para incluir mantenimiento industrial y equipos especializados.',
      icon: <FaRocket />
    },
    {
      year: '2015',
      title: 'Certificación ISO',
      description: 'Obtuvimos la certificación ISO 9001, consolidando nuestro compromiso con la calidad.',
      icon: <FaCertificate />
    },
    {
      year: '2018',
      title: 'Nuevas Tecnologías',
      description: 'Incorporamos tecnología de punta para diagnóstico y mantenimiento predictivo.',
      icon: <GiElectric />
    },
    {
      year: '2020',
      title: 'Servicios 24/7',
      description: 'Implementamos servicio de emergencia las 24 horas para atender a nuestros clientes.',
      icon: <MdSecurity />
    },
    {
      year: '2024',
      title: 'Líderes del Sector',
      description: 'Hoy somos reconocidos como líderes en soluciones eléctricas e industriales.',
      icon: <FaTrophy />
    }
  ];

  const coreValues = [
    {
      icon: <FaHandshake />,
      title: 'Integridad',
      description: 'Actuamos con honestidad y transparencia en cada proyecto'
    },
    {
      icon: <FaRocket />,
      title: 'Innovación',
      description: 'Adoptamos las últimas tecnologías para ofrecer las mejores soluciones'
    },
    {
      icon: <FaUsers />,
      title: 'Trabajo en Equipo',
      description: 'Colaboramos estrechamente para superar expectativas'
    },
    {
      icon: <FaAward />,
      title: 'Excelencia',
      description: 'Nos esforzamos por la perfección en cada detalle'
    }
  ];

  const testimonials = [
    {
      name: 'Juan Pérez',
      company: 'Industrias ABC',
      role: 'Gerente de Operaciones',
      text: 'ElectriPro transformó completamente nuestro sistema eléctrico. Su profesionalismo y atención al detalle son excepcionales.',
      rating: 5
    },
    {
      name: 'María González',
      company: 'Comercial XYZ',
      role: 'Directora General',
      text: 'El servicio 24/7 nos ha salvado en múltiples ocasiones. Son confiables, rápidos y muy profesionales.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Fábrica Delta',
      role: 'Jefe de Mantenimiento',
      text: 'Gracias a su mantenimiento preventivo, hemos reducido las paradas no programadas en un 70%.',
      rating: 5
    }
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      className="about-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-bg">
          <div className="circuit-pattern"></div>
          <div className="energy-flow"></div>
        </div>
        
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <FaBolt />
            <span>Sobre Nosotros</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            15 Años de
            <span className="title-highlight"> Excelencia</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Construyendo el futuro eléctrico e industrial del Perú
          </motion.p>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <motion.div 
            className="mv-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mv-card mission-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mv-icon">
                <FaBullseye />
              </div>
              <h3 className="mv-title">Nuestra Misión</h3>
              <p className="mv-text">
                Proporcionar soluciones eléctricas e industriales de vanguardia, 
                garantizando seguridad, eficiencia y sostenibilidad en cada proyecto. 
                Nos comprometemos a superar las expectativas de nuestros clientes 
                mediante innovación constante y servicio excepcional.
              </p>
            </motion.div>

            <motion.div 
              className="mv-card vision-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mv-icon">
                <FaEye />
              </div>
              <h3 className="mv-title">Nuestra Visión</h3>
              <p className="mv-text">
                Ser reconocidos como la empresa líder en servicios eléctricos 
                e industriales en el Perú, estableciendo el estándar de excelencia 
                en el sector y siendo el socio estratégico preferido para el 
                desarrollo de infraestructura eléctrica sostenible.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Nuestra
              <span className="title-highlight"> Trayectoria</span>
            </h2>
          </motion.div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <div className="timeline-icon">
                    {item.icon}
                  </div>
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Nuestros
              <span className="title-highlight"> Valores</span>
            </h2>
          </motion.div>

          <div className="values-grid">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
                <div className="value-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Lo que dicen
              <span className="title-highlight"> Nuestros Clientes</span>
            </h2>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <span>{testimonial.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">¿Quieres ser parte de nuestra historia de éxito?</h2>
            <p className="cta-subtitle">
              Únete a los cientos de empresas que confían en nosotros
            </p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn-primary">
                <FaHandshake />
                <span>Trabajemos Juntos</span>
              </Link>
              <Link to="/servicios" className="btn-secondary">
                <FaArrowRight />
                <span>Ver Servicios</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;