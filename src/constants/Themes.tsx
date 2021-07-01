import { DefaultTheme } from "styled-components";

interface Themes {
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

export const themes: Themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const Theme = {
  LIGHT: "light",
  DARK: "dark",
};
