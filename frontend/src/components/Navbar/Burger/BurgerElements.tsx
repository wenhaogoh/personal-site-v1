import styled from "styled-components";

interface InnerDivProps {
  toggle: boolean;
  barId: number;
}

export const OuterDiv = styled.div`
  padding: 0.5rem;
  display: inline-block;
  cursor: pointer;
`;

export const InnerDiv = styled.div<InnerDivProps>`
  width: 20px;
  height: 3px;
  background-color: ${(props) => props.theme.fontColor};
  margin: 4px 0;
  transition: 0.4s;
  ${(props) => {
    if (props.toggle) {
      switch (props.barId) {
        case 1:
          return `
            transform: rotate(-45deg) translate(-7px, 3px);
          `;
        case 2:
          return `
            opacity: 0;
          `;
        case 3:
          return `
            transform: rotate(45deg) translate(-7px, -3px);
          `;
        default:
          return null;
      }
    }
  }}
`;
