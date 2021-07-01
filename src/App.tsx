import { useState } from "react";
import Layout from "./containers/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { themes, Theme } from "./constants/Themes";

function App() {
  const [theme, setTheme] = useState<string>(Theme.LIGHT);
  return (
    <ThemeProvider theme={themes[theme]}>
      <Layout setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
