import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CommentsButton extends Component {
  handleClick = () => {
    this.props.history.push("/comments");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default withRouter(CommentsButton);
