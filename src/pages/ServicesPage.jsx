import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBolt, 
  FaTools, 
  FaCog,
  FaPaintBrush,
  FaShieldAlt,
  FaIndustry,
  FaWrench,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaClock,
  FaAward,
  FaChartLine,
  FaLightbulb,
  FaNetworkWired,
  FaServer,
  FaSolarPanel
} from 'react-icons/fa';
import { MdElectricalServices, MdSecurity, MdEngineering } from 'react-icons/md';
import { GiMeshNetwork, GiElectric, GiPowerGenerator } from 'react-icons/gi';
import Services from '../components/Services/Services';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const detailedServices = [
    {
      id: 'electrical',
      icon: <MdElectricalServices />,
      title: 'Instalaciones Eléctricas Completas',
      shortDesc: 'Diseño, instalación y puesta en marcha de sistemas eléctricos',
      fullDesc: 'Realizamos instalaciones eléctricas completas para industrias, comercios y residencias. Nuestro equipo de expertos garantiza la máxima seguridad y eficiencia en cada proyecto.',
      image: '/electrical-bg.jpg',
      features: [
        { icon: <FaLightbulb />, title: 'Iluminación LED', desc: 'Sistemas de iluminación eficiente y moderna' },
        { icon: <FaNetworkWired />, title: 'Cableado Estructurado', desc: 'Instalación de redes eléctricas organizadas' },
        { icon: <FaServer />, title: 'Tableros Eléctricos', desc: 'Diseño e instalación de tableros de distribución' },
        { icon: <FaSolarPanel />, title: 'Energía Solar', desc: 'Instalación de paneles solares y sistemas fotovoltaicos' }
      ],
      benefits: [
        'Ahorro energético de hasta 40%',
        'Garantía de 5 años en instalaciones',
        'Cumplimiento de normativas vigentes',
        'Mantenimiento preventivo incluido'
      ],
      process: [
        { step: 1, title: 'Evaluación', desc: 'Análisis detallado de necesidades' },
        { step: 2, title: 'Diseño', desc: 'Propuesta técnica personalizada' },
        { step: 3, title: 'Instalación', desc: 'Ejecución profesional del proyecto' },
        { step: 4, title: 'Pruebas', desc: 'Verificación y certificación' }
      ],
      gradient: 'linear-gradient(135deg, #00d4ff, #0099cc)'
    },
    {
      id: 'preventive',
      icon: <FaTools />,
      title: 'Mantenimiento Preventivo',
      shortDesc: 'Programas de mantenimiento para prevenir fallas',
      fullDesc: 'Nuestros programas de mantenimiento preventivo están diseñados para maximizar la vida útil de sus equipos y minimizar los tiempos de inactividad.',
      image: '/preventive-bg.jpg',
      features: [
        { icon: <FaChartLine />, title: 'Análisis Predictivo', desc: 'Detección temprana de posibles fallas' },
        { icon: <MdSecurity />, title: 'Inspecciones Regulares', desc: 'Revisiones programadas de equipos' },
        { icon: <FaClock />, title: 'Cronogramas Flexibles', desc: 'Adaptados a sus necesidades operativas' },
        { icon: <FaAward />, title: 'Certificaciones', desc: 'Documentación completa de mantenimientos' }
      ],
      benefits: [
        'Reducción del 60% en paradas no programadas',
        'Extensión de vida útil de equipos',
        'Optimización del rendimiento',
        'Historial digital de mantenimientos'
      ],
      process: [
        { step: 1, title: 'Diagnóstico', desc: 'Evaluación inicial de equipos' },
        { step: 2, title: 'Planificación', desc: 'Calendario de mantenimientos' },
        { step: 3, title: 'Ejecución', desc: 'Mantenimiento según protocolo' },
        { step: 4, title: 'Reporte', desc: 'Informe detallado de actividades' }
      ],
      gradient: 'linear-gradient(135deg, #7209b7, #560bad)'
    },
    {
      id: 'corrective',
      icon: <FaWrench />,
      title: 'Mantenimiento Correctivo',
      shortDesc: 'Reparación rápida y efectiva de fallas',
      fullDesc: 'Servicio de emergencia 24/7 para solucionar cualquier falla eléctrica o de equipos industriales con respuesta inmediata.',
      image: '/corrective-bg.jpg',
      features: [
        { icon: <FaClock />, title: '24/7 Disponible', desc: 'Atención de emergencias las 24 horas' },
        { icon: <GiElectric />, title: 'Respuesta Rápida', desc: 'Tiempo de respuesta menor a 2 horas' },
        { icon: <MdEngineering />, title: 'Técnicos Especializados', desc: 'Personal altamente capacitado' },
        { icon: <FaTools />, title: 'Stock de Repuestos', desc: 'Amplio inventario de componentes' }
      ],
      benefits: [
        'Minimización de tiempos muertos',
        'Diagnóstico preciso de fallas',
        'Garantía en reparaciones',
        'Presupuestos transparentes'
      ],
      process: [
        { step: 1, title: 'Llamada', desc: 'Recepción de emergencia' },
        { step: 2, title: 'Respuesta', desc: 'Desplazamiento inmediato' },
        { step: 3, title: 'Diagnóstico', desc: 'Identificación del problema' },
        { step: 4, title: 'Solución', desc: 'Reparación efectiva' }
      ],
      gradient: 'linear-gradient(135deg, #ff6b35, #f7931e)'
    },
    {
      id: 'industrial',
      icon: <FaIndustry />,
      title: 'Equipos Industriales',
      shortDesc: 'Instalación y mantenimiento de maquinaria pesada',
      fullDesc: 'Especialistas en equipos industriales de alta complejidad, desde instalación hasta mantenimiento especializado.',
      image: '/industrial-bg.jpg',
      features: [
        { icon: <GiPowerGenerator />, title: 'Generadores', desc: 'Instalación de plantas eléctricas' },
        { icon: <FaCog />, title: 'Motores Industriales', desc: 'Mantenimiento de motores de alta potencia' },
        { icon: <FaServer />, title: 'Automatización', desc: 'Sistemas de control automatizado' },
        { icon: <FaChartLine />, title: 'Optimización', desc: 'Mejora de eficiencia energética' }
      ],
      benefits: [
        'Aumento de productividad del 35%',
        'Reducción de consumo energético',
        'Menor desgaste de equipos',
        'Capacitación de personal incluida'
      ],
      process: [
        { step: 1, title: 'Análisis', desc: 'Estudio de requerimientos' },
        { step: 2, title: 'Propuesta', desc: 'Solución técnica integral' },
        { step: 3, title: 'Implementación', desc: 'Instalación y configuración' },
        { step: 4, title: 'Capacitación', desc: 'Entrenamiento de operadores' }
      ],
      gradient: 'linear-gradient(135deg, #00f5ff, #00ccff)'
    },
    {
      id: 'painting',
      icon: <FaPaintBrush />,
      title: 'Pintado Industrial',
      shortDesc: 'Recubrimientos especializados y protección anticorrosiva',
      fullDesc: 'Aplicación de pinturas y recubrimientos industriales especializados para protección y estética de instalaciones.',
      image: '/painting-bg.jpg',
      features: [
        { icon: <FaShieldAlt />, title: 'Protección Anticorrosiva', desc: 'Recubrimientos de alta resistencia' },
        { icon: <FaPaintBrush />, title: 'Pintado Epóxico', desc: 'Aplicación de resinas epóxicas' },
        { icon: <MdSecurity />, title: 'Señalización', desc: 'Demarcación de seguridad industrial' },
        { icon: <FaAward />, title: 'Acabados Premium', desc: 'Terminaciones de alta calidad' }
      ],
      benefits: [
        'Protección por más de 10 años',
        'Resistencia a químicos y abrasión',
        'Cumplimiento de normas de seguridad',
        'Mejora estética de instalaciones'
      ],
      process: [
        { step: 1, title: 'Preparación', desc: 'Tratamiento de superficies' },
        { step: 2, title: 'Aplicación', desc: 'Pintado con técnicas especializadas' },
        { step: 3, title: 'Secado', desc: 'Proceso controlado de curado' },
        { step: 4, title: 'Inspección', desc: 'Control de calidad final' }
      ],
      gradient: 'linear-gradient(135deg, #ffd700, #ffed4e)'
    },
    {
      id: 'mesh',
      icon: <GiMeshNetwork />,
      title: 'Malla Raschel',
      shortDesc: 'Instalación profesional de mallas de protección',
      fullDesc: 'Instalación de malla raschel para sombreo, protección y delimitación de espacios industriales y comerciales.',
      image: '/mesh-bg.jpg',
      features: [
        { icon: <FaShieldAlt />, title: 'Protección Solar', desc: 'Reducción de hasta 90% de radiación UV' },
        { icon: <GiMeshNetwork />, title: 'Cercos Perimetrales', desc: 'Delimitación segura de áreas' },
        { icon: <FaWrench />, title: 'Estructuras Metálicas', desc: 'Soportes resistentes y duraderos' },
        { icon: <FaTools />, title: 'Mantenimiento', desc: 'Servicio de reparación y tensado' }
      ],
      benefits: [
        'Vida útil de más de 15 años',
        'Reducción de temperatura ambiente',
        'Protección contra viento y polvo',
        'Instalación rápida y limpia'
      ],
      process: [
        { step: 1, title: 'Medición', desc: 'Levantamiento de área' },
        { step: 2, title: 'Estructura', desc: 'Instalación de soportes' },
        { step: 3, title: 'Colocación', desc: 'Instalación de malla' },
        { step: 4, title: 'Tensado', desc: 'Ajuste y acabados finales' }
      ],
      gradient: 'linear-gradient(135deg, #00ff88, #00cc6f)'
    }
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <motion.div
      className="services-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-bg">
          <div className="electric-grid"></div>
          <div className="floating-particles"></div>
        </div>
        
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <FaBolt />
            <span>Servicios Profesionales</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Soluciones Eléctricas
            <span className="title-highlight"> e Industriales</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Más de 15 años brindando servicios de calidad con tecnología de vanguardia
          </motion.p>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">200+</span>
              <span className="stat-label">Clientes</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Disponibilidad</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Garantizado</span>
            </div>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaBolt />
          </motion.div>
        </div>
      </section>

      {/* Main Services Component */}
      <Services />

      {/* Detailed Services Section */}
      <section className="detailed-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Conoce Nuestros Servicios
              <span className="title-highlight"> En Detalle</span>
            </h2>
          </div>

          <div className="services-detail-grid">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-detail-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleServiceClick(service)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="card-header" style={{ background: service.gradient }}>
                  <span className="card-icon">{service.icon}</span>
                  <h3 className="card-title">{service.title}</h3>
                </div>
                
                <div className="card-body">
                  <p className="card-description">{service.shortDesc}</p>
                  
                  <div className="card-features">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="mini-feature">
                        {feature.icon}
                        <span>{feature.title}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="card-btn">
                    <span>Ver más detalles</span>
                    <FaArrowRight />
                  </button>
                </div>

                <div className="card-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <motion.div 
          className="service-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header" style={{ background: selectedService.gradient }}>
              <span className="modal-icon">{selectedService.icon}</span>
              <h2 className="modal-title">{selectedService.title}</h2>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedService.fullDesc}</p>

              <div className="modal-features">
                <h3>Características</h3>
                <div className="features-grid">
                  {selectedService.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="feature-item"
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <span className="feature-icon">{feature.icon}</span>
                      <div className="feature-content">
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-benefits">
                <h3>Beneficios</h3>
                <div className="benefits-list">
                  {selectedService.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <FaCheckCircle />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-process">
                <h3>Nuestro Proceso</h3>
                <div className="process-timeline">
                  {selectedService.process.map((step, index) => (
                    <div key={index} className="process-step">
                      <div className="step-number">{step.step}</div>
                      <div className="step-content">
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-cta">
                <Link to="/contacto" className="cta-button">
                  <FaPhone />
                  <span>Solicitar Este Servicio</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">¿Listo para mejorar tu infraestructura eléctrica?</h2>
            <p className="cta-subtitle">
              Contáctanos hoy y recibe una cotización personalizada sin compromiso
            </p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn-primary">
                <FaPhone />
                <span>Cotizar Ahora</span>
              </Link>
              <a href="https://wa.me/51999999999" className="btn-secondary">
                <FaBolt />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;