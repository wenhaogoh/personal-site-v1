import { ReactChild } from "react";
import { NavbarLinkContainer } from "./NavbarLinkElements";
import { Link } from "react-scroll";
import "./NavbarLink.css";

interface NavbarLinkProps {
  children: ReactChild;
  to: string;
  toggleMenu: (state: boolean) => void;
  offset?: number;
}

const NavbarLink = ({ children, to, toggleMenu, offset }: NavbarLinkProps) => {
  return (
    <NavbarLinkContainer>
      <Link
        className="underline-effect"
        to={to}
        smooth
        onClick={() => toggleMenu(false)}
        offset={offset}
      >
        {children}
      </Link>
    </NavbarLinkContainer>
  );
};

export default NavbarLink;
