import { AboutMeContainer, AboutMeLi, AboutMeUl } from "./AboutMeElements";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Title>about me.</Title>
      <Paragraph>
        I'm a year 3 computer science student who is looking to specialise in
        the areas of Artificial Intelligence and Algorithms studying at National
        University of Singapore.
      </Paragraph>
      <Paragraph>
        Over the course of my programming journey, I've come to appreciate the
        saying: writing code is easy, writing good code is hard. Not sure if
        it's passion or just obsession, but I often find myself spending way
        more time than I should refactoring, reanalysing, and rebuilding old
        code &#128517;
      </Paragraph>
      <Paragraph>
        I've been a teaching assistant for the following modules:
        <AboutMeUl>
          <AboutMeLi>CS1101S: Programming Methodology I</AboutMeLi>
          <AboutMeLi>CS2105: Introduction to Computer Networks</AboutMeLi>
        </AboutMeUl>
      </Paragraph>
    </AboutMeContainer>
  );
};

export default AboutMe;
