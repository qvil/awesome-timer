import * as React from "react";
import { ThemeProvider } from "styled-components";
// Custom
import Card from "src/components/Card";
import { theme } from "src/styles";

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Card />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
