import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class FeelingButton extends Component {
  handleClick = () => {
    this.props.history.push("/feeling");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Start Feedback</button>
      </div>
    );
  }
}

export default withRouter(FeelingButton);
