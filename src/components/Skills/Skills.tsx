import {
  SkillsContainer,
  OuterSkillsGrid,
  SkillsWrapper,
  SkillsBox,
  InnerSkillsGrid,
} from "./SkillsElements";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import SkillIcon from "./SkillIcon/SkillIcon";
import {
  Languages,
  Frameworks,
  Libraries,
  Databases,
  Platforms,
  Tools,
} from "../../constants/SkillIcons";

const Skills = () => {
  return (
    <SkillsContainer>
      <Title>skills.</Title>

      <OuterSkillsGrid>
        <SkillsWrapper>
          <Paragraph>languages.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Languages.map((language) => (
                <SkillIcon skillIcon={language} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>

        <SkillsWrapper>
          <Paragraph>frameworks.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Frameworks.map((framework) => (
                <SkillIcon skillIcon={framework} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>

        <SkillsWrapper>
          <Paragraph>libraries.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Libraries.map((library) => (
                <SkillIcon skillIcon={library} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>

        <SkillsWrapper>
          <Paragraph>databases.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Databases.map((database) => (
                <SkillIcon skillIcon={database} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>

        <SkillsWrapper>
          <Paragraph>platforms.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Platforms.map((platform) => (
                <SkillIcon skillIcon={platform} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>

        <SkillsWrapper>
          <Paragraph>tools.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Tools.map((tool) => (
                <SkillIcon skillIcon={tool} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>
      </OuterSkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
