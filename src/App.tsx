import * as React from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
// Custom
import Card from "src/components/Card";
import { theme, FlexCenter, CardStyle } from "src/styles";
import { Column } from "src/components/common";
import randomColorPicker from "src/lib/randomColorPicker";

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  #root {
    height: 100%;
    ${FlexCenter};
  }
`;

const AppColumn = Column.extend`
  /* margin: ${(props: any) => props.theme.spacing.unit}rem; */
  flex: 1;
  ${FlexCenter};
  ${CardStyle};
`;

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <AppColumn>
          <Card
            icon="명상아이콘"
            title="5분명상"
            fullWidth={true}
            color={randomColorPicker()}
          />
          <Card fullWidth={true} color={randomColorPicker()} />
          <Card fullWidth={true} color={randomColorPicker()} />
          <Card fullWidth={true} color={randomColorPicker()} />
          <Card fullWidth={true} color={randomColorPicker()} />
          <Card fullWidth={true} color={randomColorPicker()} />
        </AppColumn>
      </ThemeProvider>
    );
  }
}

export default App;
