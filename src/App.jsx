import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Componentes
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Páginas
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      {/* Efecto de partículas eléctricas de fondo */}
      <div className="electric-particles"></div>
      
      {/* Navegación */}
      <Navbar />
      
      {/* Contenido principal con animaciones */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;