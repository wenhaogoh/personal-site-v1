import { useState } from "react";
import Layout from "./containers/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { Themes, ThemeNames } from "./constants/Themes";

function App() {
  const [theme, setTheme] = useState<string>(ThemeNames.LIGHT);
  return (
    <ThemeProvider theme={Themes[theme]}>
      <Layout setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
