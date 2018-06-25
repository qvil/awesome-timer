import * as React from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
// Custom
import Card from "src/components/Card";
import { theme, FlexCenter, CardStyle } from "src/styles";
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
    padding: 0;
    margin: 0;
    flex: 1;
    flex-direction: column;
    ${FlexCenter};
  }
`;

const AppColumn = Column.extend`
  /* padding: ${(props: any) => props.theme.spacing.unit}rem; */
  ${FlexCenter};
  width: 85%;
  ${CardStyle};
`;

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <AppColumn>
          <Card fullWidth={true} color="red" />
          <Card fullWidth={true} color="#bbb" />
          <Card fullWidth={true} />
        </AppColumn>
      </ThemeProvider>
    );
  }
}

export default App;
