import { PagesContainer } from "./PagesElements";
import { Element } from "react-scroll";
import Landing from "../Landing/Landing";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Pages = () => {
  return (
    <PagesContainer>
      <Element name="landing">
        <Landing />
      </Element>
      <Element name="aboutMe">
        <AboutMe />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </PagesContainer>
  );
};

export default Pages;
