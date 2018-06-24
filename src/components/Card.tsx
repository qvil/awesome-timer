import * as React from "react";
import { CardStyle, FlexCenter } from "src/styles";
import styled from "styled-components";

interface ICardContainerInterface {
  fullWidth?: boolean;
}

const CardContainer = styled<ICardContainerInterface, any>("div")`
  ${CardStyle};
  ${FlexCenter};
  flex: 1;
  margin: ${(props: any) => props.theme.spacing.unit}rem;
  width: ${(props: any) => (props.fullWidth ? "100%" : "")};
  cursor: pointer;
  background-color: ${props => props.color};
`;

export interface ICardProps {
  raised?: boolean;
  fullWidth?: boolean;
  color?: string;
}

export default class Card extends React.Component<ICardProps, any> {
  public state = {
    time: 1,
    timer: 0
  };

  public render() {
    const { startCount, stopCount } = this;
    const { time } = this.state;

    stopCount(time);
    return (
      <CardContainer {...this.props} onClick={startCount}>
        {this.props.children}
        {this.state.time}
      </CardContainer>
    );
  }

  private stopCount = (time: number) => {
    if (time <= 0) {
      clearInterval(this.state.timer);
      console.log("#####");
      // alert(1);
    }
  };

  private startCount = () => {
    // private startCount = (time: number) => {
    const { time, timer } = this.state;

    if (time > 0) {
      // this.setState(() => {
      //   return {
      //     timer: setInterval(() => {
      //       this.setState({ time: this.state.time - 1 });
      //     }, 1000)
      //   };
      // }, this.stopCount(this.state.time));
      this.setState({
        timer: setInterval(() => {
          this.setState({ time: this.state.time - 1 });
        }, 1000)
      });
    } else {
      clearInterval(timer);
      return;
    }
  };
}
