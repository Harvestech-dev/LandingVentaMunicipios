import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

function ContactWithAbout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "80vh",
        gap: 4,
        padding: "40px 20px",
      }}
    >
      {/* Contact Form */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "var(--color-secondary-light)",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
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

      {/* About Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
          textAlign: "center",
        }}
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
    </Box>
  );
}

export default ContactWithAbout;
