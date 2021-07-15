import styled from "styled-components";

export const ReverseUnderlinedLinkA = styled.a`
  display: inline-block;
  position: relative;
  color: inherit;

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 100%;
    border-bottom: 1px solid;
    margin-top: 10px;
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(0, 1);
  }

  &:hover:after {
    opacity: 1;
    transform: scale(1);
  }
`;
