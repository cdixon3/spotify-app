import React from "react";
import "./App.css";
import ReactRevealText from "react-reveal-text";
class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 300);
  }

  render() {
    return (
      <div className="upper-background">
        <div className="text-styles">
          <ReactRevealText show={this.state.show} text="MAKE IT UNCOMMON" />
        </div>
      </div>
    );
  }
}

export default Wrapper;
