import { ReactElement } from "react";

import { ReactComponent as MySQL } from "../resources/databases/MySQL.svg";
import { ReactComponent as PostgreSQL } from "../resources/databases/PostgreSQL.svg";
// import { ReactComponent as SQLite } from "../resources/databases/SQLite.svg";

// import { ReactComponent as AndroidStudio } from "../resources/environments/AndroidStudio.svg";
import { ReactComponent as NodeJS } from "../resources/environments/NodeJS.svg";

import { ReactComponent as Bootstrap } from "../resources/frameworks/Bootstrap.svg";
import { ReactComponent as Express } from "../resources/frameworks/Express.svg";
import { ReactComponent as Spring } from "../resources/frameworks/Spring.svg";

import { ReactComponent as C } from "../resources/languages/C.svg";
import { ReactComponent as CSharp } from "../resources/languages/CSharp.svg";
import { ReactComponent as CSS } from "../resources/languages/CSS.svg";
import { ReactComponent as HTML } from "../resources/languages/HTML.svg";
import { ReactComponent as Java } from "../resources/languages/Java.svg";
import { ReactComponent as JavaScript } from "../resources/languages/JavaScript.svg";
import { ReactComponent as Pug } from "../resources/languages/Pug.svg";
import { ReactComponent as Python } from "../resources/languages/Python.svg";
import { ReactComponent as TypeScript } from "../resources/languages/TypeScript.svg";

import { ReactComponent as ReactJS } from "../resources/libraries/React.svg";
import { ReactComponent as Redux } from "../resources/libraries/Redux.svg";
// import { ReactComponent as Sequelize } from "../resources/libraries/Sequelize.svg";

import { ReactComponent as AWS } from "../resources/platforms/AWS.svg";
import { ReactComponent as Docker } from "../resources/platforms/Docker.svg";
import { ReactComponent as GCP } from "../resources/platforms/GCP.svg";
import { ReactComponent as Heroku } from "../resources/platforms/Heroku.svg";

import { ReactComponent as Aseprite } from "../resources/tools/Aseprite.svg";
import { ReactComponent as Git } from "../resources/tools/Git.svg";
import { ReactComponent as GitHub } from "../resources/tools/GitHub.svg";
import { ReactComponent as Unity } from "../resources/tools/Unity.svg";

import { ReactComponent as Placeholder } from "../resources/others/Placeholder.svg";

export interface ISkillIcon {
  name: string;
  icon: ReactElement;
}

export const Databases: ISkillIcon[] = [
  {
    name: "MySQL",
    icon: <MySQL />,
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQL />,
  },
  // {
  //   name: "SQLite",
  //   icon: <SQLite />,
  // },
];

export const Environments: ISkillIcon[] = [
  // {
  //   name: "Android Studio",
  //   icon: <AndroidStudio />,
  // },
  {
    name: "NodeJS",
    icon: <NodeJS />,
  },
];

export const Frameworks: ISkillIcon[] = [
  {
    name: "Bootstrap",
    icon: <Bootstrap />,
  },
  {
    name: "Express",
    icon: <Express />,
  },
  {
    name: "Spring",
    icon: <Spring />,
  },
];

export const Languages: ISkillIcon[] = [
  {
    name: "C",
    icon: <C />,
  },
  {
    name: "C#",
    icon: <CSharp />,
  },
  {
    name: "CSS",
    icon: <CSS />,
  },
  {
    name: "HTML",
    icon: <HTML />,
  },
  {
    name: "Java",
    icon: <Java />,
  },
  {
    name: "JavaScript",
    icon: <JavaScript />,
  },
  {
    name: "Pug",
    icon: <Pug />,
  },
  {
    name: "Python",
    icon: <Python />,
  },
  {
    name: "TypeScript",
    icon: <TypeScript />,
  },
];

export const Libraries: ISkillIcon[] = [
  {
    name: "React",
    icon: <ReactJS />,
  },
  {
    name: "Redux",
    icon: <Redux />,
  },
  // {
  //   name: "Sequelize",
  //   icon: <Sequelize />,
  // },
];

export const Platforms: ISkillIcon[] = [
  {
    name: "AWS",
    icon: <AWS />,
  },
  {
    name: "Docker",
    icon: <Docker />,
  },
  {
    name: "GCP",
    icon: <GCP />,
  },
  {
    name: "Heroku",
    icon: <Heroku />,
  },
];

export const Tools: ISkillIcon[] = [
  {
    name: "Aseprite",
    icon: <Aseprite />,
  },
  {
    name: "Git",
    icon: <Git />,
  },
  {
    name: "GitHub",
    icon: <GitHub />,
  },
  {
    name: "Unity",
    icon: <Unity />,
  },
];

export function getPlaceholder(name: string): ISkillIcon {
  return {
    name: name,
    icon: <Placeholder />,
  };
}
