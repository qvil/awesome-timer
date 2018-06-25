import * as React from "react";
import * as ReactDOM from "react-dom";
import { CardStyle, FlexCenter } from "src/styles";
import styled from "styled-components";
import { Row } from "src/components/common";

interface ICardContainerInterface {
  fullWidth?: boolean;
}

const CardContainer = styled<ICardContainerInterface, any>("div")`
  ${CardStyle};
  ${FlexCenter};
  flex: ${props => (props.fullWidth ? 1 : 0)};
  margin: ${(props: any) => props.theme.spacing.unit}rem;
  cursor: pointer;
  background-color: ${props => props.color};
`;

const CardRow = Row.extend`
  ${FlexCenter};
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
  private audioRef: any = React.createRef();
  private audioDOM: any;

  public render() {
    const { startCount, stopCount } = this;
    const { time } = this.state;

    stopCount(time);
    return (
      <CardRow>
        <CardContainer {...this.props} onClick={startCount}>
          {this.props.children}
          {this.state.time}
          <audio
            src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
            ref={this.audioRef}
          >
            Your browser does not support the <code>audio</code> element.
          </audio>
        </CardContainer>
      </CardRow>
    );
  }

  private AudioOutput = () => {
    this.audioDOM = ReactDOM.findDOMNode(this.audioRef.current);

    this.audioDOM.play();
  };

  private stopCount = (time: number) => {
    if (time <= 0) {
      clearInterval(this.state.timer);
      this.AudioOutput();
    }
  };

  private startCount = () => {
    // private startCount = (time: number) => {
    const { time, timer } = this.state;

    // this.AudioOutput();

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
