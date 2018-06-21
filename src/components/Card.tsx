import * as React from "react";
// import { CardStyle } from "src/styles";
// import * as styled from "styled-components";

// const CardContainer = styled(div)`
//   ${CardStyle};
// `;

export interface ICardProps {
  raised?: boolean;
}

export default class Card extends React.Component<ICardProps, any> {
  public render() {
    return <div>Card</div>;
    // return <CardContainer>Card</CardContainer>;
  }
}
