import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={process.env.PUBLIC_URL+'/EceJilta.jpg'} alt="EceJilta" />
        </div>
        <div className="about-text">
          <h2>Merhaba, ben Ece </h2>
          <h3>Bursa Uludağ Üniversitesi - Bilgisayar Mühendisliği </h3>
          <p>
            Web geliştirme ve tasarım tutkunu biriyim. Modern teknolojileri takip ederek kullanıcı odaklı projeler üretiyorum. React, JavaScript, HTML ve CSS alanlarında kendimi geliştirmeye devam ediyorum. Ayrıca aktif olarak Canva'da tasarımlar yapıyorum.
          </p>
          <p>
            Öğrenmeye açık, meraklı ve yeni teknolojilere hızlı uyum sağlayabilen bir geliştiriciyim.
          </p>
          <h4>Bildiğim Teknolojiler:</h4>
          <ul className="skills">
            <li>💻 HTML</li>
            <li>💻 Python</li>
            <li>💻 C#</li>
            <li>🎨 CSS</li>
            <li>⚛️ React</li>
            <li>🧠 JavaScript</li>
            <li>💡 Canva</li>
            <li>💡 Figma</li>
            <li>🔧 Git & GitHub</li>
            <li> 🖹 Microsoft Office </li>
          </ul>

          {/* Buraya CV indir butonu eklendi */}
          <a 
            href="/EceJilta_cv.pdf" 
            download="EceJilta_cv.pdf" 
            className="cv-button"
          >
            CV’mi İndir
          </a>

          <div className="social-buttons">
            <a
              href="https://www.linkedin.com/in/ece-j%C4%B1lta-11667232a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button linkedin"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/EceJiltaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button github"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default About;

