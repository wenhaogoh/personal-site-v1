import {
  Databases,
  Environments,
  Frameworks,
  ISkillIcon,
  Languages,
  Libraries,
  Platforms,
  Tools,
  getSkillIcon,
} from "./SkillIcons";

interface Project {
  title: string;
  github: string;
  link?: string;
  summaries: string[];
  stack: ISkillIcon[];
}

export const Projects: Project[] = [
  {
    title: "The Social Census",
    github: "https://github.com/wenhaogoh/hack4good2021",
    link: "https://thesocialcensus.netlify.app/",
    summaries: [
      "Created an Instagram Story Quiz Stickers inspired web application prototype to promote inclusion among youths.",
      "Awarded 1st runner-up out of over 50 teams for Hack For Good 2021.",
    ],
    stack: [
      getSkillIcon(Databases, "PostgreSQL"),
      getSkillIcon(Environments, "NodeJS"),
      getSkillIcon(Frameworks, "Express"),
      getSkillIcon(Languages, "JavaScript"),
      getSkillIcon(Libraries, "React"),
      getSkillIcon(Libraries, "Sequelize"),
      getSkillIcon(Platforms, "Heroku"),
      getSkillIcon(Platforms, "Netlify"),
      getSkillIcon(Tools, "Git"),
      getSkillIcon(Tools, "GitHub"),
    ],
  },
  {
    title: "NUSave",
    github: "https://github.com/wenhaogoh/tp",
    summaries: [
      "Created an application which assists students to manage their finances.",
    ],
    stack: [
      getSkillIcon(Languages, "Java"),
      getSkillIcon(Tools, "Git"),
      getSkillIcon(Tools, "GitHub"),
    ],
  },
  {
    title: "Til Kingdom Come",
    github: "https://github.com/wenhaogoh/tp",
    summaries: [
      "Created a 2D medieval fighting game with original artwork and music that supports online multiplayer.",
    ],
    stack: [
      getSkillIcon(Languages, "C#"),
      getSkillIcon(Tools, "Aseprite"),
      getSkillIcon(Tools, "Git"),
      getSkillIcon(Tools, "GitHub"),
      getSkillIcon(Tools, "Unity"),
    ],
  },
];
