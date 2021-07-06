import {
  LandingContainer,
  LandingWrapper,
  TypewriterWrapper,
} from "./LandingElements";
import Typewriter from "typewriter-effect";
import Paragraph from "../Paragraph/Paragraph";
import UnderlinedLink from "../UnderlinedLink/UnderlinedLink";

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
      </LandingWrapper>
    </LandingContainer>
  );
};

export default Landing;
