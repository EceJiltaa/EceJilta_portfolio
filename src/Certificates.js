import React, { useState } from "react";
import "./Certificates.css";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "İngilizce B1 - B1+ Sertifikası",
      description: "",
      year: "2019",
      image: {'${process.env.PUBLIC_URL}/EnglishIntermediate.png'},
    },
    {
      title: "Career Development Katılım Sertifikası",
      description: "",
      year: "2019",
      image: {'${process.env.PUBLIC_URL}/CareerDevelopment.png'},
    },
    {
      title: "Panel Konuşması",
      description: "Teknolojik Gelişmeler ve Kadın Mühendislerin Rolü",
      year: "2024",
      image: {'${process.env.PUBLIC_URL}/panel.jpg'},
    },
    {
      title: "Agile 101",
      description: "Softtech tarafından düzenlenen bir çalışma prensibi eğitimi.",
      year: "2025",
      image: {'${process.env.PUBLIC_URL}/Agile101_KatilimSertifikasi.png'},
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
