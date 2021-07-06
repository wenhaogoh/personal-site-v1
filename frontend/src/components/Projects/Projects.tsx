import {
  ProjectsContainer,
  ProjectWrapper,
  ProjectTitleWrapper,
  ProjectWebsiteWrapper,
  ProjectSummaryUl,
  ProjectSummaryLi,
  ProjectP,
  ProjectStackBox,
  ProjectStackGrid,
} from "./ProjectsElements";
import { Projects as ProjectList } from "../../constants/Projects";
import Title from "../Title/Title";
import UnderlinedLink from "../UnderlinedLink/UnderlinedLink";
import SkillIcon from "../SkillIcon/SkillIcon";
import NewWindow from "../NewWindow/NewWindow";

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>projects.</Title>
      {ProjectList.map((project, index) => (
        <ProjectWrapper key={index}>
          <ProjectTitleWrapper>
            <UnderlinedLink url={project.github}>
              {project.title}
            </UnderlinedLink>
            {project.link ? (
              <ProjectWebsiteWrapper>
                <NewWindow url={project.link} />
              </ProjectWebsiteWrapper>
            ) : null}
          </ProjectTitleWrapper>
          <ProjectSummaryUl>
            {project.summaries.map((summary, index) => (
              <ProjectSummaryLi key={index}>{summary}</ProjectSummaryLi>
            ))}
          </ProjectSummaryUl>
          <ProjectP>stack.</ProjectP>
          <ProjectStackBox>
            <ProjectStackGrid>
              {project.stack.map((skillIcon, index) => (
                <SkillIcon key={index} skillIcon={skillIcon} />
              ))}
            </ProjectStackGrid>
          </ProjectStackBox>
        </ProjectWrapper>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
