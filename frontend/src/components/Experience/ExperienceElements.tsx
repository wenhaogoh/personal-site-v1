import styled from "styled-components";

export const ExperienceContainer = styled.div`
  padding: 5rem 0.5rem;
`;

export const ExperienceWrapper = styled.div`
  padding-bottom: 5rem;
`;

export const ExperienceDate = styled.div`
  padding: 0.25rem 0;
  font-size: 0.8em;
  opacity: 0.5;
`;

export const ExperienceRoleWrapper = styled.div`
  padding: 0.25rem 0;
  white-space: pre;

  @media screen and (min-width: 1024px) {
    display: inline-block;
    padding: 0;
  }
`;

export const ExperienceSummaryWrapper = styled.div``;

export const ExperienceSummaryUl = styled.ul`
  padding: 1rem 0 0 1.2rem;
  margin: 0;
`;

export const ExperienceSummaryLi = styled.li`
  padding: 0.25rem 0;
`;

export const ExperienceP = styled.p`
  margin: 0;
  padding: 1rem 0;
`;

export const ExperienceStackBox = styled.div`
  background-color: white;
  border: 2px solid ${(props) => props.theme.fontColor};
  color: black;
  transition: border-color 0.5s;
  border-radius: 20px;
`;

export const ExperienceStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 40px);
  grid-gap: 0.97rem;
  padding: 1.4rem;

  @media screen and (min-width: 375px) {
    grid-template-columns: repeat(5, 40px);
    grid-gap: 0.98rem;
    padding: 1.4rem;
  }

  @media screen and (min-width: 414px) {
    grid-template-columns: repeat(5, 40px);
    grid-gap: 1.44rem;
    padding: 1.6rem;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(10, 40px);
    grid-gap: 1.64rem;
    padding: 2rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(13, 40px);
    grid-gap: 1.01rem;
  }
`;
