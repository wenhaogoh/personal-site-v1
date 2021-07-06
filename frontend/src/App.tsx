import { useState } from "react";
import Layout from "./containers/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { Themes, Theme } from "./constants/Themes";

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  return (
    <ThemeProvider theme={Themes[theme]}>
      <Layout setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
