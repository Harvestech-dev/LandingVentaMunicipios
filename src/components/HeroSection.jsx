import React from 'react';
import { Button } from '@mui/material';

import './HeroSection.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transforma tu Municipio</h1>
        <p>
          Con nuestros planes diseñados especialmente para gobiernos locales, moderniza tu presencia digital y conecta con tu comunidad de forma eficiente.
        </p>
<Button variant='contained' size='large'>CALL TO ACTION</Button>
      </div>
    </section>
  );
}

export default Hero;
