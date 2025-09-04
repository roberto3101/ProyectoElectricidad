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
  FaNetworkWired,
  FaArrowRight,
  FaCheckCircle,
  FaPhone
} from 'react-icons/fa';
import { MdElectricalServices } from 'react-icons/md';
import { GiMeshNetwork } from 'react-icons/gi';
import styles from './Services.module.css';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const services = [
    {
      id: 1,
      icon: <MdElectricalServices />,
      title: "Instalaciones Eléctricas",
      description: "Diseño e instalación completa de sistemas eléctricos industriales y residenciales con los más altos estándares de calidad.",
      features: [
        "Instalación de tableros eléctricos",
        "Cableado estructurado",
        "Sistemas de iluminación LED",
        "Instalaciones trifásicas"
      ],
      color: "#00d4ff",
      gradient: "linear-gradient(135deg, #00d4ff, #0099cc)"
    },
    {
      id: 2,
      icon: <FaTools />,
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento personalizados para garantizar el óptimo funcionamiento de tus equipos eléctricos.",
      features: [
        "Inspección termográfica",
        "Análisis de cargas",
        "Medición de tierras",
        "Pruebas de aislamiento"
      ],
      color: "#7209b7",
      gradient: "linear-gradient(135deg, #7209b7, #560bad)"
    },
    {
      id: 3,
      icon: <FaCog />,
      title: "Mantenimiento Correctivo",
      description: "Solución rápida y efectiva de fallas eléctricas con disponibilidad 24/7 para emergencias.",
      features: [
        "Diagnóstico de fallas",
        "Reparación de equipos",
        "Cambio de componentes",
        "Servicio de emergencia 24/7"
      ],
      color: "#ff6b35",
      gradient: "linear-gradient(135deg, #ff6b35, #f7931e)"
    },
    {
      id: 4,
      icon: <FaIndustry />,
      title: "Equipos Industriales",
      description: "Instalación y mantenimiento de maquinaria y equipos industriales de alta complejidad.",
      features: [
        "Motores industriales",
        "Variadores de frecuencia",
        "Sistemas de control",
        "Automatización industrial"
      ],
      color: "#00f5ff",
      gradient: "linear-gradient(135deg, #00f5ff, #00ccff)"
    },
    {
      id: 5,
      icon: <FaPaintBrush />,
      title: "Pintado Industrial",
      description: "Servicios profesionales de pintado industrial con recubrimientos especializados y duraderos.",
      features: [
        "Pintado epóxico",
        "Recubrimientos anticorrosivos",
        "Señalización industrial",
        "Preparación de superficies"
      ],
      color: "#ffd700",
      gradient: "linear-gradient(135deg, #ffd700, #ffed4e)"
    },
    {
      id: 6,
      icon: <GiMeshNetwork />,
      title: "Instalación Malla Raschel",
      description: "Instalación profesional de malla raschel para protección solar y delimitación de espacios.",
      features: [
        "Mallas de sombreo",
        "Cercos perimetrales",
        "Estructuras metálicas",
        "Mantenimiento de mallas"
      ],
      color: "#00ff88",
      gradient: "linear-gradient(135deg, #00ff88, #00cc6f)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.services} id="services">
      {/* Background Effects */}
      <div className={styles.bgPattern}></div>
      
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
            <span>Nuestros Servicios</span>
          </div>
          
          <h2 className={styles.title}>
            Soluciones Integrales
            <span className={styles.titleHighlight}> Eléctricas e Industriales</span>
          </h2>
          
          <p className={styles.subtitle}>
            Ofrecemos una amplia gama de servicios especializados con la más alta calidad,
            tecnología de vanguardia y personal altamente capacitado.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.cardWrapper}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className={styles.card}
                style={{
                  '--card-color': service.color,
                  '--card-gradient': service.gradient
                }}
              >
                {/* Card Background Effects */}
                <div className={styles.cardBg}></div>
                <div className={styles.cardGlow}></div>
                
                {/* Card Content */}
                <div className={styles.cardContent}>
                  {/* Icon */}
                  <motion.div 
                    className={styles.iconWrapper}
                    animate={{
                      rotate: hoveredCard === service.id ? 360 : 0
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={styles.iconBg}></div>
                    <span className={styles.icon}>{service.icon}</span>
                  </motion.div>

                  {/* Title */}
                  <h3 className={styles.cardTitle}>{service.title}</h3>

                  {/* Description */}
                  <p className={styles.cardDescription}>{service.description}</p>

                  {/* Features */}
                  <ul className={styles.features}>
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: hoveredCard === service.id ? 1 : 0.8,
                          x: hoveredCard === service.id ? 0 : -10
                        }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <FaCheckCircle className={styles.featureIcon} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.div 
                    className={styles.cardCta}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link to="/servicios" className={styles.cardLink}>
                      <span>Más información</span>
                      <FaArrowRight />
                    </Link>
                  </motion.div>
                </div>

                {/* Card Number */}
                <div className={styles.cardNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className={styles.bottomCta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className={styles.ctaText}>
            ¿Necesitas un servicio personalizado?
          </p>
          <Link to="/contacto" className={styles.ctaButton}>
            <FaPhone />
            <span>Contáctanos Ahora</span>
            <div className={styles.ctaGlow}></div>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.decorativeLines}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </section>
  );
};

export default Services;