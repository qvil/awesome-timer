import * as React from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
// Custom
import Card from "src/components/Card";
import { theme, FlexCenter } from "src/styles";
import { Column } from "src/components/common";

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  #root {
    flex: 1;
    flex-direction: column;
    ${FlexCenter};
  }
`;

const AppColumn = Column.extend`
  padding: ${(props: any) => props.theme.spacing.unit}rem;
  ${FlexCenter};
  flex: 1;
  width: 100%;
`;

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <AppColumn>
          <Card fullWidth={true} color="red" />
          <Card fullWidth={true} color="#bbb" />
          <Card />
        </AppColumn>
      </ThemeProvider>
    );
  }
}

export default App;
