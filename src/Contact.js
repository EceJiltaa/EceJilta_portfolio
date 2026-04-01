import React from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <h2>{t("contact.title")}</h2>

      <p>{t("contact.text")}</p>
      
      <ul>
        <li>Email: ecejiltaa@gmail.com</li>

        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ece-j%C4%B1lta-11667232a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>

        <li>
          GitHub:{" "}
          <a
            href="https://github.com/EceJiltaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;