"use client";

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleDarkMode = () => {
  // État pour suivre le thème
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Charger le thème depuis localStorage au chargement de la page
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme} aria-label="Toggle Dark Mode" className='hover:scale-110'>
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ToggleDarkMode;
