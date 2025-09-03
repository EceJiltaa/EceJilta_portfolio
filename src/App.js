import React, { useState } from 'react';
import './App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Designs from './Designs';
import Certificates from './Certificates';
import Articles from './Articles';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Ece Jılta | Portfolyo</h1>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Hakkımda</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projeler</a>
          <a href="#certificates">Eğitimler</a>
          <a href="#articles">Raporlar</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>İletişim</a>
        </nav>
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
        <p>© 2025 Ece. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>

  );
}

export default App;
