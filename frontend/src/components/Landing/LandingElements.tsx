import styled from "styled-components";

export const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 0.5rem;
`;

export const LandingWrapper = styled.div``;

export const TypewriterWrapper = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

export const LinksWrapper = styled.div`
  margin: 1em 0;
`;

export const LinkWrapper = styled.div`
  display: inline-block;
  padding-right: 1rem;

  @media screen and (min-width: 1024px) {
    padding-right: 2rem;
  }
`;
