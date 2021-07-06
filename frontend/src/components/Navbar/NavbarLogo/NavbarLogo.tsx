import { NavbarLogoContainer } from "./NavbarLogoElements";
import { Link } from "react-scroll";
import { ReactChild } from "react";
import "./NavbarLogo.css";

interface NavbarLogoProps {
  children: ReactChild;
  to: string;
  toggleMenu: (state: boolean) => void;
}

const NavbarLogo = ({ children, to, toggleMenu }: NavbarLogoProps) => {
  return (
    <NavbarLogoContainer>
      <Link
        className="underline-effect"
        to={to}
        smooth
        onClick={() => toggleMenu(false)}
      >
        {children}
      </Link>
    </NavbarLogoContainer>
  );
};

export default NavbarLogo;
