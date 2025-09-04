import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaUser,
  FaBuilding,
  FaPaperPlane,
  FaBolt,
  FaCheckCircle,
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import { MdElectricBolt, MdEmail } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const services = [
    'Instalaciones Eléctricas',
    'Mantenimiento Preventivo',
    'Mantenimiento Correctivo',
    'Equipos Industriales',
    'Pintado Industrial',
    'Instalación Malla Raschel',
    'Otro'
  ];

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Teléfono',
      content: '+51 999 999 999',
      link: 'tel:+51999999999',
      color: '#00d4ff'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      content: '+51 999 999 999',
      link: 'https://wa.me/51999999999',
      color: '#25d366'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@electripro.pe',
      link: 'mailto:info@electripro.pe',
      color: '#7209b7'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Ubicación',
      content: 'Lima, Perú',
      link: '#',
      color: '#ff6b35'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', name: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', name: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/51999999999', name: 'WhatsApp' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

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
    <section className={styles.contact} id="contact">
      {/* Background Effects */}
      <div className={styles.bgPattern}></div>
      <div className={styles.electricGrid}></div>
      
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
            <span>Contacto</span>
          </div>
          
          <h2 className={styles.title}>
            Conecta con
            <span className={styles.titleHighlight}> Nosotros</span>
          </h2>
          
          <p className={styles.subtitle}>
            Estamos aquí para ayudarte con todas tus necesidades eléctricas e industriales. 
            Contáctanos y recibe una cotización personalizada.
          </p>
        </motion.div>

        <div className={styles.mainContent}>
          {/* Left Side - Contact Info */}
          <motion.div 
            className={styles.infoSection}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className={styles.infoCard}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 20px 40px ${info.color}33`
                  }}
                  style={{ '--card-color': info.color }}
                >
                  <div className={styles.infoIcon}>
                    {info.icon}
                    <div className={styles.iconGlow}></div>
                  </div>
                  <div className={styles.infoContent}>
                    <h4 className={styles.infoTitle}>{info.title}</h4>
                    <p className={styles.infoText}>{info.content}</p>
                  </div>
                  <div className={styles.cardDecoration}></div>
                </motion.a>
              ))}
            </div>

            {/* Working Hours */}
            <motion.div 
              className={styles.workingHours}
              variants={itemVariants}
            >
              <div className={styles.hoursHeader}>
                <FaClock className={styles.hoursIcon} />
                <h3 className={styles.hoursTitle}>Horario de Atención</h3>
              </div>
              <div className={styles.hoursContent}>
                <div className={styles.hourItem}>
                  <span className={styles.day}>Lunes - Viernes</span>
                  <span className={styles.time}>8:00 AM - 6:00 PM</span>
                </div>
                <div className={styles.hourItem}>
                  <span className={styles.day}>Sábado</span>
                  <span className={styles.time}>9:00 AM - 2:00 PM</span>
                </div>
                <div className={styles.hourItem}>
                  <span className={styles.day}>Emergencias 24/7</span>
                  <span className={styles.time}>Siempre Disponible</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className={styles.socialSection}
              variants={itemVariants}
            >
              <h3 className={styles.socialTitle}>Síguenos</h3>
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
                      rotate: 360
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className={styles.formSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <MdElectricBolt className={styles.formIcon} />
                <h3 className={styles.formTitle}>Solicita tu Cotización</h3>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGrid}>
                  {/* Name Field */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      <FaUser className={styles.labelIcon} />
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`${styles.input} ${focusedField === 'name' ? styles.focused : ''}`}
                      required
                    />
                    <div className={styles.inputGlow}></div>
                  </div>

                  {/* Email Field */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      <MdEmail className={styles.labelIcon} />
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`${styles.input} ${focusedField === 'email' ? styles.focused : ''}`}
                      required
                    />
                    <div className={styles.inputGlow}></div>
                  </div>

                  {/* Phone Field */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      <FaPhone className={styles.labelIcon} />
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`${styles.input} ${focusedField === 'phone' ? styles.focused : ''}`}
                      required
                    />
                    <div className={styles.inputGlow}></div>
                  </div>

                  {/* Company Field */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      <FaBuilding className={styles.labelIcon} />
                      Empresa (Opcional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className={`${styles.input} ${focusedField === 'company' ? styles.focused : ''}`}
                    />
                    <div className={styles.inputGlow}></div>
                  </div>
                </div>

                {/* Service Select */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <FaBolt className={styles.labelIcon} />
                    Servicio Requerido
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    className={`${styles.select} ${focusedField === 'service' ? styles.focused : ''}`}
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className={styles.inputGlow}></div>
                </div>

                {/* Message Field */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    <BiMessageDetail className={styles.labelIcon} />
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`${styles.textarea} ${focusedField === 'message' ? styles.focused : ''}`}
                    rows="5"
                    required
                  ></textarea>
                  <div className={styles.inputGlow}></div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <div className={styles.spinner}></div>
                  ) : (
                    <>
                      <FaPaperPlane className={styles.submitIcon} />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                  <div className={styles.btnGlow}></div>
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div 
                    className={styles.successMessage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <FaCheckCircle />
                    <span>¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className={styles.mapSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.mapContainer}>
            <div className={styles.mapPlaceholder}>
              <FaMapMarkerAlt className={styles.mapIcon} />
              <p>Lima, Perú</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.decorativeElements}>
        <div className={styles.electricBolt1}></div>
        <div className={styles.electricBolt2}></div>
      </div>
    </section>
  );
};

export default Contact;