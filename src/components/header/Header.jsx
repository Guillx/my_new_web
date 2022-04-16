import "./header.css";
import CV from "../../assets/cv.pdf";
import MyPic from "../../assets/mepic-two.png";

function Header() {
  return (
    <>
      <div className="container header_container">
        <h5>Hola, soy</h5>
        <h1>Guille</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <div className="cta">
          <a href={CV} className="btn">
            Descargar CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Contacto
          </a>
        </div>

        <div className="my-pic">
          <img src={MyPic} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </>
  );
}

export default Header;
