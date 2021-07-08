import { AboutMeContainer } from "./AboutMeElements";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <Title>about me.</Title>
      <Paragraph>
        I'm a year 3 computer science student who is looking to specialise in
        the areas of Artificial Intelligence and Algorithms studying at National
        University of Singapore. While most of my experience lie in full stack
        development, I've also dabbled with game development on Unity.
      </Paragraph>
      <Paragraph>
        The ancient game of Go has been a passion of mine since I was 6. When
        AlphaGo triumphed over the top professional Go player back in 2016, I
        was entranced. It was at that same moment I was introduced to the world
        of computer science.
      </Paragraph>
      <Paragraph>
        Since then, I've been repeatedly amazed by the boundless possibilities
        of technology and its to potential to change lives. And I've fallen in
        love with building beautiful applications that are both cool and
        impactful.
      </Paragraph>
    </AboutMeContainer>
  );
};

export default AboutMe;
