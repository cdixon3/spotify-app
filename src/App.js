import React from "react";
import "./App.css";
import ReactRevealText from "react-reveal-text";
import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";
import "react-awesome-button/src/styles/themes/theme-flat/styles.scss";
class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = { show: false, buttonShow: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 200);
    setTimeout(() => {
      this.setState({ buttonShow: true });
    }, 3000);
  }

  render() {
    return (
      <div className="upper-background">
        <div className="text-styles">
          <ReactRevealText show={this.state.show} text="MAKE IT UNCOMMON" />
        </div>
        <div className="button-styles">
          <AwesomeButton type="primary" visible={this.state.buttonShow}>
            GET STARTED
          </AwesomeButton>
        </div>
      </div>
    );
  }
}

export default Wrapper;
