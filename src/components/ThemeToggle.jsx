import React, { useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
    </button>
  );
}

export default ThemeToggle;
