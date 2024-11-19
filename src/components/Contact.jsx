import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

import '../Styles/contactAbout.css'

function ContactWithAbout() {
  return (
    <Box
className='contact-with-about'
      
    >
            {/* About Section */}
            <Box
className="about-section"
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Sobre Harvestech
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Harvestech es una empresa dedicada al desarrollo de soluciones
          tecnológicas innovadoras, enfocadas en la transformación digital de
          municipios y organizaciones. Nuestra misión es conectar comunidades
          mediante herramientas efectivas y fáciles de usar.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          href="https://harvestech.dev"
          target="_blank"
        >
          Visítanos en harvestech.dev
        </Button>
      </Box>
      {/* Contact Form */}
      <Box
className="contact-form"
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Contáctanos
        </Typography>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Correo Electrónico"
          type="email"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Mensaje"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Enviar
        </Button>
      </Box>


    </Box>
  );
}

export default ContactWithAbout;
