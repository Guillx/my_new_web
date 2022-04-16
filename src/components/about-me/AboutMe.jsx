import "./aboutMe.css";
import AboutMeImg from "../../assets/ilus-one.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function AboutMe() {
  return (
    <section id="about-me">
      <h5 className="about-me__subtitle">Cosas interesantes</h5>
      <h2 className="about-me__title">Sobre Mí</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMeImg} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>80+ completados</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad esse
            doloribus, assumenda, inventore deserunt odit similique ex atque
            voluptatum earum fuga delectus quaerat impedit error aliquid laborum
            ullam! Quia nisi dignissimos sequi vitae perspiciatis officia.
            Maxime quibusdam cupiditate delectus eum ducimus ex adipisci et
            officia!
          </p>
          <a href="#contact" className="btn btn-primary">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
