import { DefaultTheme } from "styled-components";

interface IThemes {
  [key: string]: DefaultTheme;
}

const lightTheme: DefaultTheme = {
  backgroundColor: "white",
  fontColor: "black",
};

const darkTheme: DefaultTheme = {
  backgroundColor: "black",
  fontColor: "white",
};

export const Themes: IThemes = {
  light: lightTheme,
  dark: darkTheme,
};

export const ThemeNames = {
  LIGHT: "light",
  DARK: "dark",
};
