import * as React from "react";
import { CardStyle } from "src/styles";
import styled from "styled-components";

interface ICardContainerInterface {
  name: string;
}

const CardContainer = styled<ICardContainerInterface, any>("div")`
  ${CardStyle};
`;

export interface ICardProps {
  raised?: boolean;
}

export default class Card extends React.Component<ICardProps, any> {
  public render() {
    return <CardContainer>Card</CardContainer>;
  }
}
