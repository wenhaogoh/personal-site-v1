import {
  ExperienceContainer,
  ExperienceWrapper,
  ExperienceDate,
  ExperienceRoleWrapper,
  ExperienceSummaryWrapper,
  ExperienceSummaryUl,
  ExperienceSummaryLi,
  ExperienceP,
  ExperienceStackBox,
  ExperienceStackGrid,
} from "./ExperienceElements";
import SkillIcon from "../SkillIcon/SkillIcon";
import Title from "../Title/Title";
import UnderlinedLink from "../UnderlinedLink/UnderlinedLink";
import { Experiences } from "../../consts/Experiences";

const Experience = () => {
  return (
    <ExperienceContainer>
      <Title>experience.</Title>
      {Experiences.map((experience, index) => (
        <ExperienceWrapper key={index}>
          <ExperienceDate>{experience.date}</ExperienceDate>
          <ExperienceRoleWrapper>{experience.role} </ExperienceRoleWrapper>
          <ExperienceRoleWrapper>
            @{" "}
            <UnderlinedLink url={experience.url}>
              {experience.company}
            </UnderlinedLink>
          </ExperienceRoleWrapper>
          <ExperienceSummaryWrapper>
            <ExperienceSummaryUl>
              {experience.summaries.map((summary, index) => (
                <ExperienceSummaryLi key={index}>{summary}</ExperienceSummaryLi>
              ))}
            </ExperienceSummaryUl>
          </ExperienceSummaryWrapper>
          <ExperienceP>stack.</ExperienceP>
          <ExperienceStackBox>
            <ExperienceStackGrid>
              {experience.stack.map((skillIcon, index) => (
                <SkillIcon key={index} skillIcon={skillIcon} />
              ))}
            </ExperienceStackGrid>
          </ExperienceStackBox>
        </ExperienceWrapper>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
