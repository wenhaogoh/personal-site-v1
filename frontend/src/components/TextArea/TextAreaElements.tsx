import styled from "styled-components";

export const TextAreaContainer = styled.div`
  padding: 1rem 0;
`;

export const TextAreaLabel = styled.label`
  display: block;
  padding: 0.25rem 0;
  font-size: inherit;
  font: inherit;
`;

export const TextAreaTextArea = styled.textarea`
  display: block;
  outline: none;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.fontColor};
  padding: 0.25rem 0;
  font-size: inherit;
  font: inherit;
  color: ${(props) => props.theme.fontColor};
  height: 6rem;
  background-color: transparent;
  resize: none;
  transition: border-color 0.5s;
`;
