import { ISkillIcon } from "../../consts/SkillIcons";
import {
  SkillIconContainer,
  SkillIconSvgWrapper,
  SkillIconPWrapper,
  SkillIconP,
} from "./SkillIconElements";

interface SkillIconProps {
  skillIcon: ISkillIcon;
}

const SkillIcon = ({ skillIcon }: SkillIconProps) => {
  return (
    <SkillIconContainer>
      <SkillIconSvgWrapper>{skillIcon.icon}</SkillIconSvgWrapper>
      <SkillIconPWrapper>
        <SkillIconP>{skillIcon.name}</SkillIconP>
      </SkillIconPWrapper>
    </SkillIconContainer>
  );
};

export default SkillIcon;
