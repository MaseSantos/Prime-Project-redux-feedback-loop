import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ReviewFeedbackButton extends Component {
    handleClick = () => {
        this.props.history.push("/review");
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Review Feedback</button>
            </div>
        );
    }
}

export default withRouter(ReviewFeedbackButton);
