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
    date: "Jan 2021 - July 2021",
    role: "Software Engineer Intern",
    company: "PayPal",
    url: "https://www.paypal.com/",
    summaries: [
      "Participated in agile sprints where I implemented new features and enhanced existing ones, and fixed live issues for the compliance team's internal case management system.",
      "Refactored code to optimise database queries and increase test coverage.",
      "Set up Enterprise Continuous Delivery (ECD) pipelines to ensure minimal service disruption.",
    ],
    stack: [
      getSkillIcon(Databases, "MySQL"),
      getSkillIcon(Environments, "NodeJS"),
      getSkillIcon(Frameworks, "Express"),
      getSkillIcon(Frameworks, "Mocha"),
      getSkillIcon(Frameworks, "Selenium"),
      getSkillIcon(Frameworks, "Spring"),
      getSkillIcon(Languages, "Java"),
      getSkillIcon(Languages, "JavaScript"),
      getSkillIcon(Libraries, "React"),
      getSkillIcon(Libraries, "Redux"),
      getSkillIcon(Tools, "Git"),
      getSkillIcon(Tools, "GitHub"),
      getSkillIcon(Tools, "Jenkins"),
    ],
  },
  {
    date: "August 2020 - Present",
    role: "Tech Lead",
    company: "Developer Student Club",
    url: "https://dsc.comp.nus.edu.sg/",
    summaries: [
      "Working with the Federation of Merchants Associations Singapore (FMAS) to develop a web app that showcases their hawker stalls.",
      "Leading a team of 8 software engineers for the setup and maintainence back-end and front-end services.",
      "Built an admin console for the ease of data management.",
    ],
    stack: [
      getSkillIcon(Databases, "PostgreSQL"),
      getSkillIcon(Environments, "NodeJS"),
      getSkillIcon(Frameworks, "Bootstrap"),
      getSkillIcon(Frameworks, "Express"),
      getSkillIcon(Languages, "JavaScript"),
      getSkillIcon(Languages, "TypeScript"),
      getSkillIcon(Libraries, "MaterialUI"),
      getSkillIcon(Libraries, "React"),
      getSkillIcon(Libraries, "Redux"),
      getSkillIcon(Libraries, "Sequelize"),
      getSkillIcon(Platforms, "Docker"),
      getSkillIcon(Platforms, "GCP"),
      getSkillIcon(Platforms, "Heroku"),
      getSkillIcon(Platforms, "Netlify"),
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
