import React, { useState } from "react";
import "./Certificates.css";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "İngilizce B1 - B1+ Sertifikası",
      description: "",
      year: "2019",
      image: "/EnglishIntermediate.png",
    },
    {
      title: "Career Development Katılım Sertifikası",
      description: "",
      year: "2019",
      image: "/CareerDevelopment.png",
    },
    {
      title: "Panel Konuşması",
      description: "Teknolojik Gelişmeler ve Kadın Mühendislerin Rolü",
      year: "2024",
      image: "/panel.jpg",
    },
    {
      title: "Agile 101",
      description: "Softtech tarafından düzenlenen bir çalışma prensibi eğitimi.",
      year: "2025",
      image: "Agile101_KatilimSertifikasi.png"
    }
  ];

  return (
    <section className="certificates">
      <h2>Eğitim ve Sertifikalarım</h2>
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

      {/* Modal (büyütülmüş görsel) */}
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
