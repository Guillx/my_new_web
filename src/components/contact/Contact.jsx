import "./contact.css";
import ContactImg from "../../assets/ilus-five-nobg.png";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Contact() {
  return (
    <section id="contact">
      <h5 className="contact__subtitle">Hora de conocerse mejor</h5>
      <h2 className="contact__title">Contacto</h2>

      <div className="container contact__container">
        <div className="contact__left-side">
          <div className="contact-img">
            <img src={ContactImg} alt="" />
          </div>

          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <a href="mailto:email@email.com" target="_blank" rel="noreferrer">
                Enviar email
              </a>
            </article>

            <article className="contact__option">
              <AiFillLinkedin className="contact__option-icon" />
              <h4>Linkedin</h4>
              <a href="mailto:email@email.com" target="_blank" rel="noreferrer">
                Ir a Linkedin
              </a>
            </article>

            <article className="contact__option">
              <AiOutlineInstagram className="contact__option-icon" />
              <h4>Instagram</h4>
              <a href="mailto:email@email.com" target="_blank" rel="noreferrer">
                Ir a Instagram
              </a>
            </article>
          </div>
        </div>

        <div className="contact__right-side">
          <form action="" className="contact__form">
            <input type="text" name="name" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Escribe aquí tu mensaje"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
