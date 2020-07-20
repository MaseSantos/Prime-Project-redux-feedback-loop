import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitFormResponse from '../../components/buttons/SubmitFormResponses/SubmitFormResponses';

class ReviewFeedback extends Component {
    
    state = {
        response: [
            {feeling: this.props.reduxState.feelingResponse.feeling},
            {understanding: this.props.reduxState.understandingResponse.understanding},
            {support: this.props.reduxState.supportResponse.support},
            {comments: this.props.reduxState.commentsResponse.comments}
        ]
    }

    componentDidMount = () =>{
        console.log("state:", this.state)
    }
    render() {
        return (
            <>
                <h3>Review Your Responses:</h3>
                <br />
                {this.state.response.map((item, index) => {
                    return <h5 key={index}>
                        Feeling Response: {item.feeling}
                        Understanding Response: {item.understanding}
                        Support Response: {item.support}
                        Comments: {item.comments}
                    </h5>
                })}
                <br/>
                <br/>
                <SubmitFormResponse />
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(ReviewFeedback);
