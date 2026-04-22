import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';


function About() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const isTurkish = i18n.language.startsWith("tr");

  const cvFile = isTurkish
    ? "/EceJilta_CV_TR.pdf"
    : "/EceJilta_CV_EN.pdf";

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
                <li>🎨 CSS</li>
                <li>🧠 JavaScript</li>
                <li>⚛️ React</li>
                <li>📱 Responsive Design</li>
                <li>💻 Python</li>
                <li>💻 C#</li>
                <li>🛢️ MySQL</li>
                <li>🧪 Testing</li>
                <li>🔧 Git & GitHub</li>
                <li>💡 WordPress</li>
                <li>🧑‍💻 VS Code</li>
                <li>🧑‍💻 VS</li>
                <li>📋 Jira</li>
                <li>💡 Canva</li>
                <li>💡 Web Design</li>
                <li>💡 Visual Design</li>
                <li>🎬 Video Editing</li>
                <li>💡 User Interface Design</li>
                <li>🧩 Template & Document Design </li>
                <li>🧾 Documentation</li>
                <li>🎯 Problem Solving</li>
                <li>🔍 Attention to Detail</li>
                <li>⌨️ Data Entry</li>
                <li>🤝 Teamwork</li>
          </ul>

          <a 
            href={process.env.PUBLIC_URL + cvFile}
            download
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