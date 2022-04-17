import "./skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

function Skills() {
  return (
    <section id="skills">
      <h5 className="skills__subtitle">Conocimientos sobre la materia</h5>
      <h2 className="skills__title">Habilidades</h2>

      <div className="container skills__container">
        <div className="skills__wrapper skills__frontend">
          <div className="skills__head">
            <h3>Frontend</h3>
          </div>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon html" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">7/10</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon css" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">7/10</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon bs" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">5/10</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">5/10</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">6/10</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__wrapper skills__backend">
          <div className="skills__head">
            <h3>Backend</h3>
          </div>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">3/10</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">3/10</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">3/10</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__wrapper skills__others">
          <div className="skills__head">
            <h3>Más habilidades</h3>
          </div>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">5/10</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Inglés</h4>
                <small className="text-light">7/10</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Alemán</h4>
                <small className="text-light">4/10</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Español</h4>
                <small className="text-light">10/10</small>
              </div>
            </article>

            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Gallego</h4>
                <small className="text-light">10/10</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
