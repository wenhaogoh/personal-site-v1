import styled from "styled-components";

export const NewWindowWrapper = styled.div`
  transition: transform 0.1s ease-in-out;

  svg path {
    fill: ${(props) => props.theme.fontColor};
    transition: fill 0.5s;
  }

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
