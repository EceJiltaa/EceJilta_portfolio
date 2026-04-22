import React from 'react';
import './Projects.css';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.items.portfolio.title"),
      desc: t("projects.items.portfolio.desc"),
      tech: ["React", "CSS", "HTML"],
      img: process.env.PUBLIC_URL + "/Portfolyo.png",
      link: "https://github.com/EceJiltaa/EceJilta_portfolio.git"
    },
    {
      title: t("projects.items.pizza.title"),
      desc: t("projects.items.pizza.desc"),
      tech: ["HTML", "CSS", "JavaScript"],
      img: process.env.PUBLIC_URL + "/IchefWeb.png",
      link: "https://ichefpizza.com/ichefpizza/"
    },
    {
      title: t("projects.items.spectra.title"),
      desc: t("projects.items.spectra.desc"),
      tech: ["HTML", "CSS", "JavaScript"],
      video: process.env.PUBLIC_URL + "/Proje.mp4",
      link: ""
    },
    {
      title: t("projects.items.bank.title"),
      desc: t("projects.items.bank.desc"),
      tech: ["C#"],
      img: process.env.PUBLIC_URL + "/bankaoto.png",
      link: "https://github.com/EceJiltaa/Bank_Automation.git"
    },
    {
      title: t("projects.items.bitirme.title"),
      desc: t("projects.items.bitirme.desc"),
      tech: ["python"],
      img: process.env.PUBLIC_URL + "/ecebitirme.png",
      link: ""
    },
    {
      title: t("projects.items.uml.title"),
      desc: t("projects.items.uml.desc"),
      tech: ["StarUML"],
      img: process.env.PUBLIC_URL + "/pansiyonKayitUMLDiyagrami.png",
      link: ""
    }
  ];

  return (
    <div className="projects">
      <h2>{t("projects.title")}</h2>

      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            {project.img && (
              <img src={project.img} alt={project.title} />
            )}

            {project.video && (
              <video controls width="100%">
                <source src={project.video} type="video/mp4" />
              </video>
            )}

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <p>
              {t("projects.technologies")}: {project.tech.join(", ")}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {t("projects.view")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;