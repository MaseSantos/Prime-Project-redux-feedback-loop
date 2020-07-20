import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class StartFormAgainButton extends Component {
    
    handleClick = () => {
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Start New Feedback Submission</button>
            </div>
        );
    }
}

export default withRouter(StartFormAgainButton);
