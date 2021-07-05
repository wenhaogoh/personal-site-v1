import styled from "styled-components";

export const SkillIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    p {
      opacity: 1;
    }
  }
`;

export const SkillIconSvgWrapper = styled.div`
  height: 40px;
  width: 40px;

  svg {
    height: 100%;
    width: 100%;
  }
`;

export const SkillIconPWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SkillIconP = styled.p`
  font-size: 0.8rem;
  opacity: 0;
  margin: 0 auto;
  padding-top 0.2rem;
  transition: opacity 0.2s ease-in;
`;
