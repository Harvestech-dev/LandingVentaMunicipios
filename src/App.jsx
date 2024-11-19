import React, { useState } from "react";
import { Container } from "@mui/material";
import HeroSection from "./components/HeroSection.jsx";
import Benefits from "./components/Benefits.jsx";
import Plans from "./components/Plans.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import NavBar from "./components/NavBar.jsx";
import Comparison from "./components/Comparison.jsx";
import CarouselFader from "./components/CarouselFader.jsx";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQ from "./components/FAQ.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="App">
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      <HeroSection />
      <Container>
        {/*         <ReasonsToBeOnline/>
         */}
        <CarouselFader />
        <Benefits />
        <Plans />
        <Comparison />
        <Testimonials />
        <FAQ />
        <BackToTop />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

/* 
Separar css en archivos
Agregar variables (padding, Border Radius, etc)
*/
