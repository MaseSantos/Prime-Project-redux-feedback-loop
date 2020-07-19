import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class UnderstandingButton extends Component {
  handleClick = () => {
    this.props.history.push("/understanding");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default withRouter(UnderstandingButton);
