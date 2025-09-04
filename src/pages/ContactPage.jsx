import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBolt, 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaDirections,
  FaBuilding,
  FaParking,
  FaBus,
  FaCheckCircle
} from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import Contact from '../components/Contact/Contact';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const offices = [
    {
      id: 'main',
      name: 'Oficina Principal',
      address: 'Av. Industrial 1234, Lima',
      phone: '+51 999 999 999',
      email: 'info@electripro.pe',
      hours: 'Lun - Vie: 8:00 AM - 6:00 PM',
      image: '/office1.jpg',
      features: ['Estacionamiento', 'Sala de reuniones', 'Showroom']
    },
    {
      id: 'warehouse',
      name: 'Almacén y Taller',
      address: 'Jr. Los Electricistas 567, Callao',
      phone: '+51 999 888 777',
      email: 'taller@electripro.pe',
      hours: 'Lun - Sab: 7:00 AM - 5:00 PM',
      image: '/warehouse.jpg',
      features: ['Zona de carga', 'Taller equipado', 'Stock de repuestos']
    }
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo toman en responder a una emergencia?',
      answer: 'Nuestro tiempo de respuesta para emergencias es de menos de 2 horas en Lima Metropolitana. Contamos con equipos de guardia 24/7.'
    },
    {
      question: '¿Ofrecen garantía en sus servicios?',
      answer: 'Sí, todos nuestros servicios incluyen garantía. Las instalaciones tienen 5 años de garantía y los mantenimientos 1 año.'
    },
    {
      question: '¿Trabajan con empresas de todos los tamaños?',
      answer: 'Absolutamente. Atendemos desde pequeños negocios hasta grandes industrias, adaptando nuestros servicios a cada necesidad.'
    },
    {
      question: '¿Realizan cotizaciones sin costo?',
      answer: 'Sí, realizamos evaluaciones y cotizaciones sin costo ni compromiso. Nuestros técnicos visitarán sus instalaciones para hacer un diagnóstico preciso.'
    },
    {
      question: '¿Qué certificaciones tienen?',
      answer: 'Contamos con certificación ISO 9001:2015, licencia MINEM, certificación OSINERGMIN y todos nuestros técnicos están certificados.'
    }
  ];

  const contactMethods = [
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      description: 'Respuesta inmediata',
      action: 'Chat ahora',
      link: 'https://wa.me/51999999999',
      color: '#25d366',
      available: true
    },
    {
      icon: <FaPhone />,
      title: 'Llamada directa',
      description: 'Atención personalizada',
      action: 'Llamar ahora',
      link: 'tel:+51999999999',
      color: '#00d4ff',
      available: true
    },
    {
      icon: <MdEmail />,
      title: 'Correo electrónico',
      description: 'Respuesta en 24h',
      action: 'Enviar email',
      link: 'mailto:info@electripro.pe',
      color: '#7209b7',
      available: true
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visita presencial',
      description: 'Ven a conocernos',
      action: 'Ver ubicación',
      link: '#map',
      color: '#ff6b35',
      available: true
    }
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      className="contact-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-bg">
          <div className="connection-lines"></div>
          <div className="energy-pulses"></div>
        </div>
        
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <FaBolt />
            <span>Contacto</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Estamos aquí
            <span className="title-highlight"> Para Ti</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Múltiples canales de comunicación para atenderte mejor
          </motion.p>

          <motion.div 
            className="quick-contacts"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="tel:+51999999999" className="quick-contact-item">
              <FaPhone />
              <span>999 999 999</span>
            </a>
            <a href="https://wa.me/51999999999" className="quick-contact-item whatsapp">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
            <a href="mailto:info@electripro.pe" className="quick-contact-item">
              <FaEnvelope />
              <span>Email</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="contact-methods">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Elige cómo
              <span className="title-highlight"> Contactarnos</span>
            </h2>
          </motion.div>

          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                className="method-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ '--method-color': method.color }}
              >
                <div className="method-icon">
                  {method.icon}
                  {method.available && <span className="available-dot"></span>}
                </div>
                <h3 className="method-title">{method.title}</h3>
                <p className="method-description">{method.description}</p>
                <span className="method-action">
                  {method.action}
                  <FaDirections />
                </span>
                <div className="method-glow"></div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Component */}
      <Contact />

      {/* Offices Section */}
      <section className="offices">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Nuestras
              <span className="title-highlight"> Ubicaciones</span>
            </h2>
          </motion.div>

          <div className="offices-grid">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                className="office-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="office-image">
                  <FaBuilding className="office-icon" />
                  <div className="office-overlay"></div>
                </div>
                
                <div className="office-info">
                  <h3 className="office-name">{office.name}</h3>
                  
                  <div className="office-details">
                    <div className="detail-item">
                      <MdLocationOn />
                      <span>{office.address}</span>
                    </div>
                    <div className="detail-item">
                      <FaPhone />
                      <span>{office.phone}</span>
                    </div>
                    <div className="detail-item">
                      <MdEmail />
                      <span>{office.email}</span>
                    </div>
                    <div className="detail-item">
                      <FaClock />
                      <span>{office.hours}</span>
                    </div>
                  </div>

                  <div className="office-features">
                    {office.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        <FaCheckCircle />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="office-directions">
                    <FaDirections />
                    <span>Cómo llegar</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Preguntas
              <span className="title-highlight"> Frecuentes</span>
            </h2>
          </motion.div>

          <div className="faqs-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="faq-question">
                  <FaBolt className="faq-icon" />
                  <h3>{faq.question}</h3>
                </div>
                <p className="faq-answer">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="emergency-cta">
        <div className="container">
          <motion.div 
            className="emergency-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="emergency-icon">
              <FaBolt />
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
            </div>
            
            <h2 className="emergency-title">¿Tienes una emergencia eléctrica?</h2>
            <p className="emergency-subtitle">
              Estamos disponibles 24/7 para atender tus emergencias
            </p>
            
            <div className="emergency-actions">
              <a href="tel:+51999999999" className="emergency-btn primary">
                <FaPhone />
                <span>Llamar Ahora</span>
              </a>
              <a href="https://wa.me/51999999999?text=Tengo%20una%20emergencia%20eléctrica" className="emergency-btn secondary">
                <FaWhatsapp />
                <span>WhatsApp Urgente</span>
              </a>
            </div>
            
            <p className="emergency-note">
              Tiempo de respuesta: menos de 2 horas en Lima Metropolitana
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;