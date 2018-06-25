import * as React from "react";
import * as ReactDOM from "react-dom";
import { CardStyle, FlexCenter, RaisedCardStyle } from "src/styles";
import styled from "styled-components";
import { Row } from "src/components/common";

interface ICardContainerInterface {
  fullWidth?: boolean;
  raised?: boolean;
}

const CardContainer = styled<ICardContainerInterface, any>("div")`
  ${CardStyle};
  ${FlexCenter};
  flex: ${props => (props.fullWidth ? 1 : 0)};
  margin: ${(props: any) => props.theme.spacing.unit}rem;
  cursor: pointer;
  background-color: ${props => props.color};
  ${props =>
    props.color
      ? `background-color: ${props.color}`
      : `background: linear-gradient(45deg, #96f2d7 30%, #12b886 90%)`};
  ${props => (props.raised ? RaisedCardStyle : "")};
`;

export interface ICardProps {
  raised?: boolean;
  fullWidth?: boolean;
  color?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default class Card extends React.Component<ICardProps, any> {
  private audioRef: any = React.createRef();
  private audioDOM: any;
  private initTime: number = 3;
  private timer: any;

  constructor(props: any) {
    super(props);
    this.state = {
      raised: false,
      time: this.initTime
    };
  }
  // public

  public componentDidMount() {
    this.audioDOM = ReactDOM.findDOMNode(this.audioRef.current);
  }

  public render() {
    const { startCount, stopCount, handleMouse } = this;
    const { time, raised } = this.state;

    stopCount(time);
    return (
      <Row>
        <CardContainer
          {...this.props}
          raised={raised}
          onClick={startCount}
          onMouseEnter={handleMouse("Enter")}
          onMouseLeave={handleMouse("Leave")}
        >
          {this.props.children}
          {this.state.time}
          <audio
            src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
            ref={this.audioRef}
          >
            Your browser does not support the <code>audio</code> element.
          </audio>
        </CardContainer>
      </Row>
    );
  }

  private handleMouse = (name: string) => () => {
    if (name === "Enter") {
      this.setState({ raised: true });
    } else {
      this.setState({ raised: false });
    }
  };

  private playAudio = () => {
    this.audioDOM.play();
  };

  private stopCount = (time: number) => {
    if (time <= 0) {
      clearInterval(this.timer);
      this.playAudio();
    }
  };

  private startCount = () => {
    const { timer } = this;
    const { time } = this.state;

    if (time > 0) {
      this.timer = setInterval(() => {
        this.setState({ time: this.state.time - 1 });
      }, 1000);
    } else {
      clearInterval(timer);
      return;
    }
  };
}
