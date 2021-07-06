import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding: 5rem 0.5rem;
`;

export const ProjectWrapper = styled.div`
  padding-bottom: 5rem;
`;

export const ProjectTitleWrapper = styled.div`
  display: flex;
  padding: 0.25rem 0;
`;

export const ProjectWebsiteWrapper = styled.div`
  padding-left: 0.5rem;
`;

export const ProjectSummaryUl = styled.ul`
  padding: 1rem 0 0 1.2rem;
  margin: 0;
`;

export const ProjectSummaryLi = styled.li`
  padding: 0.25rem 0;
`;

export const ProjectP = styled.p`
  margin: 0;
  padding: 1rem 0;
`;

export const ProjectStackBox = styled.div`
  background-color: white;
  border: 2px solid ${(props) => props.theme.fontColor};
  color: black;
`;

export const ProjectStackGrid = styled.div`
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
