import { PagesContainer } from "./PagesElements";
import { Element } from "react-scroll";
import Landing from "../Landing/Landing";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";

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
    </PagesContainer>
  );
};

export default Pages;
