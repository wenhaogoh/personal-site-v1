import { ReactChild } from "react";
import { FooterLogoContainer } from "./FooterLogoElements";

interface FooterLogoProps {
  children: ReactChild;
}

const FooterLogo = ({ children }: FooterLogoProps) => {
  return <FooterLogoContainer>{children}</FooterLogoContainer>;
};

export default FooterLogo;
