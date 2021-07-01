import { ISkillIcon } from "../../../constants/SkillIcons";
import {
  SkillIconContainer,
  SkillIconImg,
  SkillIconPWrapper,
  SkillIconP,
} from "./SkillIconElements";

interface SkillIconProps {
  skillIcon: ISkillIcon;
}

const SkillIcon = ({ skillIcon }: SkillIconProps) => {
  return (
    <SkillIconContainer>
      <SkillIconImg src={skillIcon.icon} />
      <SkillIconPWrapper>
        <SkillIconP>{skillIcon.name}</SkillIconP>
      </SkillIconPWrapper>
    </SkillIconContainer>
  );
};

export default SkillIcon;
