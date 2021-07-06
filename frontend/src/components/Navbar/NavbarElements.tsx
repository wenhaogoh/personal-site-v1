import styled from "styled-components";

interface NavbarLinksProps {
  isMenuOpen: boolean;
}

export const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
  position: fixed;
  width: 100%;
  z-index: 999;
  transition: background-color 0.5s; !important
`;

export const NavbarWrapper = styled.div`
  padding: 1.5rem 1.5rem 0 1.5rem;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 3rem;
  }
`;

export const NavbarItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
`;

export const NavbarMobile = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const NavbarLinks = styled.div<NavbarLinksProps>`
  display: ${(props) => (props.isMenuOpen ? "block" : "none")};
  padding-bottom: 0.5rem;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const NavbarScreen = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
