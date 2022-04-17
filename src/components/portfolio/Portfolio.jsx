import "./portfolio.css";
import { useState } from "react";
import {
  backendProjects,
  designProjects,
  frontendProjects,
  fullstackProjects,
} from "./data";

function Portfolio() {
  const [index, setIndex] = useState(0);
  const [activeItem, setActiveItem] = useState("#frontend");

  return (
    <section id="portfolio">
      <h5 className="portfolio__subtitle">Mis proyectos</h5>
      <h2 className="portfolio__title">Portfolio</h2>

      <div className="container portfolio-tabs-container">
        <div className="portfolio-tabs">
          <div className="portfolio-tabs-list">
            <div
              className={
                activeItem === "#frontend" ? "active-tab" : "tab-header"
              }
              onClick={() => {
                setIndex(0);
                setActiveItem("#frontend");
              }}
              id="frontend"
              style={{ borderRadius: "2rem 0 0 0" }}
            >
              Frontend
            </div>
            <div
              className={
                activeItem === "#backend" ? "active-tab" : "tab-header"
              }
              onClick={() => {
                setIndex(1);
                setActiveItem("#backend");
              }}
              id="backend"
            >
              Backend
            </div>
            <div
              className={
                activeItem === "#fullstack" ? "active-tab" : "tab-header"
              }
              onClick={() => {
                setIndex(2);
                setActiveItem("#fullstack");
              }}
              id="#fullstack"
            >
              Full Stack
            </div>
            <div
              className={activeItem === "#design" ? "active-tab" : "tab-header"}
              onClick={() => {
                setIndex(3);
                setActiveItem("#design");
              }}
              id="#design"
              style={{ borderRadius: "0 2rem 0 0" }}
            >
              Diseño UX/UI
            </div>
          </div>

          <div className="portfolio-tabs-content" hidden={index !== 0}>
            <div className="projects-container">
              {frontendProjects.map((item) => {
                return (
                  <div className="project-container" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <div className="project-buttons">
                      <a
                        href={item.github}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                      <a
                        href={item.demo}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="portfolio-tabs-content" hidden={index !== 1}>
            <div className="projects-container">
              {backendProjects.map((item) => {
                return (
                  <div className="project-container" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <div className="project-buttons">
                      <a
                        href={item.github}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                      <a
                        href={item.demo}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="portfolio-tabs-content" hidden={index !== 2}>
            <div className="projects-container">
              {fullstackProjects.map((item) => {
                return (
                  <div className="project-container" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <div className="project-buttons">
                      <a
                        href={item.github}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                      <a
                        href={item.demo}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="portfolio-tabs-content" hidden={index !== 3}>
            <div className="projects-container">
              {designProjects.map((item) => {
                return (
                  <div className="project-container" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <div className="project-buttons">
                      <a
                        href={item.github}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                      <a
                        href={item.demo}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
