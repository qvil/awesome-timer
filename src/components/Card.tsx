import * as React from "react";
import { CardStyle } from "src/styles";
import styled from "styled-components";

interface ICardContainerInterface {
  fullWidth?: boolean;
}

const CardContainer = styled<ICardContainerInterface, any>("div")`
  ${CardStyle};
  flex: 1;
  margin: ${(props: any) => props.theme.spacing.unit}rem;
  width: ${(props: any) => (props.fullWidth ? "100%" : "")};
`;

export interface ICardProps {
  raised?: boolean;
  fullWidth?: boolean;
}

export default class Card extends React.Component<ICardProps, any> {
  public render() {
    return <CardContainer {...this.props}>{this.props.children}</CardContainer>;
  }
}
