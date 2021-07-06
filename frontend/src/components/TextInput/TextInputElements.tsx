import styled from "styled-components";

export const TextInputContainer = styled.div`
  padding: 1rem 0;
`;

export const TextInputLabel = styled.label`
  display: block;
  padding: 0.25rem 0;
  font-size: inherit;
  font: inherit;
`;

export const TextInputInput = styled.input`
  display: block;
  outline: none;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.fontColor};
  padding: 0.25rem 0;
  font-size: inherit;
  font: inherit;
  color: ${(props) => props.theme.fontColor};
  background-color: transparent;
  transition: border-color 0.5s;
`;
