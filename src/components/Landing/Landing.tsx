import { LandingContainer } from "./LandingElements";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <LandingContainer>
      <Typewriter
        options={{
          strings: "Hello world!",
          autoStart: true,
        }}
      />
    </LandingContainer>
  );
};

export default Landing;
