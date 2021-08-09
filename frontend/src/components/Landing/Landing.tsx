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
              strings: "Hey there! I'm Wen Hao.",
              autoStart: true,
            }}
          />
        </TypewriterWrapper>
        <Paragraph>
          I enjoy solving difficult problems, writing good code and well-brewed
          coffee :)
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
                "https://drive.google.com/uc?export=download&id=1e7ouYCt5jeHm5N4de4zPqVHSd2rT2DhP"
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
