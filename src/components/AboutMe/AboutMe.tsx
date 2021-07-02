import { AboutMeContainer } from "./AboutMeElements";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Title>about me.</Title>
      <Paragraph>
        I'm a year 3 computer science student studying at National University of
        Singapore. I'm looking to specialise in the areas of Artificial
        Intelligence and Algorithms. While most of my experience lies in full
        stack development, I've also dabbled with game development on Unity.
      </Paragraph>
      <Paragraph>
        A board game that has been a passion of mine since age 6 is Go. When
        AlphaGo triumphed over the top professional Go player back in 2016, I
        was entranced. It was at that same moment I was introduced to the world
        of computer science.
      </Paragraph>
      <Paragraph>
        Since then, I've been repeatedly amazed by the boundless possibilities
        of technology and its to potential to change lives. And I've fallen in
        love with building beautiful applications that are both fun and useful.
      </Paragraph>
    </AboutMeContainer>
  );
};

export default AboutMe;
