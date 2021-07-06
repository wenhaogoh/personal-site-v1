import styled from "styled-components";

export const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0.5rem 0.5rem;

  @media screen and (min-width: 1024px) {
    justify-content: center;
    padding: 0.5rem 1rem;
  }
`;
