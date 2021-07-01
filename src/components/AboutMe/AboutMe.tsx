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
        stack development, I've also dabbled with game development.
      </Paragraph>
      <Paragraph>
        The game of Go has been a passion of mine since I was six. Hence, it was
        no surprise that AlphaGo's triumph over the top professional Go player
        back in 2016 fascinated me greatly. It was then when I was introduced to
        the world of computer science.
      </Paragraph>
      <Paragraph>
        I've been exploring the boundless possibilities of technology ever since
        and I've fallen in love with building beautiful applications that are
        both fun and useful.
      </Paragraph>
    </AboutMeContainer>
  );
};

export default AboutMe;
