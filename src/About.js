import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={process.env.PUBLIC_URL+'/EceJilta.jpg'} alt="EceJilta" />
        </div>
        <div className="about-text">
          <h2>{t("about.title")}</h2>
          <h3>{t("about.university")}</h3>

          <p>
            {t("about.description1")}
          </p>

          <p>
            {t("about.description2")}
          </p>

          <h4>{t("about.skillsTitle")}</h4>

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

          <a 
            href={process.env.PUBLIC_URL + "/EceJilta_CV_TR.pdf"} 
            download="EceJilta_CV_TR.pdf" 
            className="cv-button"
          >
            {t("about.downloadCV")}
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