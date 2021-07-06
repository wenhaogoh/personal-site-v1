import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor};
    transition: color .5s, background-color .5s;
    
    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;

export const LayoutContainer = styled.div``;
