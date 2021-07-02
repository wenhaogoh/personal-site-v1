import { ReactChild } from "react";
import { FooterLogoContainer } from "./FooterLogoElements";
import { Link } from "react-scroll";
import "./FooterLogo.css";

interface FooterLogoProps {
  children: ReactChild;
}

const FooterLogo = ({ children }: FooterLogoProps) => {
  return (
    <FooterLogoContainer>
      <Link className={"underline-effect"} to={"landing"} smooth>
        {children}
      </Link>
    </FooterLogoContainer>
  );
};

export default FooterLogo;
