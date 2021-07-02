import styled from "styled-components";

export const SkillsContainer = styled.div`
  padding: 5rem 0.5rem;

  @media screen and (min-width: 1024px) {
    padding: 7rem 0.5rem;
  }
`;

export const OuterSkillsGrid = styled.div`
  display: grid;
  grid-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`;

export const SkillsWrapper = styled.div``;

export const SkillsBox = styled.div`
  background-color: white;
  color: black;
  border: 2px solid ${(props) => props.theme.fontColor};
`;

export const InnerSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 55px);
  grid-gap: 1rem;
  padding: 1.72rem;

  @media screen and (min-width: 375px) {
    grid-gap: 2.5rem;
    padding: 1.9rem;
  }

  @media screen and (min-width: 414px) {
    grid-gap: 3.16rem;
    padding: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    grid-gap: 2.5rem;
    padding: 2.22rem;
  }

  @media screen and (min-width: 1024px) {
    grid-gap: 0.5em;
    padding: 1.72rem;
  }
`;
