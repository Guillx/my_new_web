import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import AboutMe from "./components/about-me/AboutMe";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <AboutMe />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
