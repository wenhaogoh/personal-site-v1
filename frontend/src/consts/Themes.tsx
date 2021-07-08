import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  backgroundColor: "white",
  fontColor: "black",
};

const darkTheme: DefaultTheme = {
  backgroundColor: "black",
  fontColor: "white",
};

export const Themes: DefaultTheme[] = [lightTheme, darkTheme];

export enum Theme {
  LIGHT,
  DARK,
}
