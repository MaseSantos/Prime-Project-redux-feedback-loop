import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SubmitFormResponses extends Component {

    handleClick = () => {
        this.props.history.push("/success");
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Submit Responses</button>
            </div>
        );
    }
}

export default withRouter(SubmitFormResponses);
