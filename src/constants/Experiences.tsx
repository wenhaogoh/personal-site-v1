import {
  Environments,
  Frameworks,
  ISkillIcon,
  Languages,
  Libraries,
  Platforms,
  Tools,
  getPlaceholder,
} from "./SkillIcons";
import { Databases } from "./SkillIcons";
import _ from "lodash";

interface Experience {
  date: string;
  role: string;
  company: string;
  url: string;
  summaries: string[];
  stack: ISkillIcon[];
}

export const Experiences: Experience[] = [
  {
    date: "May 2021 - Present",
    role: "Tech Lead",
    company: "Developer Student Club",
    url: "https://dsc.comp.nus.edu.sg/",
    summaries: [],
    stack: [],
  },
  {
    date: "Jan 2021 - Present",
    role: "Backend Software Engineer Intern",
    company: "PayPal",
    url: "https://www.paypal.com/",
    summaries: [
      "Participated in agile sprints where I implemented new features and enhanced existing ones, and fixed bugs for the compliance team's internal case management system.",
      "Refactored code to optimise database queries and increase test coverage.",
      "Set up Enterprise Continuous Delivery (ECD) pipelines to ensure minimal service disruption.",
    ],
    stack: [
      getSkillIcon(Databases, "MySQL"),
      getSkillIcon(Environments, "NodeJS"),
      getSkillIcon(Frameworks, "Express"),
      getSkillIcon(Frameworks, "Spring"),
      getSkillIcon(Languages, "Java"),
      getSkillIcon(Languages, "JavaScript"),
      getSkillIcon(Libraries, "React"),
      getSkillIcon(Libraries, "Redux"),
      getSkillIcon(Tools, "Git"),
      getSkillIcon(Tools, "GitHub"),
    ],
  },
  {
    date: "September 2020 - May 2021",
    role: "Software Engineer",
    company: "Developer Student Club",
    url: "https://dsc.comp.nus.edu.sg/",
    summaries: [
      "Led the back-end team for the setup and maintenance of back-end services.",
      "Built an admin console for ease of data management.",
    ],
    stack: [
      getSkillIcon(Databases, "PostgreSQL"),
      getSkillIcon(Environments, "NodeJS"),
      getSkillIcon(Frameworks, "Bootstrap"),
      getSkillIcon(Frameworks, "Express"),
      getSkillIcon(Languages, "JavaScript"),
      getSkillIcon(Languages, "TypeScript"),
      getSkillIcon(Libraries, "React"),
      getSkillIcon(Libraries, "Redux"),
      getSkillIcon(Libraries, "Sequelize"),
      getSkillIcon(Platforms, "Docker"),
      getSkillIcon(Platforms, "GCP"),
      getSkillIcon(Platforms, "Heroku"),
      getSkillIcon(Tools, "Git"),
      getSkillIcon(Tools, "GitHub"),
    ],
  },
  {
    date: "May 2020 - August 2020",
    role: "Software Engineer Intern",
    company: "Roboto Coding Academy",
    url: "https://roboto.sg/",
    summaries: [
      "Integrated web services to streamline the process of uploading teaching resources.",
      "Developed a drag and drop content builder for trainers to design modules.",
      "Set up audit logging and monitoring of user activities.",
    ],
    stack: [
      getSkillIcon(Databases, "MySQL"),
      getSkillIcon(Environments, "NodeJS"),
      getSkillIcon(Frameworks, "Express"),
      getSkillIcon(Languages, "CSS"),
      getSkillIcon(Languages, "JavaScript"),
      getSkillIcon(Languages, "Pug"),
      getSkillIcon(Platforms, "Docker"),
      getSkillIcon(Platforms, "AWS"),
      getSkillIcon(Tools, "Git"),
      getSkillIcon(Tools, "GitHub"),
    ],
  },
];

function getSkillIcon(collection: ISkillIcon[], name: string) {
  return _.find(collection, (x) => x.name === name) || getPlaceholder(name);
}
