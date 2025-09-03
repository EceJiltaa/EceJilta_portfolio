import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Portfolyom",
      desc: "Kendi kişisel portfolyo sitem. React ile geliştirildi.",
      tech: ["React", "CSS", "HTML"],
      img: process.env.PUBLIC_URL + "/Portfolyo.png",
      link: "https://github.com/EceJiltaa/EceJilta_portfolio.git"
    },
    {
      title: "I'Chef Pizza",
      desc: "Bir pizza restoranının web sitesi",
      tech: ["HTML", "CSS", "JavaScript"],
      img: process.env.PUBLIC_URL + "/IchefWeb.png",
      link: "https://ichefpizza.com/ichefpizza/"
    },
    {
      title: "Banka Otomasyonu",
      desc: "Görsel Programlama dersi projesi olarak yapılmıştır.",
      tech: ["C#"],
      img: process.env.PUBLIC_URL + "/bankaoto.png",
      link: "https://github.com/EceJiltaa/Bank_Automation.git"
    },
    {
      title: "Pansiyon Kayıt Otomasyonu",
      desc: "Ödev amaçlı hazırlanmıştır.",
      tech: ["MySQL", "UML Diyagramı"],
      img: process.env.PUBLIC_URL + "/pansiyonKayitUMLDiyagrami.png",
    },
    {
      title: "Temassız Kalp Atış Hızı Ölçme (Bitirme Projesi)",
      desc: "Görüntü işleme ile Python kullanılarak geliştirildi.",
      tech: ["Python", "OpenCV"],
      img: process.env.PUBLIC_URL + "/ecebitirme.png",
      link: "https://github.com/EceJiltaa/Bitirme-Projesi---Temassiz-Kalp-Atis-Hizi-Olcme.git"
    },
    {
      title: "Diyetisyen Otomasyonu",
      desc: "Veri yapıları dersine uygun olarak ağaç, grafik, bağlantılı liste gibi veri yapıları kullanılarak hazırlanmıştır.",
      tech: ["C"],
      img: process.env.PUBLIC_URL + "/diyetisyenoto.png",
      link: "https://github.com/EceJiltaa/Dietitian-Automation.git"
    },
    {
      title: "See You Grow",
      desc: "Bir şirketin web sitesi",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      video: "Proje.mp4",
      link: "https://github.com/EceJiltaa/Spectra-Website.git"
    }
  ];

  return (
    <div className="projects">
      <h2>Yazılım Projelerim</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* Resim veya video göster */}
                {project.img && (
                  <img src={project.img} alt={project.title} />
                )}
                {project.video && (
                  <video controls width="100%">
                  <source src={project.video} type="video/mp4" />
                  Tarayıcınız bu videoyu desteklemiyor.
                  </video>
                )}

                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p>Teknolojiler: {project.tech.join(", ")}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                İncele
                </a>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default Projects;
