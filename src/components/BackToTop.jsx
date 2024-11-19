import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../Styles/BackToTop.css'; // Importa el archivo CSS

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón si el usuario se desplaza hacia abajo
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200); // Aparece después de 200px de desplazamiento
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para volver al inicio de la página con desplazamiento suave
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          <ArrowUpwardIcon className="back-to-top-icon" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
