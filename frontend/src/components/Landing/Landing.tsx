import {
  LandingContainer,
  LandingWrapper,
  TypewriterWrapper,
  LinksWrapper,
  LinkWrapper,
} from "./LandingElements";
import Typewriter from "typewriter-effect";
import Paragraph from "../Paragraph/Paragraph";
import UnderlinedLink from "../UnderlinedLink/UnderlinedLink";
import ReverseUnderlinedLink from "../ReverseUnderlinedLink/ReverseUnderlinedLink";

const Landing = () => {
  return (
    <LandingContainer>
      <LandingWrapper>
        <TypewriterWrapper>
          <Typewriter
            options={{
              strings: "Hey there!",
              autoStart: true,
            }}
          />
        </TypewriterWrapper>
        <Paragraph>I'm Wen Hao.</Paragraph>
        <Paragraph>
          I enjoy solving difficult problems, writing good code and well-brewed
          coffee &#9749;
        </Paragraph>
        <Paragraph>
          Currently studying @{" "}
          <UnderlinedLink url="https://nus.edu.sg/">
            National University of Singapore
          </UnderlinedLink>
        </Paragraph>
        <LinksWrapper>
          <LinkWrapper>
            <ReverseUnderlinedLink url={"https://github.com/wenhaogoh"}>
              github.
            </ReverseUnderlinedLink>
          </LinkWrapper>
          <LinkWrapper>
            <ReverseUnderlinedLink
              url={"https://www.linkedin.com/in/wenhaogoh/"}
            >
              linkedin.
            </ReverseUnderlinedLink>
          </LinkWrapper>
          <LinkWrapper>
            <ReverseUnderlinedLink
              url={
                "https://drive.google.com/uc?export=download&id=11qL45NCbE1sFuK_QqD88D13rsIOa4zFm"
              }
            >
              resume.
            </ReverseUnderlinedLink>
          </LinkWrapper>
        </LinksWrapper>
      </LandingWrapper>
    </LandingContainer>
  );
};

export default Landing;
