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
              strings: "Hello world!",
              autoStart: true,
            }}
          />
        </TypewriterWrapper>
        <Paragraph>
          I'm Wen Hao and I'm an aspiring software engineer.
        </Paragraph>
        <Paragraph>
          Currently interning @{" "}
          <UnderlinedLink url="https://www.paypal.com/">PayPal</UnderlinedLink>
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
                "https://drive.google.com/uc?export=download&id=1qL4MyPyuRxeGPucGwVRHN5enq_2s_gga"
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
