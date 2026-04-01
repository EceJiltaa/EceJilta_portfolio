import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import './App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Designs from './Designs';
import Certificates from './Certificates';
import Articles from './Articles';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    
  };

  return (
    <div className="App">
      <header className="header">
        <h1>{t("title")}</h1>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t("menu.about")}</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>{t("menu.projects")}</a>
          <a href="#certificates">{t("menu.certificates")}</a>
          <a href="#articles">{t("menu.articles")}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t("menu.contact")}</a>
        </nav>

        <div className="language-switch">
          <button onClick={() => {
            i18n.changeLanguage("tr");
            localStorage.setItem("lang", "tr");
          }}>TR</button>

          <button onClick={() => {
            i18n.changeLanguage("en");
            localStorage.setItem("lang", "en");
          }}>EN</button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      <main>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="designs"><Designs /></section>
        <section id="certificates"><Certificates /></section>
          <section id="articles"><Articles /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="footer">
        <p>{t("footer")}</p>
      </footer>
    </div>

  );
}

export default App;
