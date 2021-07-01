import MySQL from "../resources/databases/MySQL.svg";
import PostgreSQL from "../resources/databases/PostgreSQL.svg";
import SQLite from "../resources/databases/SQLite.svg";

import AndroidStudio from "../resources/environments/AndroidStudio.png";
import NodeJS from "../resources/environments/NodeJS.svg";

import Bootstrap from "../resources/frameworks/Bootstrap.svg";
import Express from "../resources/frameworks/Express.svg";
import Spring from "../resources/frameworks/Spring.svg";

import C from "../resources/languages/C.svg";
import CSharp from "../resources/languages/CSharp.svg";
import CSS from "../resources/languages/CSS.svg";
import HTML from "../resources/languages/HTML.svg";
import Java from "../resources/languages/Java.svg";
import JavaScript from "../resources/languages/JavaScript.svg";
import Pug from "../resources/languages/Pug.svg";
import Python from "../resources/languages/Python.svg";
import TypeScript from "../resources/languages/TypeScript.svg";

import React from "../resources/libraries/React.svg";
import Sequelize from "../resources/libraries/Sequelize.svg";

import AWS from "../resources/platforms/AWS.svg";
import Docker from "../resources/platforms/Docker.svg";
import GCP from "../resources/platforms/GCP.svg";
import Heroku from "../resources/platforms/Heroku.svg";

import Aseprite from "../resources/tools/Aseprite.png";
import Git from "../resources/tools/Git.svg";
import Github from "../resources/tools/Github.svg";
import Unity from "../resources/tools/Unity.svg";

export interface ISkillIcon {
  name: string;
  icon: string;
}

export const Databases: ISkillIcon[] = [
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
  },
  {
    name: "SQLite",
    icon: SQLite,
  },
];

export const Environments: ISkillIcon[] = [
  {
    name: "Android Studio",
    icon: AndroidStudio,
  },
  {
    name: "NodeJS",
    icon: NodeJS,
  },
];

export const Frameworks: ISkillIcon[] = [
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "Spring",
    icon: Spring,
  },
];

export const Languages: ISkillIcon[] = [
  {
    name: "C",
    icon: C,
  },
  {
    name: "C#",
    icon: CSharp,
  },
  {
    name: "CSS",
    icon: CSS,
  },
  {
    name: "HTML",
    icon: HTML,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "JavaScript",
    icon: JavaScript,
  },
  {
    name: "Pug",
    icon: Pug,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "TypeScript",
    icon: TypeScript,
  },
];

export const Libraries: ISkillIcon[] = [
  {
    name: "React",
    icon: React,
  },
  {
    name: "Sequelize",
    icon: Sequelize,
  },
];

export const Platforms: ISkillIcon[] = [
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "Docker",
    icon: Docker,
  },
  {
    name: "GCP",
    icon: GCP,
  },
  {
    name: "Heroku",
    icon: Heroku,
  },
];

export const Tools: ISkillIcon[] = [
  {
    name: "Aseprite",
    icon: Aseprite,
  },
  {
    name: "Git",
    icon: Git,
  },
  {
    name: "GitHub",
    icon: Github,
  },
  {
    name: "Unity",
    icon: Unity,
  },
];
