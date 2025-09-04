import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaBolt, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaClock,
  FaTools,
  FaShieldAlt,
  FaCertificate,
  FaArrowUp
} from 'react-icons/fa';
import styles from './Footer.module.css';
import { BiCurrentLocation } from 'react-icons/bi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const services = [
    'Instalaciones Eléctricas',
    'Mantenimiento Industrial',
    'Sistemas de Emergencia',
    'Pintado Industrial',
    'Instalación Malla Raschel'
  ];

  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const socialLinks = [
    { icon: <FaWhatsapp />, url: 'https://wa.me/51999999999', name: 'WhatsApp' },
    { icon: <FaFacebook />, url: 'https://facebook.com', name: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', name: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', name: 'LinkedIn' }
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: '+51 999 999 999', link: 'tel:+51999999999' },
    { icon: <FaEnvelope />, text: 'info@electripro.pe', link: 'mailto:info@electripro.pe' },
    { icon: <FaMapMarkerAlt />, text: 'Lima, Perú', link: '#' },
    { icon: <FaClock />, text: 'Lun - Sab: 8:00 AM - 6:00 PM', link: '#' }
  ];

  const certifications = [
    { icon: <FaShieldAlt />, text: 'Seguridad Certificada' },
    { icon: <FaCertificate />, text: 'ISO 9001:2015' },
    { icon: <FaTools />, text: 'Técnicos Especializados' }
  ];

  return (
    <footer className={styles.footer}>
      {/* Línea eléctrica animada superior */}
      <div className={styles.electricTop}>
        <div className={styles.electricLine}></div>
      </div>

      {/* Contenido principal del footer */}
      <div className={styles.container}>
        <div className={styles.content}>
          
          {/* Columna 1: Logo e información */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles.logoSection}>
              <div className={styles.logo}>
                <FaBolt className={styles.logoIcon} />
                <div>
                  <h3 className={styles.logoText}>ElectriPro</h3>
                  <p className={styles.logoSubtext}>Soluciones Eléctricas Industriales</p>
                </div>
              </div>
              <p className={styles.description}>
                Expertos en instalaciones eléctricas industriales, mantenimiento preventivo 
                y correctivo. Calidad, seguridad y eficiencia garantizadas.
              </p>
              
              {/* Certificaciones */}
              <div className={styles.certifications}>
                {certifications.map((cert, index) => (
                  <div key={index} className={styles.certBadge}>
                    {cert.icon}
                    <span>{cert.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna 2: Servicios */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className={styles.columnTitle}>
              <span className={styles.titleIcon}><FaTools /></span>
              Nuestros Servicios
            </h4>
            <ul className={styles.servicesList}>
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, color: '#00d4ff' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={styles.serviceIcon}>⚡</span>
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Enlaces rápidos */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={styles.columnTitle}>
              Enlaces Rápidos
            </h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={link.path} className={styles.link}>
                    <span className={styles.linkArrow}>→</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 4: Contacto */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className={styles.columnTitle}>
              <span className={styles.titleIcon}><FaPhone /></span>
              Contacto
            </h4>
            <div className={styles.contactList}>
              {contactInfo.map((info, index) => (
                <motion.a 
                  key={index}
                  href={info.link}
                  className={styles.contactItem}
                  whileHover={{ x: 5, color: '#00d4ff' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={styles.contactIcon}>{info.icon}</span>
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Botón CTA */}
            <motion.a 
              href="https://wa.me/51999999999"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
              <span>Solicitar Cotización</span>
              <div className={styles.ctaGlow}></div>
            </motion.a>
          </motion.div>
        </div>

        {/* Redes sociales */}
        <motion.div 
          className={styles.socialSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: '#00d4ff'
                }}
                transition={{ duration: 0.3 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Línea divisoria con efecto eléctrico */}
        <div className={styles.divider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerPulse}></div>
        </div>

        {/* Copyright y créditos */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>
              © {currentYear} ElectriPro. Todos los derechos reservados.
            </p>
             <p>
              ©  Desarrollado por Roberto3101
            </p>
            <p className={styles.legal}>
              <Link to="/privacidad">Política de Privacidad</Link>
              <span className={styles.separator}>|</span>
              <Link to="/terminos">Términos y Condiciones</Link>
            </p>
          </div>
          
          {/* Botón volver arriba */}
          <motion.button
            className={styles.scrollTop}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>

      {/* Efecto de circuito de fondo */}
      <div className={styles.circuitBackground}></div>
    </footer>
  );
};

export default Footer;