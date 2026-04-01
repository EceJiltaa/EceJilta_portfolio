import React, { useState } from "react";
import "./Certificates.css";
import { useTranslation } from "react-i18next";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();

  const certificates = [
    {
      title: t("certificates.items.data.title"),
      description: t("certificates.items.data.desc"),
      year: "2025",
      image: process.env.PUBLIC_URL + "/VeriAnaliziEgitimiKatilimBelgesi.png"
    },
    {
      title: t("certificates.items.cyber.title"),
      description: t("certificates.items.cyber.desc"),
      year: "2025",
      image: process.env.PUBLIC_URL + "/SiberGuvenlikEgitimiKatilimBelgesi.png"
    },
    {
      title: t("certificates.items.rpa.title"),
      description: t("certificates.items.rpa.desc"),
      year: "2025",
      image: process.env.PUBLIC_URL + "/RoboticProcessAutomationEgitimiKatilimBelgesi.png"
    },
    {
      title: t("certificates.items.agile.title"),
      description: t("certificates.items.agile.desc"),
      year: "2025",
      image: process.env.PUBLIC_URL + "/Agile101_KatilimSertifikasi.png"
    },
    {
      title: t("certificates.items.panel.title"),
      description: t("certificates.items.panel.desc"),
      year: "2024",
      image: process.env.PUBLIC_URL + "/panel.jpg"
    },
    {
      title: t("certificates.items.english.title"),
      description: "",
      year: "2019",
      image: process.env.PUBLIC_URL + "/EnglishIntermediate.png"
    },
    {
      title: t("certificates.items.career.title"),
      description: "",
      year: "2019",
      image: process.env.PUBLIC_URL + "/CareerDevelopment.png"
    }
  ];

  return (
    <section className="certificates">
      <h2>{t("certificates.title")}</h2>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img
              src={cert.image}
              alt={cert.title}
              onClick={() => setSelectedImage(cert.image)}
            />

            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <span>{cert.year}</span>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="certificate" />
        </div>
      )}
    </section>
  );
}

export default Certificates;