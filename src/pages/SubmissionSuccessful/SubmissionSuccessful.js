import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartFormAgainButton from '../../components/buttons/StartFormAgainButton/StartFormAgainButton';

class SubmissionSuccessful extends Component {

    render() {
        return (
            <>
                <h2>Submission Successful!</h2>
                <StartFormAgainButton />
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(SubmissionSuccessful);
