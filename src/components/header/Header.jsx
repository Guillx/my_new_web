import "./header.css";
// import CV from "../../assets/cv.pdf";
import MyPic from "../../assets/mepic-two.png";
import Planet1 from "../../assets/planet1.png";
import Planet2 from "../../assets/planet2.png";
import HeaderSocials from "./HeaderSocials";
import { CgPushRight } from "react-icons/cg";

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <h4>¡Bienvenidx a mi portfolio!</h4>
        <h1>Me llamo Guille</h1>
        <h5 className="text-light">y soy programador web</h5>
        <div className="cta">
          <a href="#contact" className="btn">
            Descargar CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Contacto
          </a>
        </div>

        <div className="planet1">
          <img src={Planet1} alt="" />
        </div>

        <div className="planet2">
          <img src={Planet2} alt="" />
        </div>

        <HeaderSocials />
        <div className="my-pic">
          <img src={MyPic} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
          <CgPushRight style={{ marginLeft: "20px", fontSize: "1.5rem" }} />
        </a>
      </div>
    </header>
  );
}

export default Header;
