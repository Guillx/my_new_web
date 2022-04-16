import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { useState } from "react";

function Nav() {
  const [activeItem, setActiveItem] = useState("#header");

  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveItem("#header")}
        className={activeItem === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about-me"
        onClick={() => setActiveItem("#about")}
        className={activeItem === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveItem("#experience")}
        className={activeItem === "#experience" ? "active" : ""}
      >
        <HiOutlineBookOpen />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveItem("#skills")}
        className={activeItem === "#skills" ? "active" : ""}
      >
        <MdComputer />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveItem("#portfolio")}
        className={activeItem === "#portfolio" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveItem("#contact")}
        className={activeItem === "#contact" ? "active" : ""}
      >
        <AiOutlinePhone />
      </a>
    </nav>
  );
}

export default Nav;
