import {
  SkillsContainer,
  OuterSkillsGrid,
  SkillsWrapper,
  SkillsBox,
  InnerSkillsGrid,
} from "./SkillsElements";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import SkillIcon from "../SkillIcon/SkillIcon";
import {
  Languages,
  Frameworks,
  Libraries,
  Databases,
  Platforms,
  Tools,
  Environments,
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
              {Languages.map((language, index) => (
                <SkillIcon key={index} skillIcon={language} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>

        <SkillsWrapper>
          <Paragraph>frameworks.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Frameworks.map((framework, index) => (
                <SkillIcon key={index} skillIcon={framework} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>

        <SkillsWrapper>
          <Paragraph>libraries.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Libraries.map((library, index) => (
                <SkillIcon key={index} skillIcon={library} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>

        <SkillsWrapper>
          <Paragraph>databases.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Databases.map((database, index) => (
                <SkillIcon key={index} skillIcon={database} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>

        <SkillsWrapper>
          <Paragraph>environments.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Environments.map((environment, index) => (
                <SkillIcon key={index} skillIcon={environment} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>

        <SkillsWrapper>
          <Paragraph>platforms.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Platforms.map((platform, index) => (
                <SkillIcon key={index} skillIcon={platform} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>

        <SkillsWrapper>
          <Paragraph>tools.</Paragraph>
          <SkillsBox>
            <InnerSkillsGrid>
              {Tools.map((tool, index) => (
                <SkillIcon key={index} skillIcon={tool} />
              ))}
            </InnerSkillsGrid>
          </SkillsBox>
        </SkillsWrapper>
      </OuterSkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
