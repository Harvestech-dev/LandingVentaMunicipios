import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

import '../Styles/footer.css'
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--color-secondary)",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
{/*       <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
        <Link href="#home" underline="hover" color="inherit">
          Inicio
        </Link>
        <Link href="#plans" underline="hover" color="inherit">
          Planes
        </Link>
      </Box> */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}>
        <IconButton href="https://facebook.com" target="_blank" color="inherit">
          <Facebook />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" color="inherit">
          <Twitter />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" color="inherit">
          <Instagram />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" color="inherit">
          <LinkedIn />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
        &copy; {new Date().getFullYear()} Harvestech. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;
